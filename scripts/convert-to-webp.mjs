import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname } from 'path';

const IMAGE_DIRS = [
  'public/images',
];

const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(fullPath);
    } else if (SUPPORTED_EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
      yield fullPath;
    }
  }
}

async function convertToWebp() {
  let converted = 0;
  let skipped = 0;

  for (const dir of IMAGE_DIRS) {
    for await (const filePath of walkDir(dir)) {
      const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

      // Skip if WebP already exists and is newer than source
      try {
        const [srcStat, webpStat] = await Promise.all([
          stat(filePath),
          stat(webpPath).catch(() => null),
        ]);
        if (webpStat && webpStat.mtimeMs > srcStat.mtimeMs) {
          console.log(`⏭️  Skipped (already up-to-date): ${filePath}`);
          skipped++;
          continue;
        }
      } catch {
        // stat failed, proceed with conversion
      }

      const srcSize = (await stat(filePath)).size;

      await sharp(filePath)
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);

      const webpSize = (await stat(webpPath)).size;
      const reduction = ((1 - webpSize / srcSize) * 100).toFixed(1);
      console.log(`✅ Converted: ${filePath}`);
      console.log(`   (${(srcSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB, ${reduction}% reduction)`);
      converted++;
    }
  }

  console.log(`\n🎉 Done! ${converted} converted, ${skipped} skipped.`);
}

convertToWebp().catch(console.error);

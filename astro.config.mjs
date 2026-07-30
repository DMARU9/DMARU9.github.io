// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMermaid from 'remark-mermaidjs';
import { unified } from '@astrojs/markdown-remark';
import { SITE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? SITE_URL,
	base: process.env.BASE_PATH ?? '/',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: unified({
			remarkPlugins: [
				[remarkMermaid, {
					mermaidConfig: {
						htmlLabels: false,
						fontFamily: '"Noto Sans CJK JP", "Hiragino Sans", "Yu Gothic", sans-serif',
						fontSize: 14,
						flowchart: {
							wrappingWidth: 320,
							padding: 16,
						},
					},
				}],
			],
		}),
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			defaultColor: false,
		},
	},
});

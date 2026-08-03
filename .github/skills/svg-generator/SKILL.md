---
name: svg-generator
description: '既存のブログ記事にSVG画像を追加します。記事を読み込み、テキストだけでは伝わりにくい概念やワークフローをSVGで可視化し、記事に埋め込みます。Use when: adding diagrams to existing blog posts, visualizing concepts in articles, creating SVG illustrations for blog content.'
argument-hint: '対象のブログ記事ファイル名を入力'
---

# SVG Generator — ブログ記事 SVG 追加スキル

既存のブログ記事を読み込み、**SVG 画像を新規生成**して記事に埋め込むスキルです。
テンプレートは使用しません。記事の内容に合わせて都度 SVG を一から作成します。

## ワークフロー

```
1. 記事を読み込む
2. SVG が効果的な箇所を特定する
3. ユーザーに確認・承認をもらう
4. SVG を新規生成
5. 記事に埋め込む
```

### Step 1: 記事を読み込む

対象の Markdown ファイルを全文読みます。

```bash
# 記事一覧を確認
ls src/content/blog/

# 記事を読み込む
read_file: src/content/blog/[記事ファイル名].md
```

### Step 2: SVG が効果的な箇所を特定する

以下の観点で記事を分析し、SVG が有効な箇所を洗い出します。

| 観点 | 例 |
|---|---|
| **ワークフロー** | 手順、フロー、処理の流れ |
| **概念の関係性** | ツール同士の関係、レイヤー構成 |
| **比較** | Before/After、選択肢の比較 |
| **構成** | フォルダ構成、システム構成 |
| **時間経過** | プロジェクトの進捗、歴史 |

**見つけやすいパターン**:
- 記事内に mermaid ブロックがある → SVG に置き換え可能
- コードブロックで構成を説明している → 図化可能
- 「〜の流れ」「〜の手順」という見出しがある → フローチャート化可能
- テーブルで比較している → 比較図化可能

### Step 3: ユーザーに確認

見つけた SVG 化候補をユーザーに提示します。

```markdown
以下の箇所に SVG 画像を追加します：

1. **公開フロー** — 「3 ステップで公開しよう」セクション
   → フローチャートで手順を可視化
2. **仕組み** — 「GitHub Pages とは？」セクション
   → 概念図で関係性を説明
3. **フォルダ構成** — 「プロジェクトを追加するには」セクション
   → 構成図で視覚化

どの SVG を作成しますか？
```

ユーザーの承認を得てから SVG を生成します。

### Step 4: SVG を新規生成

記事の内容を元に、都度 SVG を一から記述します。

**生成ルール**:
- テンプレートは使用しない
- 記事の内容に完全に合った SVG を手動で記述する
- デザインシステムに準拠する（後述）
- アクセシビリティ対応（`role="img"`, `aria-label`）を必ず含める

### Step 5: 記事に埋め込む

生成した SVG を保存し、Markdown 記事に挿入します。

```bash
# 保存先
public/images/blog/[記事のスラグ]/[図の名前].svg

# 記事への埋め込み
![図の説明](/images/blog/[記事のスラグ]/[図の名前].svg)
```

## デザインシステム

### モダンダークデザイン

ダークモードベースのモダンなデザインを採用します。

**必須要素**:
- ダークグラデーション背景
- グラデーション付きカラーボックス
- シャドウ効果（`feDropShadow`）
- 半透明オーバーレイ
- アクセシビリティ属性（`role="img"`, `aria-label`）

### カラーパレット

```svg
<defs>
  <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" style="stop-color:#0f172a" />
    <stop offset="100%" style="stop-color:#1e293b" />
  </linearGradient>
  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" style="stop-color:#3b82f6" />
    <stop offset="100%" style="stop-color:#2563eb" />
  </linearGradient>
</defs>
```

| 色 | コード | 用途 |
|---|---|---|
| ダーク背景 | `#0f172a` → `#1e293b` | SVG 全体の背景 |
| テキスト | `#f8fafc` | メインタイトル、見出し |
| セカンダリ | `#94a3b8` | 説明文、補足 |
| ブルー | `#3b82f6` → `#2563eb` | アクセント、プライマリ |
| グリーン | `#22c55e` → `#16a34a` | 成功、完了 |
| アンバー | `#f59e0b` → `#d97706` | 警告、注意 |
| レッド | `#ef4444` → `#dc222e` | エラー、停止 |
| パープル | `#a855f7` → `#9333ea` | 補助、装飾 |
| ボーダー | `rgba(255,255,255,0.1)` | 枠線、区切り |

### フォント

```svg
font-family="'Noto Sans JP', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif"
```

### サイズ目安

- **標準**: 900 x 400〜550 px
- **ワイド**: 900 x 600 px
- **コンパクト**: 900 x 300 px

### SVG 基本構造

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 450" role="img" aria-label="[図の説明]">
  <defs>
    <!-- グラデーション定義 -->
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a" />
      <stop offset="100%" style="stop-color:#1e293b" />
    </linearGradient>
    <!-- シャドウ -->
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- ダーク背景 -->
  <rect width="100%" height="100%" fill="url(#bg-gradient)" rx="16" />

  <!-- タイトルバー -->
  <rect x="0" y="0" width="900" height="56" rx="16" fill="rgba(255,255,255,0.05)" />
  <text x="40" y="36" font-family="'Noto Sans JP', sans-serif" font-size="20" font-weight="700" fill="#f8fafc">
    [タイトル]
  </text>

  <!-- メインコンテンツ -->
  <!-- ... -->

  <!-- フッター -->
  <rect x="0" y="[HEIGHT-30]" width="900" height="30" rx="16" fill="rgba(255,255,255,0.02)" />
  <text x="40" y="[HEIGHT-10]" font-family="'Noto Sans JP', sans-serif" font-size="11" fill="#475569">
    [フッターテキスト]
  </text>
</svg>
```

## よく使う SVG パターン

### カード

```svg
<g filter="url(#shadow)">
  <rect x="40" y="90" width="220" height="160" rx="14"
        fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.3)" stroke-width="1" />
  <rect x="40" y="90" width="220" height="36" rx="14" fill="url(#blue-gradient)" />
  <rect x="40" y="112" width="220" height="14" fill="url(#blue-gradient)" />
  <text x="150" y="115" text-anchor="middle" font-size="13" fill="#fff" font-weight="600">タイトル</text>
  <text x="150" y="155" text-anchor="middle" font-size="28">アイコン</text>
  <text x="150" y="190" text-anchor="middle" font-size="12" fill="#e2e8f0">説明テキスト</text>
</g>
```

### 矢印

```svg
<marker id="arrowhead" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
  <polygon points="0 0, 12 4, 0 8" fill="#475569" />
</marker>
<line x1="260" y1="200" x2="310" y2="200" stroke="#475569" stroke-width="2" marker-end="url(#arrowhead)" />
```

### 番号付きステップ

```svg
<circle cx="90" cy="135" r="28" fill="url(#blue-gradient)" />
<circle cx="90" cy="135" r="22" fill="#0f172a" />
<text x="90" y="141" text-anchor="middle" font-size="18" fill="#3b82f6" font-weight="700">1</text>
```

### グロー効果

```svg
<filter id="glow-green">
  <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#22c55e" flood-opacity="0.5"/>
</filter>
<g filter="url(#glow-green)">
  <circle cx="860" cy="200" r="28" fill="url(#green-gradient)" />
</g>
```

### URL バナー

```svg
<rect x="40" y="280" width="820" height="60" rx="12"
      fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" stroke-width="1" />
<text x="60" y="315" font-family="monospace" font-size="14" fill="#3b82f6">https://</text>
<text x="175" y="315" font-family="monospace" font-size="14" fill="#f8fafc" font-weight="600">example.com</text>
```

## 注意事項

- **テンプレート不使用**: 記事の内容に合わせて都度一から生成する
- **日本語**: `text-anchor="middle"` で中央揃えを基本とする
- **レスポンシブ**: `viewBox` を使用し、拡大縮小に対応させる
- **アクセシビリティ**: `role="img"` と `aria-label` を必ず含める
- **ファイルサイズ**: SVG を簡潔に保ち、不要な要素は削除する
- **一貫性**: 同じ記事内の SVG は同じデザインフォーマットを保つ

## When to Use

- 既存のブログ記事に SVG 画像を追加したいとき
- 記事のテキストを図で補完したいとき
- 記事の理解度を向上させたいとき
- 記事の見た目をリッチにしたいとき

// サイト基本情報：Header、SEO、RSS、sitemap、フッターに使用
export const SITE_TITLE = "DMARU9";
export const SITE_DESCRIPTION = "A modern, minimal site built with Astro & LogFlow Theme.";
export const SITE_URL = "https://DMARU9.github.io";
export const COPYRIGHT_NAME = "DMARU9";

// 各ページのタイトルと概要：タイトル領域と SEO description に使用
export const PAGE_COPY = {
  blog: {
    title: "記事",
    description: "時系列ですべての記事を表示します。",
    descriptionItalic: false,
  },
  collections: {
    title: "コレクション",
    description: "シリーズごとに関連記事を読む。",
    descriptionItalic: false,
  },
  tags: {
    title: "タグ",
    description: "テーマごとに記事を表示します。",
    descriptionItalic: false,
  },
  years: {
    title: "アーカイブ",
    description: "公開日時順に記事を表示します。",
    descriptionItalic: false,
  },
  friends: {
    title: "リンク",
    description: "おすすめの個人サイト",
    descriptionItalic: false,
  },
  about: {
    title: "このサイトについて",
    description: "作者、このサイト、コンテンツライセンスについて。",
    descriptionItalic: false,
  },
} as const;

// ヘッダーナビゲーション
export const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/blog", label: "記事" },
  { href: "/friends", label: "リンク" },
  { href: "/about", label: "このサイトについて" },
] as const;

// フッターソーシャルリンク；icon は SocialIcon のキー名と対応
export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/DMARU9",
    icon: "social/github",
  },
] as const;

// トップページの個人情報とコンテンツ数
export const HOME = {
  avatar: {
    src: "/favicon.svg",
    alt: "DMARU9 avatar",
  },
  motto: "Hello, World.",
  description: "モダンでミニマルな個人サイト。Astro & LogFlow Theme で構築。",
  recentPostsLimit: 6,
} as const;

// トップページ GitHub コントリビューショングラフ
export const GH_CONTRIBUTE = {
  title: "GitHub コントリビューション",
  description: "過去1年のオープンソース貢献記録",
  username: "DMARU9",
  profileUrl: "https://github.com/DMARU9",
  errorMessage: "GitHub コントリビューショングラフは一時的に利用できません。",
} as const;

// 静的全文検索；オフにするとヘッダーに検索アイコンを表示しない
export const SEARCH = {
  enabled: true,
  maxResults: 8,
} as const;

// リンクデータは別ファイルで管理
export { FRIEND_LINKS } from "./config/friend-links";

// コメントシステム設定（現在 giscus のみ対応）
export const COMMENTS = {
  enabled: false,
  provider: "giscus",
  repo: "owner/repository",
  repoId: "",
  category: "Announcements",
  categoryId: "",
  mapping: "pathname",
  themeLight: "light_protanopia",
  themeDark: "transparent_dark",
  lang: "zh-CN",
} as const;

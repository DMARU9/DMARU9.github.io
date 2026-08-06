---
title: "Step 0: GitHub Organization を作成する — 100 Seeds Challenge の基地づくり"
description: "100 Seeds Challenge の拠点として GitHub Organization「dmaru-labs」を作成し、最初の管理リポジトリを設立した手順を記録します。"
pubDate: 2026-08-06
tags: ["100-seeds-challenge", "build-in-public", "github"]
draft: false
enableComments: true
---

# Step 0: GitHub Organization を作成する — 100 Seeds Challenge の基地づくり

## この記事を読んでほしい人

- 100 Seeds Challenge を跟踪している人
- GitHub Organization を作りたい人
- Build in Public を実践している人

---

## 目次

- [なぜ Organization が必要なのか](#なぜ-organization-が必要なのか)
- [「dmaru-labs」とは](#dmaru-labsとは)
- [Organization の作成手順](#organization-の作成手順)
- [最初のリポジトリを設立](#最初のリポジトリを設立)
- [今後の運用方針](#今後の運用方針)
- [まとめ](#まとめ)

---

## なぜ Organization が必要なのか

100 Seeds Challenge を始めるにあたり、100個のプロダクトを **一本の GitHub アカウントに詰め込む** のは避けるべきだと考えました。

理由は3つあります：

1. **整理** — 個人リポジトリとチャレンジ用リポジトリを分けて、見通しを良くする
2. **スケール** — 将来的にコラボレーターが参加した場合に、Organization の方が扱いやすい
3. **ブランド** — チャレンジ全体を一つのブランドとして認識してもらう

---

## 「dmaru-labs」とは

[dmaru-labs](https://github.com/dmaru-labs) は、100 Seeds Challenge の拠点となる GitHub Organization です。

| 項目 | 内容 |
|------|------|
| 名前 | **dmaru-labs** |
| URL | [https://github.com/dmaru-labs](https://github.com/dmaru-labs) |
| 目的 | 100個の価値あるプロダクトを生み出す長期開発チャレンジ |
| 管理リポジトリ | [100-seeds](https://github.com/dmaru-labs/100-seeds) |

「dmaru」は私の開発者名 DMARU9 から、「labs」は実験場という意味を込めて命名しました。

---

## Organization の作成手順

実際の作成手順を記録します。

![GitHub Organization 作成ページ](/images/blog/00-create-github-organization/organization-create.webp)

### 1. GitHub にログインして Organization を作成

GitHub の右上のアバターから **Your organizations** → **New organization** を選択します（[公式ドキュメント](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)も参照）。


### 2. プランを選択

無料の **Free** プランで問題ありません。個人で使う分には十分な機能が揃っています（[GitHub Pricing](https://github.com/pricing)を参照）。


### 3. Organization 名と連絡先を入力

- **Organization name**: `dmaru-labs`
- **Contact email**: 自分のメールアドレス

### 4. 完成

作成が完了すると、`https://github.com/dmaru-labs` に Organization ページが作成されます。

![作成された dmaru-labs Organization](/images/blog/00-create-github-organization/organization-created.webp)

---

## 最初のリポジトリを設立

Organization 作成直後に、最初のリポジトリ [dmaru-labs/100-seeds](https://github.com/dmaru-labs/100-seeds) を作成しました。

![100-seeds リポジトリ](/images/blog/00-create-github-organization/100-seeds-repository.webp)

このリポジトリは **管理リポジトリ** として、以下の役割を果たします：

- **Seed の一覧管理** — 100個の Seed を追跡するための Issue や Project の運用
- **進捗の公開** — どの Seed を作成したか、ステータスは何かを可視化
- **振り返りの記録** — 各 Seed の振り返りや学びをドキュメント化

---

## 今後の運用方針

各 Seed プロダクトは、個別のリポジトリとして `dmaru-labs` 配下に作成していく予定です。

```
dmaru-labs/
├── 100-seeds     ← 管理リポジトリ（進捗の一元管理）
├── XXX           ← 最初のプロダクト
├── XXX           ← 2番目のプロダクト
└── ...
```

各リポジトリには、以下の情報を整理して記録していきます：

- **課題の定義** — 何を解決しようとしているか
- **仮説** — なぜその課題に価値があると考えるか
- **技術選定** — なぜその技術を使ったか
- **振り返り** — 成功 or 失敗した学び

---

## まとめ

100 Seeds Challenge の **Step 0** として、GitHub Organization の基地を整えました。

- ✅ Organization [dmaru-labs](https://github.com/dmaru-labs) を作成
- ✅ 管理リポジトリ [100-seeds](https://github.com/dmaru-labs/100-seeds) を設立
- 🚀 次は **Step 1: 最初の Seed に着手する**

「土台をしっかり作ること」もチャレンジの一部です。これから毎日、小さく価値を積み重ねていきます。

---

**関連記事**

- [100 Seeds Challenge を始める](/blog/100-seeds-challenge)

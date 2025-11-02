# Astro Blog with Claude Code CMS

Claude Code on the webを対話型CMSとして活用する、シンプルな静的ブログシステムです。

## 特徴

- **Astro**: 高速な静的サイトジェネレーター
- **GitHub Pages**: 無料ホスティング
- **Claude Code CMS**: 対話型のコンテンツ管理
- **Markdown**: シンプルな記事管理

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:4321` を開いてください。

### 3. ビルド

```bash
npm run build
```

ビルド結果は `dist/` ディレクトリに出力されます。

## ブログ記事の管理

ブログ記事の作成・編集・削除は、Claude Code on the webを使って対話的に行います。

詳しくは `CLAUDE.md` を参照してください。

### Wake Word

```
@ブログ管理
```

### 基本的な使い方

**新規記事の作成:**
```
@ブログ管理 新規記事を作成

タイトル: 新しい記事のタイトル
日付: 2025-11-03
著者: あなたの名前
説明: 記事の説明
内容:
記事の本文をMarkdown形式で記述...
```

**記事の編集:**
```
@ブログ管理 記事を編集

ファイル名: welcome.md
変更内容: タイトルを変更して、新しいセクションを追加
```

**記事の削除:**
```
@ブログ管理 記事を削除

ファイル名: old-post.md
```

## プロジェクト構造

```
cccms/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions設定
├── src/
│   ├── content/
│   │   ├── config.ts       # Content Collections設定
│   │   └── blog/           # ブログ記事（Markdown）
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   └── pages/
│       ├── index.astro     # トップページ
│       └── blog/
│           ├── index.astro # ブログ一覧
│           └── [...slug].astro  # 個別記事ページ
├── public/                 # 静的ファイル
├── astro.config.mjs        # Astro設定
├── package.json
├── CLAUDE.md               # Claude Code CMS使用ガイド
└── README.md               # このファイル
```

## デプロイ

このプロジェクトは、GitHub Actionsを使用して自動的にGitHub Pagesにデプロイされます。

1. GitHubリポジトリの設定で、GitHub Pagesを有効にします
2. Source を "GitHub Actions" に設定します
3. mainブランチにプッシュすると、自動的にビルド＆デプロイされます

## 技術スタック

- [Astro](https://astro.build/) - 静的サイトジェネレーター
- [GitHub Pages](https://pages.github.com/) - ホスティング
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [Claude Code](https://claude.ai/code) - 対話型CMS

## ライセンス

MIT

## 作者

Created with Claude Code on the web

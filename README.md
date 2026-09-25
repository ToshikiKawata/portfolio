# Portfolio — Toshiki Kawata

システムエンジニア / 個人開発者 Toshiki Kawata のポートフォリオサイトです。

- 公開URL: https://toshikikawata.vercel.app
- 構成: Next.js 16（App Router・静的生成）/ TypeScript / Tailwind CSS v4 / Vercel

## ページ

| パス | 内容 |
| --- | --- |
| `/` | 自己紹介・スキル・プロジェクト一覧・発信・連絡先 |
| `/projects/[slug]` | プロジェクト詳細（主な機能・技術スタック・システム構成・開発ヒストリー） |
| `/services` | Web制作の案内（トップページからはリンクしていない） |
| `/samples/taskflow` | LP制作サンプル（架空のサービス・検索対象外） |

## 掲載内容の更新

- プロジェクト: `app/lib/projects.ts`
- 記事: `app/lib/articles.ts`（1件以上あるとトップに「発信」セクションが表示される）
- 共有時のプレビュー画像・アイコン: `app/opengraph-image.tsx`・`app/icon.tsx`・`app/apple-icon.tsx`（ビルド時に画像を生成）

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。公開前にビルドが通ることを確認します。

```bash
npm run build
```

## デプロイ

Vercel（プロジェクト名 `portfolio`）へ `npx vercel deploy --prod` でデプロイしています。

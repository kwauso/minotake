# DaoX Applications
# ※これはDAOXアプリケーション「身の丈ストリート」です。
# ベースとなっているプロジェクトのリンクはhttps://gunma-yamaiku-dao.jp/です。

- CMSアプリケーション (apps/cms)
  - プロジェクト一覧
  - プロジェクト記事

- 申し込みフォーム機能(apps/form)
  - 個人情報入力
  - 身分証アップロード
  - (アカウント作成)

- GroupWare アプリケーション (apps/groupware)
  - アカウントログイン
  - 申し込み前、申込中
    - 申し込み詳細
  - 申し込み完了後
    - プロジェクトスペース
      - DMグループメッセージ
      - 投票提案機能
      - 投票機能

- APIバックエンドサーバー (apps/api)

## 起動方法

```sh
$npm run dev
$yarn dev
```

ホットリロードなので、開発サーバを立ち上げたまま手元のエディタ等でコードを変更するとブラウザに変更が反映されます。ただし**ハイドレーションエラー**が往々にして起きるので、apps/cms以下の.nextファイルとnode_moduleを削除し、ブラウザのキャッシュも削除した後apps/cms以下でnpm install →　npm run devを打つと動きます（動きました）。

ブラウザのキャッシュを消すだけが一番いいかもです

あと、変更を反映した後ブラウザを再起動しないと幸せになれます😇

## Turborepo kitchen sink starter

This is an official starter Turborepo with multiple meta-frameworks all working in harmony and sharing packages.

This example also shows how to use [Workspace Configurations](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces).

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e kitchen-sink
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `cms`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains `<CounterButton>` and `<Link>` components)
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting


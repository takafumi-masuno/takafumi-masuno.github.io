# takafumi-masuno.github.io

フロントエンドエンジニア Takafumi Masuno のポートフォリオサイトです。

- 日本語: https://takafumi-masuno.github.io/
- English: https://takafumi-masuno.github.io/en/

## 技術構成

- Next.js（App Router、`output: "export"` による静的出力）
- TypeScript / Tailwind CSS / Motion
- Biome（lint・整形）/ Vitest（テスト）
- GitHub Actions → GitHub Pages で公開

## 開発

```sh
pnpm install
pnpm dev        # 開発サーバー
pnpm lint       # Biome
pnpm typecheck  # tsc
pnpm test       # Vitest
pnpm build      # out/ に静的ファイルを出力
```

## 構成

| パス | 内容 |
|---|---|
| `src/content/profile.ts` | 言語に依存しないデータ（経歴の期間・技術、スキルの経験期間） |
| `src/content/ja.ts` / `en.ts` | 日本語・英語の文章。型で縛っており、片方だけ項目が欠けると型エラーになる |
| `src/app/(ja)` / `src/app/(en)/en` | `/`（日本語）と `/en/`（英語）のルートレイアウト・ページ |
| `src/lib/experience.ts` | 経験年数の計算（並行期間を重複なく合算） |
| `design/og-template.html` | SNS 共有用画像 `public/og.png` の元デザイン（1200×630 でスクリーンショットして作成） |

経験年数は、HTML にはビルド時点の値を書き出し、ブラウザで表示した日の値に計算し直します。JS が動かない環境向けに、GitHub Actions で毎月1日にも再ビルドします（公開リポジトリでは60日間更新がないと定期実行が自動停止されるため、止まったら Actions 画面から再有効化してください）。

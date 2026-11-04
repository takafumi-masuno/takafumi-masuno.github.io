import type { Metadata } from "next";
import { localePaths } from "@/content";
import { inter, notoSansJp } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  // noindex は Next.js が 404 に自動で付与する
  title: "404 | Takafumi Masuno",
};

/** どのルートにも一致しない URL 用の 404（日英併記） */
export default function GlobalNotFound() {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
      <body className="grid min-h-svh place-items-center px-4">
        <main className="text-center">
          <p className="font-mono text-6xl font-bold text-accent">404</p>
          <p className="mt-4">ページが見つかりませんでした。</p>
          <p lang="en" className="text-muted">
            The page you are looking for could not be found.
          </p>
          <p className="mt-8 flex justify-center gap-6 text-sm">
            <a href={localePaths.ja} className="text-accent hover:underline">
              トップへ戻る
            </a>
            <a
              href={localePaths.en}
              lang="en"
              hrefLang="en"
              className="text-accent hover:underline"
            >
              Back to home
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}

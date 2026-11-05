import type { ReactNode } from "react";
import type { Locale } from "@/content/types";
import { inter, notoSansJp } from "@/lib/fonts";
import { MotionProvider } from "./MotionProvider";

/** 日本語・英語それぞれのルートレイアウトで共通に使う html/body */
export function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={locale} className={`${inter.variable} ${notoSansJp.variable}`}>
      <body className="min-h-svh">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

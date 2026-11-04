import { Inter, Noto_Sans_JP } from "next/font/google";

// next/font はビルド時にフォントを取り込み、自サイトから配信する（実行時に Google へ通信しない）
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 日本語フォントはファイルが大きいため先読みしない
export const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages で配信するため静的 HTML として書き出す
  output: "export",
  // /en → out/en/index.html として出力し、GitHub Pages でそのまま配信できるようにする
  trailingSlash: true,
  experimental: {
    // ルートレイアウトが日英で2つあるため、共通の 404 は global-not-found で用意する
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

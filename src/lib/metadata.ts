import type { Metadata } from "next";
import { dictionaries, localePaths } from "@/content";
import { site } from "@/content/profile";
import type { Locale } from "@/content/types";

const ogLocales: Record<Locale, string> = { ja: "ja_JP", en: "en_US" };

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = dictionaries[locale];
  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePaths[locale],
      languages: {
        ja: localePaths.ja,
        en: localePaths.en,
        "x-default": localePaths.ja,
      },
    },
    openGraph: {
      type: "website",
      url: localePaths[locale],
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      locale: ogLocales[locale],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og.png"],
    },
  };
}

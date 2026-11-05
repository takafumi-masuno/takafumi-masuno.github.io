import { en } from "./en";
import { ja } from "./ja";
import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { ja, en };

/** 各言語のトップページのパス（/ が日本語、/en/ が英語） */
export const localePaths: Record<Locale, string> = {
  ja: "/",
  en: "/en/",
};

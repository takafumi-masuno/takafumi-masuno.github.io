import type { ReactNode } from "react";
import { RootDocument } from "@/components/RootDocument";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata = buildMetadata("ja");

/** 日本語ページ（/）のルートレイアウト */
export default function JaRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="ja">{children}</RootDocument>;
}

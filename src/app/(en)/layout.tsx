import type { ReactNode } from "react";
import { RootDocument } from "@/components/RootDocument";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata = buildMetadata("en");

/** 英語ページ（/en/）のルートレイアウト */
export default function EnRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}

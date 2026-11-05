import type { Locale } from "@/content/types";
import { type Period, toDuration, type YearMonth } from "./experience";

/** 経験月数を「5年8か月」「5 yrs 8 mos」の形で表す */
export function formatDuration(totalMonths: number, locale: Locale): string {
  const { years, months } = toDuration(totalMonths);
  if (locale === "ja") {
    if (years === 0) return `${months}か月`;
    return months === 0 ? `${years}年` : `${years}年${months}か月`;
  }
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}

const EN_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function formatYearMonth(value: YearMonth, locale: Locale): string {
  const [year, month] = value.split("-");
  if (locale === "ja") return `${year}/${month}`;
  return `${EN_MONTHS[Number(month) - 1]} ${year}`;
}

/** 期間を「2024/07 – 現在」「Jul 2024 – Present」の形で表す */
export function formatPeriod(
  period: Period,
  locale: Locale,
  present: string,
): string {
  const start = formatYearMonth(period.start, locale);
  const end =
    period.end === null ? present : formatYearMonth(period.end, locale);
  return `${start} – ${end}`;
}

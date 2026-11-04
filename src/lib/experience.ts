/** "YYYY-MM" 形式の年月 */
export type YearMonth = `${number}-${number}`;

/** 期間。end が null のものは現在も継続中 */
export type Period = {
  start: YearMonth;
  end: YearMonth | null;
};

const YEAR_MONTH_PATTERN = /^(\d{4})-(\d{2})$/;

/** 年月を「西暦0年1月からの通算月」に変換する */
export function toMonthIndex(value: YearMonth): number {
  const match = YEAR_MONTH_PATTERN.exec(value);
  if (!match) {
    throw new Error(`年月の形式が不正です（YYYY-MM で指定）: ${value}`);
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  if (month < 1 || month > 12) {
    throw new Error(`月は 01〜12 で指定してください: ${value}`);
  }
  return year * 12 + (month - 1);
}

/** Date を通算月に変換する（ビルド環境のタイムゾーンに依存しないよう UTC で扱う） */
export function dateToMonthIndex(date: Date): number {
  return date.getUTCFullYear() * 12 + date.getUTCMonth();
}

/**
 * 複数の期間を重複なく合算した月数を返す。
 * 開始月・終了月はどちらも含める（2021-04〜2021-04 は1か月）。
 * 並行していた案件の期間を二重に数えないため、月単位の和集合をとる。
 */
export function countMonths(periods: readonly Period[], today: Date): number {
  const current = dateToMonthIndex(today);
  const months = new Set<number>();
  for (const period of periods) {
    const start = toMonthIndex(period.start);
    const end = period.end === null ? current : toMonthIndex(period.end);
    if (end < start) {
      throw new Error(
        `期間の終了が開始より前です: ${period.start}〜${period.end ?? "現在"}`,
      );
    }
    for (let month = start; month <= Math.min(end, current); month++) {
      months.add(month);
    }
  }
  return months.size;
}

export type Duration = { years: number; months: number };

export function toDuration(totalMonths: number): Duration {
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
}

"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/content/types";
import { countMonths, type Period } from "@/lib/experience";
import { formatDuration } from "@/lib/format";
import { SkillBar } from "./SkillBar";

export type SkillRow = {
  id: string;
  name: string;
  periods: readonly Period[] | null;
  note?: string;
};

/**
 * スキルと経験年数の一覧。
 * HTML はビルド時点の日付で書き出し、ブラウザでは表示した日の日付で計算し直す。
 * 定期再ビルドが止まっても、年数が古いまま表示されないようにするため。
 */
export function SkillList({
  rows,
  locale,
  lessThanYear,
  builtAt,
}: {
  rows: readonly SkillRow[];
  locale: Locale;
  lessThanYear: string;
  /** ビルド時刻（ミリ秒）。初回描画をビルド結果の HTML と一致させるために使う */
  builtAt: number;
}) {
  const [today, setToday] = useState(() => new Date(builtAt));
  useEffect(() => {
    setToday(new Date());
  }, []);

  const computed = rows.map((row) => ({
    ...row,
    months: row.periods === null ? null : countMonths(row.periods, today),
  }));
  const maxMonths = Math.max(...computed.map((row) => row.months ?? 0));

  return (
    <ul className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2">
      {computed.map((row) => (
        <li key={row.id}>
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-medium">{row.name}</span>
            <span className="shrink-0 font-mono text-sm text-accent">
              {row.months === null
                ? lessThanYear
                : formatDuration(row.months, locale)}
            </span>
          </div>
          <div className="mt-2">
            <SkillBar
              ratio={row.months === null ? 0 : row.months / maxMonths}
              partial={row.months === null}
            />
          </div>
          {row.note && <p className="mt-1.5 text-xs text-muted">{row.note}</p>}
        </li>
      ))}
    </ul>
  );
}

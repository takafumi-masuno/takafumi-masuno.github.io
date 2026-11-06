import { describe, expect, it } from "vitest";
import { countMonths } from "@/lib/experience";
import { dictionaries } from "./index";
import { careers, libraries, skills, works } from "./profile";
import { careerIds, locales, skillIds, workIds } from "./types";

/** 文字列の値をすべて取り出す（空文字の検出用） */
function collectStrings(value: unknown, path = ""): [string, string][] {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      collectStrings(item, `${path}[${index}]`),
    );
  }
  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) =>
      collectStrings(item, path ? `${path}.${key}` : key),
    );
  }
  return [];
}

describe("コンテンツの整合性", () => {
  it.each(locales)("%s: 空の文章がない", (locale) => {
    const empty = collectStrings(dictionaries[locale]).filter(
      ([, text]) => text.trim() === "",
    );
    expect(empty).toEqual([]);
  });

  it("日英で配列の件数が一致する", () => {
    const { ja, en } = dictionaries;
    expect(en.about.paragraphs).toHaveLength(ja.about.paragraphs.length);
    expect(en.about.strengths).toHaveLength(ja.about.strengths.length);
  });

  it("日英で注記のあるスキルが一致する", () => {
    const { ja, en } = dictionaries;
    expect(Object.keys(en.skills.notes).sort()).toEqual(
      Object.keys(ja.skills.notes).sort(),
    );
  });

  it("経歴・スキル・作品のデータが ID の一覧と過不足なく対応する", () => {
    expect(careers.map((career) => career.id)).toEqual([...careerIds]);
    expect(skills.map((skill) => skill.id)).toEqual([...skillIds]);
    expect(works.map((work) => work.id)).toEqual([...workIds]);
  });

  it("経歴は新しい順に並んでいる", () => {
    const starts = careers.map((career) => career.period.start);
    expect(starts).toEqual([...starts].sort().reverse());
  });

  it("技術タグに重複がない（React の key に使うため）", () => {
    for (const list of [...careers.map((career) => career.tech), libraries]) {
      expect(new Set(list).size).toBe(list.length);
    }
  });
});

describe("経験年数（2026年11月時点の試算と一致するか）", () => {
  const today = new Date(Date.UTC(2026, 10, 5));
  const monthsOf = (id: string) => {
    const periods = skills.find((skill) => skill.id === id)?.periods;
    if (!periods) throw new Error(`期間が定義されていません: ${id}`);
    return countMonths(periods, today);
  };

  it.each([
    ["typescript", 68], // 5年8か月
    ["react", 41], // 3年5か月
    ["angular", 27], // 2年3か月
    ["java", 19], // 1年7か月
    ["nextjs", 13], // 約1年
    ["aws", 13], // 約1年
  ])("%s は %i か月", (id, expected) => {
    expect(monthsOf(id)).toBe(expected);
  });
});

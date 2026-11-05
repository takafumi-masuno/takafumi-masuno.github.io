import { describe, expect, it } from "vitest";
import { countMonths, toDuration, toMonthIndex } from "./experience";

// 2026年11月（月の途中）を「今日」とする
const today = new Date(Date.UTC(2026, 10, 5));

describe("countMonths", () => {
  it("開始月と終了月を両方含めて数える", () => {
    expect(countMonths([{ start: "2021-04", end: "2021-04" }], today)).toBe(1);
    expect(countMonths([{ start: "2021-04", end: "2022-03" }], today)).toBe(12);
  });

  it("継続中の期間は今月まで数える", () => {
    // 2021-04〜2026-11 = 68か月
    expect(countMonths([{ start: "2021-04", end: null }], today)).toBe(68);
  });

  it("並行していた期間を二重に数えない", () => {
    // React: 2021-04〜2022-03(12) + 2024-07〜現在(29)。2025-11〜は 2024-07〜 と重なる
    const periods = [
      { start: "2021-04", end: "2022-03" },
      { start: "2024-07", end: null },
      { start: "2025-11", end: null },
    ] as const;
    expect(countMonths(periods, today)).toBe(41);
  });

  it("年をまたぐ境目を正しく数える", () => {
    expect(countMonths([{ start: "2019-11", end: "2020-02" }], today)).toBe(4);
  });

  it("未来の終了月は今月までで打ち切る", () => {
    expect(countMonths([{ start: "2026-10", end: "2027-03" }], today)).toBe(2);
  });

  it("終了が開始より前ならエラーにする", () => {
    expect(() =>
      countMonths([{ start: "2022-04", end: "2022-03" }], today),
    ).toThrow("期間の終了が開始より前です");
  });
});

describe("toMonthIndex", () => {
  it("不正な形式・月はエラーにする", () => {
    expect(() => toMonthIndex("2021-4" as never)).toThrow(
      "年月の形式が不正です",
    );
    expect(() => toMonthIndex("2021-13")).toThrow("月は 01〜12");
  });
});

describe("toDuration", () => {
  it("月数を年と月に分ける", () => {
    expect(toDuration(68)).toEqual({ years: 5, months: 8 });
    expect(toDuration(12)).toEqual({ years: 1, months: 0 });
    expect(toDuration(5)).toEqual({ years: 0, months: 5 });
  });
});

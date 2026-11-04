import { describe, expect, it } from "vitest";
import { formatDuration, formatPeriod } from "./format";

describe("formatDuration", () => {
  it("日本語", () => {
    expect(formatDuration(68, "ja")).toBe("5年8か月");
    expect(formatDuration(24, "ja")).toBe("2年");
    expect(formatDuration(5, "ja")).toBe("5か月");
  });

  it("英語（単数・複数）", () => {
    expect(formatDuration(68, "en")).toBe("5 yrs 8 mos");
    expect(formatDuration(13, "en")).toBe("1 yr 1 mo");
    expect(formatDuration(24, "en")).toBe("2 yrs");
    expect(formatDuration(5, "en")).toBe("5 mos");
  });
});

describe("formatPeriod", () => {
  it("終了月あり", () => {
    const period = { start: "2021-04", end: "2022-03" } as const;
    expect(formatPeriod(period, "ja", "現在")).toBe("2021/04 – 2022/03");
    expect(formatPeriod(period, "en", "Present")).toBe("Apr 2021 – Mar 2022");
  });

  it("継続中", () => {
    const period = { start: "2024-07", end: null } as const;
    expect(formatPeriod(period, "ja", "現在")).toBe("2024/07 – 現在");
    expect(formatPeriod(period, "en", "Present")).toBe("Jul 2024 – Present");
  });
});

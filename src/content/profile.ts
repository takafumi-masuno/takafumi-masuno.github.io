import type { Period } from "@/lib/experience";
import type { CareerId, SkillId } from "./types";

/** 言語に依存しないプロフィールデータ（期間・技術名など） */

export const site = {
  name: "Takafumi Masuno",
  url: "https://takafumi-masuno.github.io",
  githubUrl: "https://github.com/takafumi-masuno",
  repositoryUrl: "https://github.com/takafumi-masuno/takafumi-masuno.github.io",
} as const;

export type CareerData = {
  id: CareerId;
  period: Period;
  tech: readonly string[];
};

/** 職務経歴（新しい順） */
export const careers: readonly CareerData[] = [
  {
    id: "game-ec",
    period: { start: "2025-11", end: null },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Valibot",
      "NextAuth.js v5",
      "next-intl",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "Biome",
      "Go",
      "AWS",
    ],
  },
  {
    id: "logistics",
    period: { start: "2024-07", end: null },
    tech: [
      "React",
      "TypeScript",
      "Chakra UI",
      "Jotai",
      "React Hook Form",
      "Zod",
      "React Router",
      "SWR",
      "React-PDF",
      "Vitest",
      "AWS",
    ],
  },
  {
    id: "housing",
    period: { start: "2023-06", end: "2024-06" },
    tech: ["Angular", "TypeScript", "Python", "Adobe XD"],
  },
  {
    id: "document",
    period: { start: "2022-04", end: "2023-05" },
    tech: ["Angular", "TypeScript", "Java", "PrimeNG", "jQuery"],
  },
  {
    id: "elearning",
    period: { start: "2021-04", end: "2022-03" },
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Rebass",
      "MUI",
      "React Testing Library",
      "Jest",
    ],
  },
  {
    // 金融・保険系の複数案件を1項目にまとめて掲載する
    id: "finance",
    period: { start: "2019-11", end: "2021-02" },
    tech: ["Java", "VBA", "Excel"],
  },
];

export type SkillData = {
  id: SkillId;
  name: string;
  /**
   * 経験年数の計算に使う期間。並行期間は重複なく合算する。
   * null は業務での利用が一部にとどまるもので、年数ではなく「1年未満」と表示する。
   */
  periods: readonly Period[] | null;
};

export const skills: readonly SkillData[] = [
  {
    id: "typescript",
    name: "TypeScript / JavaScript / HTML・CSS",
    periods: [{ start: "2021-04", end: null }],
  },
  {
    id: "react",
    name: "React",
    periods: [
      { start: "2021-04", end: "2022-03" },
      { start: "2024-07", end: null },
    ],
  },
  {
    id: "angular",
    name: "Angular",
    periods: [{ start: "2022-04", end: "2024-06" }],
  },
  {
    id: "nextjs",
    name: "Next.js",
    periods: [{ start: "2025-11", end: null }],
  },
  {
    id: "java",
    name: "Java",
    // Java で開発した期間のみ数える（ログ確認などの補助的な利用は含めない）
    periods: [
      { start: "2020-03", end: "2020-07" },
      { start: "2022-04", end: "2023-05" },
    ],
  },
  {
    id: "aws",
    name: "AWS",
    // デプロイ・利用が中心のため、本格的に扱い始めた 2025/11 から数える
    periods: [{ start: "2025-11", end: null }],
  },
  { id: "go", name: "Go", periods: null },
  { id: "python", name: "Python", periods: null },
];

/** 年数ではなくタグで見せるライブラリ・ツール */
export const libraries: readonly string[] = [
  "Tailwind CSS",
  "shadcn/ui",
  "Chakra UI",
  "MUI",
  "PrimeNG",
  "Zustand",
  "Jotai",
  "Redux",
  "TanStack Query",
  "SWR",
  "React Hook Form",
  "Zod",
  "Valibot",
  "NextAuth.js",
  "next-intl",
  "React Router",
  "React-PDF",
  "Vitest",
  "Jest",
  "React Testing Library",
  "Playwright",
  "Biome",
];

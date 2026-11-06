export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];

export const careerIds = [
  "game-ec",
  "logistics",
  "housing",
  "document",
  "elearning",
  "finance",
] as const;
export type CareerId = (typeof careerIds)[number];

export const skillIds = [
  "typescript",
  "react",
  "angular",
  "nextjs",
  "java",
  "aws",
  "go",
  "python",
] as const;
export type SkillId = (typeof skillIds)[number];

export const workIds = ["invoice-generator", "portfolio"] as const;
export type WorkId = (typeof workIds)[number];

export const sectionIds = ["about", "skills", "career", "works"] as const;
export type SectionId = (typeof sectionIds)[number];

/** 言語ごとに用意する文章。Record で縛り、片方の言語だけ項目が欠けると型エラーになるようにする */
export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: Record<SectionId, string> & {
    switchLanguage: string;
    skipToContent: string;
  };
  hero: {
    role: string;
    stack: string;
    catchphrase: string;
  };
  about: {
    heading: string;
    paragraphs: readonly string[];
    strengthsHeading: string;
    strengths: readonly { title: string; body: string }[];
  };
  skills: {
    heading: string;
    lead: string;
    lessThanYear: string;
    notes: Partial<Record<SkillId, string>>;
    librariesHeading: string;
  };
  career: {
    heading: string;
    present: string;
    labels: {
      summary: string;
      role: string;
      tech: string;
      achievements: string;
    };
    items: Record<
      CareerId,
      {
        industry: string;
        title: string;
        summary: string;
        role: string;
        achievements: string;
      }
    >;
  };
  works: {
    heading: string;
    labels: {
      demo: string;
      source: string;
    };
    items: Record<WorkId, { title: string; body: string }>;
  };
  footer: {
    github: string;
  };
};

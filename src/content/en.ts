import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Takafumi Masuno | Frontend Engineer",
    description:
      "Portfolio of Takafumi Masuno, a frontend engineer building business applications with React and TypeScript across finance, education, housing, logistics, and e-commerce.",
  },
  nav: {
    about: "About",
    skills: "Skills",
    career: "Career",
    works: "Works",
    switchLanguage: "日本語",
    skipToContent: "Skip to content",
  },
  hero: {
    role: "Frontend Engineer",
    stack: "React · TypeScript",
    catchphrase:
      "I learn how the business works, then build screens people use.",
  },
  about: {
    heading: "About",
    paragraphs: [
      "I'm a frontend engineer at an IT services firm, working on client projects. I started my career in software testing in 2019, and since 2021 I've focused on frontend development with React, Angular, and TypeScript, working on systems in finance, education, housing, logistics, and e-commerce.",
      "Today I work on a team practicing AI-assisted, spec-driven development, where I handle everything from requirements definition to implementation. I take a product-minded approach — for example, analyzing GA4 data to find and propose the features users need.",
      "I like to try new technologies hands-on, and when something is unclear, I dig in until I understand it. The eye for detail I built in software testing shapes how I work, and I care about delivering high-quality software.",
    ],
    strengthsHeading: "Strengths",
    strengths: [
      {
        title: "Owning the frontend end to end",
        body: "On a 62-screen system replacement, I handled everything from library selection through design, implementation, and deployment to AWS.",
      },
      {
        title: "Product mindset",
        body: "Proposing features based on data, and building the workflows that power AI-driven development.",
      },
      {
        title: "Commitment to quality",
        body: "A career that began in software testing, and a habit of keeping test code in good shape.",
      },
    ],
  },
  skills: {
    heading: "Skills",
    lead: "Years of professional experience. Overlapping projects are counted only once.",
    lessThanYear: "< 1 yr",
    notes: {
      aws: "Mainly deployment and day-to-day use",
      go: "Partial backend work",
      python: "About 3 months at work, plus personal projects",
    },
    librariesHeading: "Libraries and tools used at work",
  },
  career: {
    heading: "Career",
    present: "Present",
    labels: {
      summary: "Overview",
      role: "Scope / Role",
      tech: "Tech",
      achievements: "Highlights",
    },
    items: {
      "game-ec": {
        industry: "E-commerce (Gaming)",
        title: "Gaming e-commerce site",
        summary:
          "Development of an e-commerce site for gaming products, on a team practicing AI-assisted, spec-driven development.",
        role: "Requirements definition through implementation / Frontend developer (with some backend work)",
        achievements:
          "Analyzed GA4 data to plan and propose new features. Continuously improve and adopt the skills and workflows that keep AI-driven development running.",
      },
      logistics: {
        industry: "Logistics",
        title: "Dispatch and accounting system replacement",
        summary:
          "Replacement of a dispatch management system and an accounting system for a trucking company (2 categories, 10 subcategories, 62 screens).",
        role: "Detailed design (master data screens) through implementation, scenario testing, and deployment / Frontend owner (mostly solo)",
        achievements:
          "Handled everything from library selection to deployment on AWS on my own. Built reporting features with React-PDF. Learned the domain knowledge of the trucking business.",
      },
      housing: {
        industry: "Housing",
        title: "Admin console for custom homes",
        summary:
          "Development of an admin console for a custom home builder. Also contributed to part of a website and to a deep learning project (about 3 months).",
        role: "API design through implementation / Developer",
        achievements:
          "Implemented screens from the basic design documents and Adobe XD designs. Designed the required APIs and developed the BFF layer.",
      },
      document: {
        industry: "Business systems",
        title: "Document management system",
        summary:
          "Development of a document management system for business use (waterfall).",
        role: "Basic design through unit testing, plus maintenance / Developer",
        achievements:
          "Owned the frontend from basic design through unit testing. Also built the Java service layer connecting the frontend and backend, and handled new features and maintenance.",
      },
      elearning: {
        industry: "Education",
        title: "E-learning system",
        summary: "Frontend development for an e-learning system.",
        role: "Implementation and testing / Developer",
        achievements:
          "Rebuilt Rails-rendered screens as a React and TypeScript SPA. Added and updated tests with React Testing Library and Jest.",
      },
      finance: {
        industry: "Finance & Insurance",
        title: "Testing and development support",
        summary:
          "Testing and development support for an insurance company's agent-facing system and website, and for an international remittance system.",
        role: "Unit testing, manual testing, and release work / Tester and development support",
        achievements:
          "Tested across multiple devices. Streamlined work with VBA. Helped investigate bugs by reviewing logs and JSON.",
      },
    },
  },
  works: {
    heading: "Works",
    labels: {
      demo: "Open demo",
      source: "View source on GitHub",
    },
    items: {
      "invoice-generator": {
        title: "Estimate & Invoice Generator",
        body: "A web app that creates estimates and Japanese qualified invoices and exports them as PDF, entirely in the browser. No sign-up is needed, and your data never leaves the browser. I designed it around the invoice requirements and tax rounding rules, and CI runs end-to-end and accessibility tests. The UI is in Japanese only.",
      },
      portfolio: {
        title: "This website",
        body: "Built with Next.js and TypeScript. Statically exported and available in Japanese and English.",
      },
    },
  },
  footer: {
    github: "GitHub",
  },
};

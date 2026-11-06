import type { Dictionary } from "./types";

export const ja: Dictionary = {
  meta: {
    title: "Takafumi Masuno | フロントエンドエンジニア",
    description:
      "React・TypeScript を中心に、金融・教育・住宅・物流・EC の業務システムを開発してきたフロントエンドエンジニア Takafumi Masuno のポートフォリオです。",
  },
  nav: {
    about: "自己紹介",
    skills: "スキル",
    career: "職務経歴",
    works: "作品",
    switchLanguage: "English",
    skipToContent: "本文へスキップ",
  },
  hero: {
    role: "フロントエンドエンジニア",
    stack: "React・TypeScript",
    catchphrase: "業務を理解して、使われる画面をつくる。",
  },
  about: {
    heading: "自己紹介",
    paragraphs: [
      "SES のフロントエンドエンジニアです。2019年にテスト業務からキャリアを始め、2021年からは React・Angular・TypeScript を使ったフロントエンド開発を中心に、金融・教育・住宅・物流・EC など、さまざまな業界のシステムに関わってきました。",
      "現在は AI を活用した仕様駆動開発の現場で、要件定義から実装までを担当しています。GA4 のデータから必要な機能を考えて提案するなど、プロダクトの視点を持った開発に取り組んでいます。",
      "新しい技術や気になったことは、実際に触って確かめる性格です。分からないことは分かるまで調べます。テスト業務で身につけた「細かいところに気づく」視点を活かして、品質の高いものづくりを大切にしています。",
    ],
    strengthsHeading: "強み",
    strengths: [
      {
        title: "フロントエンドを一人で担える",
        body: "62画面規模のリプレイスで、ライブラリ選定から設計・実装・AWS へのデプロイまで担当",
      },
      {
        title: "プロダクトの視点",
        body: "データをもとにした機能の提案と、AI 駆動開発の仕組みづくり",
      },
      {
        title: "品質への意識",
        body: "テスト業務からキャリアを始めた経験と、テストコードの整備",
      },
    ],
  },
  skills: {
    heading: "スキル",
    lead: "業務での経験年数です。並行していた案件の期間は重複して数えていません。",
    lessThanYear: "1年未満",
    notes: {
      aws: "デプロイ・利用が中心",
      go: "バックエンド領域を一部担当",
      python: "業務で約3か月＋個人開発",
    },
    librariesHeading: "業務で使ったライブラリ・ツール",
  },
  career: {
    heading: "職務経歴",
    present: "現在",
    labels: {
      summary: "概要",
      role: "工程・役割",
      tech: "技術",
      achievements: "成果・工夫",
    },
    items: {
      "game-ec": {
        industry: "EC（ゲーム）",
        title: "ゲーム関連 EC サイトの開発",
        summary:
          "ゲーム関連商品を扱う EC サイトの開発。AI を活用した仕様駆動開発の現場",
        role: "要件定義〜実装／フロントエンド開発メンバー（バックエンドも一部担当）",
        achievements:
          "GA4 のデータを分析し、必要な機能を企画・提案。AI 駆動開発を回すためのスキルやワークフローを日々改良・導入",
      },
      logistics: {
        industry: "物流",
        title: "配車管理・会計システムのリプレイス",
        summary:
          "運送業向けの配車管理システムと会計システムの刷新（大分類2・中分類10・小分類62画面）",
        role: "詳細設計（マスタ管理画面）〜実装、シナリオテスト、デプロイ／フロントエンド担当（基本的に1人で対応）",
        achievements:
          "ライブラリ選定から AWS 環境へのデプロイまでを一人で担当。React-PDF で帳票機能を構築。運送業の業務知識を習得",
      },
      housing: {
        industry: "住宅",
        title: "注文住宅の管理画面",
        summary:
          "注文住宅の管理画面の開発。Web サイトの一部の開発や、ディープラーニング関連のプロジェクト（約3か月）にも参加",
        role: "API 設計〜実装／開発メンバー",
        achievements:
          "基本設計書と XD のデザインをもとに画面を実装。必要な API を設計し、BFF 層を開発",
      },
      document: {
        industry: "業務システム",
        title: "文書管理システム",
        summary: "文書を管理する業務システムの開発（ウォーターフォール）",
        role: "基本設計〜単体テスト、保守／開発メンバー",
        achievements:
          "フロントエンドを基本設計から単体テストまで担当。フロントとバックエンドをつなぐサービス層（Java）も開発。追加機能の開発と保守",
      },
      elearning: {
        industry: "教育",
        title: "E ラーニングシステム",
        summary: "E ラーニングシステムのフロントエンド開発",
        role: "実装・テスト／開発メンバー",
        achievements:
          "Rails で書かれていた画面を React・TypeScript で SPA 化。RTL と Jest でテストコードを追加・修正",
      },
      finance: {
        industry: "金融・保険",
        title: "システムのテスト・開発支援",
        summary:
          "保険会社の代理店向けシステムや Web サイト、国際送金関連システムのテスト・開発支援",
        role: "単体テスト・打鍵テスト・リリース作業／テスター・開発支援",
        achievements:
          "マルチデバイスでのテストを実施。VBA で作業を効率化。ログや JSON を確認して不具合の調査を支援",
      },
    },
  },
  works: {
    heading: "作品",
    labels: {
      demo: "デモを見る",
      source: "GitHub でソースを見る",
    },
    items: {
      "invoice-generator": {
        title: "見積書・請求書ジェネレーター",
        body: "見積書と適格請求書（インボイス）をブラウザだけで作成し、PDF で出力できる Web アプリです。登録は不要で、入力したデータは外部に送信しません。インボイス制度の記載事項と端数処理を調べて設計し、E2E テストとアクセシビリティ検査を CI で実行しています。",
      },
      portfolio: {
        title: "このサイト",
        body: "Next.js・TypeScript で作成。静的出力で、日本語と英語に対応しています。",
      },
    },
  },
  footer: {
    github: "GitHub",
  },
};

import { dictionaries } from "@/content";
import { careers, libraries, site, skills, works } from "@/content/profile";
import type { Dictionary, Locale } from "@/content/types";
import { formatPeriod } from "@/lib/format";
import { Header } from "./Header";
import { Reveal } from "./Reveal";
import { Section, Tag } from "./Section";
import { SkillList, type SkillRow } from "./SkillList";

/**
 * 1ページ構成のトップページ。日本語・英語で共通。
 * 経験年数は HTML にはビルド時点の値で書き出し、ブラウザで表示日の値に計算し直す。
 */
export function Home({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const buildDate = new Date();
  return (
    <>
      <Header locale={locale} dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <About dict={dict} />
        <Skills dict={dict} locale={locale} today={buildDate} />
        <Career dict={dict} locale={locale} />
        <Works dict={dict} />
      </main>
      <Footer dict={dict} year={buildDate.getUTCFullYear()} />
    </>
  );
}

function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden">
      <div aria-hidden="true" className="-z-10 pointer-events-none">
        <div className="blob -top-24 -left-24 size-96 bg-(--blob-1)" />
        <div
          className="blob top-1/3 -right-32 size-[28rem] bg-(--blob-2)"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)] bg-size-[24px_24px]" />
      </div>
      <div className="mx-auto w-full max-w-5xl px-4 pt-16 sm:px-6">
        <Reveal immediate>
          <p className="font-medium text-accent">
            {dict.hero.role}
            <span className="mx-2 text-muted">/</span>
            <span className="inline-block text-muted">{dict.hero.stack}</span>
          </p>
        </Reveal>
        <Reveal immediate delay={0.1}>
          <h1 className="mt-4 text-5xl leading-tight font-bold tracking-tight sm:text-7xl">
            <span className="text-gradient">Takafumi Masuno</span>
          </h1>
        </Reveal>
        <Reveal immediate delay={0.2}>
          <p className="mt-6 max-w-2xl text-xl text-fg/90 sm:text-2xl">
            {dict.hero.catchphrase}
          </p>
        </Reveal>
        <Reveal immediate delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#career"
              className="rounded-full bg-accent px-6 py-3 font-medium text-on-accent shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {dict.career.heading}
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About({ dict }: { dict: Dictionary }) {
  return (
    <Section id="about" index={1} heading={dict.about.heading}>
      <Reveal className="max-w-3xl space-y-5 text-fg/90">
        {dict.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Reveal>
      <h3 className="mt-14 text-lg font-semibold">
        {dict.about.strengthsHeading}
      </h3>
      <ul className="mt-5 grid gap-4 md:grid-cols-3">
        {dict.about.strengths.map((strength, index) => (
          <li key={strength.title}>
            <Reveal
              delay={index * 0.08}
              className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
            >
              <p className="font-semibold text-accent">{strength.title}</p>
              <p className="mt-2 text-sm text-muted">{strength.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Skills({
  dict,
  locale,
  today,
}: {
  dict: Dictionary;
  locale: Locale;
  today: Date;
}) {
  const rows: SkillRow[] = skills.map((skill) => ({
    id: skill.id,
    name: skill.name,
    periods: skill.periods,
    note: dict.skills.notes[skill.id],
  }));
  return (
    <Section id="skills" index={2} heading={dict.skills.heading}>
      <p className="text-muted">{dict.skills.lead}</p>
      <SkillList
        rows={rows}
        locale={locale}
        lessThanYear={dict.skills.lessThanYear}
        builtAt={today.getTime()}
      />
      <h3 className="mt-14 text-lg font-semibold">
        {dict.skills.librariesHeading}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {libraries.map((library) => (
          <Tag key={library}>{library}</Tag>
        ))}
      </ul>
    </Section>
  );
}

function Career({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { labels } = dict.career;
  return (
    <Section id="career" index={3} heading={dict.career.heading}>
      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-10">
        {careers.map((career) => {
          const item = dict.career.items[career.id];
          return (
            <li key={career.id} className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-[calc(1.5rem+5px)] size-2.5 rounded-full ring-4 ring-bg sm:-left-[calc(2.5rem+5px)] ${
                  career.period.end === null ? "bg-accent" : "bg-muted"
                }`}
              />
              <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="font-mono text-muted">
                    {formatPeriod(career.period, locale, dict.career.present)}
                  </span>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                    {item.industry}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-[8rem_1fr] sm:gap-x-6">
                  <dt className="font-medium text-muted">{labels.summary}</dt>
                  <dd>{item.summary}</dd>
                  <dt className="font-medium text-muted">{labels.role}</dt>
                  <dd>{item.role}</dd>
                  <dt className="font-medium text-muted">
                    {labels.achievements}
                  </dt>
                  <dd>{item.achievements}</dd>
                  <dt className="font-medium text-muted">{labels.tech}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {career.tech.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

function Works({ dict }: { dict: Dictionary }) {
  return (
    <Section id="works" index={4} heading={dict.works.heading}>
      <ul className="grid gap-4 md:grid-cols-2">
        {works.map((work) => {
          const text = dict.works.items[work.id];
          return (
            <li key={work.id}>
              <Reveal className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold">{text.title}</h3>
                <p className="mt-3 text-sm text-muted">{text.body}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {work.demoUrl && (
                    <WorkLink href={work.demoUrl}>
                      {dict.works.labels.demo}
                    </WorkLink>
                  )}
                  <WorkLink href={work.repositoryUrl}>
                    {dict.works.labels.source}
                  </WorkLink>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function WorkLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function Footer({ dict, year }: { dict: Dictionary; year: number }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6">
        <p>© {year} Takafumi Masuno</p>
        <a
          href={site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-fg"
        >
          {dict.footer.github}
        </a>
      </div>
    </footer>
  );
}

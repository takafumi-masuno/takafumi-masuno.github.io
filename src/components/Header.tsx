import { localePaths } from "@/content";
import { type Dictionary, type Locale, sectionIds } from "@/content/types";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const otherLocale: Locale = locale === "ja" ? "en" : "ja";
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/75 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only rounded-md bg-accent px-3 py-2 text-on-accent focus:not-sr-only focus:absolute focus:top-3 focus:left-4"
      >
        {dict.nav.skipToContent}
      </a>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href={localePaths[locale]}
          className="font-semibold tracking-tight transition-colors hover:text-accent"
        >
          Takafumi Masuno
        </a>
        <nav className="flex items-center gap-1 text-sm sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-md px-3 py-2 text-muted transition-colors hover:text-fg"
                >
                  {dict.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={localePaths[otherLocale]}
            hrefLang={otherLocale}
            lang={otherLocale}
            className="rounded-full border border-border px-3 py-1.5 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {dict.nav.switchLanguage}
          </a>
        </nav>
      </div>
    </header>
  );
}

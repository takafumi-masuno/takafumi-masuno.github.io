import type { ReactNode } from "react";
import type { SectionId } from "@/content/types";
import { Reveal } from "./Reveal";

export function Section({
  id,
  index,
  heading,
  children,
}: {
  id: SectionId;
  index: number;
  heading: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <Reveal>
        <p className="font-mono text-sm text-accent">
          {String(index).padStart(2, "0")}
        </p>
        <h2
          id={headingId}
          className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {heading}
        </h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-card px-3 py-1 text-xs leading-5 text-muted">
      {children}
    </li>
  );
}

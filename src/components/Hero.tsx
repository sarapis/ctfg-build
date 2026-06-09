// Hero.tsx + SectionHeading.tsx — shared title blocks.
// Hero is the gradient + topo + grain banner used on Home / Category / Curated.
import * as React from "react";
import { cn } from "../lib/cn";

export function Hero({
  overline, breadcrumb, title, children, className,
}: {
  overline?: string;
  breadcrumb?: React.ReactNode;     // e.g. <><Link>The Tech</Link> / Govtech</>
  title: string;
  children?: React.ReactNode;       // lede / intro / extra (curator line, quotes…)
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden topo px-10 pt-[90px] pb-[70px]",
        "bg-bg-alt",
        "[background-image:radial-gradient(60%_120%_at_10%_0%,rgba(135,125,255,.42),transparent_55%),radial-gradient(70%_130%_at_92%_6%,rgba(103,245,194,.5),transparent_55%)]",
        // fade the texture into the page at the bottom
        "after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(transparent_45%,var(--color-bg))] after:pointer-events-none",
        className
      )}
    >
      <div className="relative z-[1] max-w-[780px] mx-auto text-center flex flex-col items-center gap-3.5">
        {breadcrumb && <div className="text-[13px] tracking-[0.04em] text-ink-soft">{breadcrumb}</div>}
        {overline && <span className="overline">{overline}</span>}
        <h1 className="h-page">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center max-w-[680px] mx-auto mb-12 flex flex-col gap-2.5">
      <h2 className="h-section">{title}</h2>
      {sub && <p className="text-lg text-ink-soft leading-normal">{sub}</p>}
    </div>
  );
}

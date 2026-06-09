// Button.tsx — pill button. Variants: primary | outlined | text. Sizes: sm | md | lg.
// Renders as <button> or, when `href` is set, as a Next <Link> (polymorphic-ish).
import * as React from "react";
import Link from "next/link";
import { cn } from "../lib/cn";

const base =
  "inline-flex items-center justify-center gap-2.5 font-ui font-bold uppercase tracking-[0.05em] " +
  "rounded-pill whitespace-nowrap transition-[transform,background-color] duration-100 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants = {
  primary: "bg-primary text-bg hover:bg-primary-deep",
  outlined: "border border-ink text-ink hover:bg-ink hover:text-bg",
  // primary-colored outline used by "Browse Govtech"
  outlinedPrimary: "border border-primary text-primary hover:bg-primary hover:text-bg",
  text: "text-primary hover:underline px-0",
} as const;

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-[22px] text-base",
  lg: "h-[52px] px-7 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: React.ReactNode };

export function Button(
  props: CommonProps & ({ href: string } & React.ComponentProps<typeof Link> | React.ButtonHTMLAttributes<HTMLButtonElement>)
) {
  const { variant = "primary", size = "md", className, children, ...rest } = props as any;
  const classes = cn(base, variants[variant as Variant], variant !== "text" && sizes[size as Size], className);

  if ("href" in rest && rest.href != null) {
    return <Link className={classes} {...rest}>{children}</Link>;
  }
  return <button className={classes} {...rest}>{children}</button>;
}

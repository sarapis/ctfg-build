"use client";
// Topbar.tsx — matches the live civictech.guide header exactly:
// logo · DIRECTORY · CONTRIBUTE · SUBSCRIBE · language pill · purple Donate.
// Flat (no shadow); render a dashed <hr className="divider" /> beneath it in the layout.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Donate } from "./icons";
import { LanguageButton } from "./GoogleTranslate";

const NAV = [
  { label: "Directory", href: "https://app.civictech.guide/" },
  { label: "Contribute", href: "https://civictech.guide/contribute/" },
  { label: "Subscribe", href: "https://guide.us19.list-manage.com/subscribe?u=cdb853c4847acff0d0a09460d&id=ca5a70438b", external: true },
  { label: "Build", href: "/", internal: true },
];
const DONATE_HREF = "https://www.every.org/civic-tech-field-guide?designation=Civic+Tech+Field+Guide#/donate";

export function Topbar() {
  const pathname = usePathname() ?? "";
  return (
    <header className="relative z-20 flex items-center justify-between gap-8 min-h-[132px] px-10 py-6 bg-bg max-md:flex-wrap max-md:min-h-0 max-md:py-[18px]">
      <Link href="https://civictech.guide" className="w-[224px] shrink-0" aria-label="Civic Tech Field Guide">
        {/* horizontal brandmark (icon + two-line wordmark) → /public/assets */}
        <img src="/assets/brandmark.svg" alt="Civic Tech Field Guide" className="w-full h-auto" />
      </Link>

      <div className="flex items-center gap-[26px] max-md:order-3 max-md:w-full max-md:flex-wrap">
        <nav className="flex items-center gap-[38px] max-lg:gap-[26px]">
          {NAV.map((n) => {
            const active = n.internal && (n.href === "/" ? pathname === "/" : pathname.startsWith(n.href));
            const cls = `font-ui font-bold text-base uppercase tracking-[0.06em] hover:text-primary max-lg:text-sm max-lg:tracking-[0.04em] ${
              active ? "text-primary" : "text-ink"
            }`;
            return n.internal
              ? <Link key={n.label} href={n.href} className={cls}>{n.label}</Link>
              : <a key={n.label} href={n.href} className={cls}>{n.label}</a>;
          })}
        </nav>

        <LanguageButton variant="header" />

        <a href={DONATE_HREF} className="inline-flex items-center gap-[9px] h-[46px] px-[22px] rounded-pill bg-primary text-white text-[17px] font-medium transition-colors hover:bg-primary-deep">
          <Donate className="w-[18px] h-[18px]" /> Donate
        </a>
      </div>
    </header>
  );
}

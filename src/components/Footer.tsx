"use client";
// Footer.tsx — matches the live civictech.guide footer:
// "Stay up to date" + subscribe pill + 10-icon social grid, four link columns,
// then a band of License / Supported by / A project of / Latest update / Language.
// Green topographic-gradient background.
import Link from "next/link";
import { Arrow, social } from "./icons";
import { LanguageButton } from "./GoogleTranslate";

type L = { label: string; href: string };
const li = (label: string, href: string): L => ({ label, href });

const SOCIALS: { kind: keyof typeof social; label: string; href: string }[] = [
  { kind: "github", label: "GitHub", href: "https://github.com/sprblm/CTFG" },
  { kind: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/civic-tech-field-guide/" },
  { kind: "instagram", label: "Instagram", href: "https://instagram.com/civictechguide" },
  { kind: "mastodon", label: "Mastodon", href: "https://mastodon.social/@civictech" },
  { kind: "threads", label: "Threads", href: "https://www.threads.net/@civictechguide" },
  { kind: "whatsapp", label: "WhatsApp", href: "https://chat.whatsapp.com/IDIt34OjKsL39ZJ5N8Qetu" },
  { kind: "slack", label: "Slack", href: "https://superbloom.design/work/slack/" },
  { kind: "pinterest", label: "Pinterest", href: "https://www.pinterest.com/civictechguide/" },
  { kind: "bluesky", label: "Bluesky", href: "https://bsky.app/profile/civictechguide.bsky.social" },
  { kind: "youtube", label: "YouTube", href: "https://www.youtube.com/@civictechguide" },
];

const COLUMNS: { heading: string; links: L[] }[] = [
  { heading: "About", links: [li("About us", "https://civictech.guide/about/"), li("Hire us", "https://civictech.guide/hire-us/"), li("Contact", "https://civictech.guide/contact/"), li("FAQ", "https://civictech.guide/what-can-i-do-with-the-civic-tech-field-guide/"), li("Guiding principles", "https://civictech.guide/guiding-principles/"), li("Changelog", "https://app.civictech.guide/changelog")] },
  { heading: "Directory", links: [li("The Tech", "https://app.civictech.guide/categories#the-tech"), li("The People", "https://app.civictech.guide/categories#the-people"), li("Adjacent Fields", "https://app.civictech.guide/categories#adjacent"), li("More Causes", "https://app.civictech.guide/issues")] },
  { heading: "Resources", links: [li("Jobs", "https://app.civictech.guide/jobs"), li("Calendar", "https://app.civictech.guide/calendar"), li("Civic AI", "https://civictech.guide/ai/"), li("Impact Explorer", "https://app.civictech.guide/impact"), li("Funding Explorer", "https://app.civictech.guide/funding"), li("World Map", "https://app.civictech.guide/map"), li("Research", "https://civictech.guide/research"), li("Timeline", "https://civictech.guide/timeline"), li("Decade-Plus Club", "https://app.civictech.guide/decade-club")] },
  { heading: "Get involved", links: [li("Add listing", "https://app.civictech.guide/add"), li("Claim your listing", "https://civictech.guide/how-to-claim-your-page-on-the-civic-tech-field-guide/"), li("Volunteer", "https://app.civictech.guide/volunteer"), li("Become a curator", "https://app.civictech.guide/volunteer"), li("Spread the world", "https://civictech.guide/contribute/")] },
];

const greenGradient =
  "[background-image:radial-gradient(120%_120%_at_-5%_35%,rgba(103,245,194,.85),transparent_48%),radial-gradient(90%_110%_at_6%_105%,rgba(103,245,194,.6),transparent_55%),radial-gradient(80%_90%_at_102%_88%,rgba(103,245,194,.45),transparent_50%),radial-gradient(60%_70%_at_95%_0%,rgba(103,245,194,.3),transparent_50%)]";

export function Footer() {
  return (
    <footer className={`relative overflow-hidden px-10 pt-14 pb-[60px] bg-bg-alt ${greenGradient}`}>
      <div className="relative z-[1] max-w-[1440px] mx-auto">
        {/* top row */}
        <div className="grid grid-cols-[minmax(200px,auto)_minmax(300px,1fr)_auto] items-center gap-10 pb-[30px] max-lg:grid-cols-1">
          <div className="text-[30px] font-medium tracking-[-0.01em] max-w-[14ch]">Stay up to date with the latest</div>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full max-w-[560px] h-14 pl-[18px] pr-[5px] rounded-pill bg-bg border-[1.5px] border-ink shadow-pill">
            <input placeholder="Drop your email, join our letter…" className="flex-1 bg-transparent outline-none text-[15px] text-ink placeholder:text-ink-soft" />
            <button className="inline-flex items-center gap-2 h-[46px] px-[22px] rounded-pill bg-primary text-bg font-ui font-bold text-[15px] uppercase tracking-[0.05em]">Subscribe <Arrow className="w-4 h-4" /></button>
          </form>
          <div className="grid grid-cols-[repeat(6,30px)] gap-x-6 gap-y-[18px] justify-end max-lg:justify-start">
            {SOCIALS.map((s) => {
              const Ico = social[s.kind];
              return <a key={s.kind} href={s.href} aria-label={s.label} className="grid place-items-center w-[30px] h-[30px] text-ink hover:text-primary"><Ico className="w-[26px] h-[26px]" /></a>;
            })}
          </div>
        </div>

        <hr className="divider" />

        {/* link columns */}
        <div className="grid grid-cols-[260px_repeat(4,1fr)] gap-6 py-10 max-lg:grid-cols-2">
          <div className="max-lg:col-span-2"><img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/logo-vertical.webp`} alt="Civic Tech Field Guide" className="w-[150px] h-auto" /></div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-display font-bold text-[18px] uppercase tracking-[0.04em] mb-[18px]">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => <li key={l.label}><a href={l.href} className="text-[17px] text-ink hover:text-primary">{l.label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <hr className="divider" />

        {/* bottom band */}
        <div className="grid grid-cols-[260px_repeat(4,1fr)] gap-6 pt-4 items-start max-lg:grid-cols-2 max-md:grid-cols-1">
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-[0.04em] mb-3.5">License</h4>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/cc-by-nc-sa.webp`} alt="Creative Commons BY-NC-SA" className="w-[130px] h-auto mb-3.5" />
            <p className="text-[13px] leading-[1.55] max-w-[30ch]">This guide and directory are free to use, re-use, adapt, and modify for non-commercial purposes as long as you link back with attribution. (Creative Commons BY NC SA)</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-[0.04em] mb-3.5">Supported by</h4>
            <ul className="space-y-2 text-base"><li><a href="https://sarapis.org/" className="hover:text-primary">Sarapis</a></li><li><a href="https://civictech.guide/donate/" className="hover:text-primary">People like you</a></li></ul>
            <h4 className="font-display font-bold text-base uppercase tracking-[0.04em] mt-[26px] mb-3.5">Founding Org</h4>
            <ul className="text-base"><li>Civic Hall</li></ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-[0.04em] mb-3.5">A project of</h4>
            <a href="https://superbloom.design/" className="inline-block"><img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/superbloom.webp`} alt="Superbloom" className="w-[92px] h-auto" /></a>
          </div>
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-[0.04em] mb-3.5">Latest update</h4>
            <div className="text-sm text-ink-soft leading-normal max-w-[30ch] max-h-[132px] overflow-hidden [mask-image:linear-gradient(#000_60%,transparent)] [-webkit-mask-image:linear-gradient(#000_60%,transparent)]">
              We’ve got something fun for you today, too. Come play our birthday game! Enter the year you were born and see which democracy tech project you’re the same age as.
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-[0.04em] mb-3.5">Language</h4>
            <LanguageButton variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// icons.tsx — centralised icon set for the CTFG directory.
// These mirror the visual style of `lucide-react`; if you adopt lucide, you can
// delete most of these and re-export the matching lucide icons from this file
// so component imports never change.
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

// Base wrapper: 1em square, inherits color, sensible stroke defaults.
function Icon({ children, title, ...p }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden={title ? undefined : true} {...p}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Search = (p: IconProps) => <Icon {...p}><circle cx="11" cy="11" r="7" {...stroke} strokeWidth={2.2} /><path d="M21 21l-4.3-4.3" {...stroke} strokeWidth={2.2} /></Icon>;
export const LinkI = (p: IconProps) => <Icon {...p}><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" {...stroke} /></Icon>;
export const Pin = (p: IconProps) => <Icon {...p}><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" {...stroke} /><circle cx="12" cy="10" r="2.5" {...stroke} /></Icon>;
export const Calendar = (p: IconProps) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2" {...stroke} /><path d="M3 9h18M8 3v4M16 3v4" {...stroke} /></Icon>;
export const Hub = (p: IconProps) => <Icon {...p}><path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" {...stroke} /></Icon>;
export const Tag = (p: IconProps) => <Icon {...p}><path d="M3 11.5V4a1 1 0 0 1 1-1h7.5L21 12.5 12.5 21 3 11.5z" {...stroke} /></Icon>;
export const Code = (p: IconProps) => <Icon {...p}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" {...stroke} /></Icon>;
export const Active = (p: IconProps) => <Icon {...p}><circle cx="13.5" cy="3.5" r="2" fill="currentColor" /><path d="M9 8 6 10v4h2v-2.5l2-1L8.5 16l-4 3.3 1.3 1.5 4.4-3.8 1.8 4 1.9-.6-2-4.8 2.2-5z" fill="currentColor" /></Icon>;
export const Verified = (p: IconProps) => <Icon {...p}><path d="M12 1.5l2.4 1.8 3 .1 1 2.8 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-1 2.8-3 .1L12 22.5l-2.4-1.8-3-.1-1-2.8L3.2 16l.9-2.9-.9-2.9 2.4-1.8 1-2.8 3-.1z" fill="currentColor" /></Icon>;
export const ExtLink = (p: IconProps) => <Icon {...p}><path d="M7 17 17 7M9 7h8v8" {...stroke} strokeWidth={2.2} /></Icon>;
export const Arrow = (p: IconProps) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" {...stroke} strokeWidth={2.2} /></Icon>;
export const ArrowLeft = (p: IconProps) => <Icon {...p}><path d="M19 12H5M11 6l-6 6 6 6" {...stroke} strokeWidth={2.2} /></Icon>;
export const Chevron = (p: IconProps) => <Icon {...p}><path d="M6 9l6 6 6-6" {...stroke} strokeWidth={2.2} /></Icon>;
export const List = (p: IconProps) => <Icon {...p}><path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" {...stroke} /></Icon>;
export const Grid = (p: IconProps) => <Icon {...p}><g fill="currentColor"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" /></g></Icon>;
export const Dots = (p: IconProps) => <Icon {...p}><g fill="currentColor"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></g></Icon>;
export const Info = (p: IconProps) => <Icon {...p}><circle cx="12" cy="12" r="9" {...stroke} /><path d="M12 11v5M12 8h.01" {...stroke} /></Icon>;
export const Warn = (p: IconProps) => <Icon {...p}><path d="M12 3 2 20h20L12 3zM12 9v5M12 17h.01" {...stroke} /></Icon>;
export const Close = (p: IconProps) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18" {...stroke} strokeWidth={2.4} /></Icon>;

// Socials
export const LinkedIn = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.4 8h4.2v12H.4V8zm7.5 0h4v1.6h.06c.56-1 1.92-2.1 3.94-2.1 4.2 0 5 2.8 5 6.4V20h-4.2v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H7.9V8z" /></Icon>;
export const Twitter = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M23 4.9c-.8.4-1.7.6-2.6.8a4.5 4.5 0 0 0 2-2.5c-.9.5-1.9.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2.5 3.7a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.6v.05a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .08 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.6a12.7 12.7 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6A9 9 0 0 0 23 4.9z" /></Icon>;
export const Instagram = (p: IconProps) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="5" {...stroke} /><circle cx="12" cy="12" r="4" {...stroke} /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></Icon>;
export const GitHub = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M12 1.5A10.5 10.5 0 0 0 8.7 22c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.3-3.5-1.3-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.7 5.1.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5z" /></Icon>;
export const Mastodon = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M21.3 14.9c-.3 1.6-2.8 3.4-5.7 3.7-1.5.2-3 .3-4.5.2-2.5-.1-4.5-.6-4.5-.6 0 .2 0 .5.1.7.3 1.9 2 2 3.5 2.1 1.6 0 3-.4 3-.4v1.8s-1.1.6-3.1.7c-1.1.1-2.4 0-4-.4C2.2 21.7 1.6 17.9 1.5 14c0-1.2 0-2.3.1-3.2.2-3.9.2-5 .8-6.3C3.2 3.3 5 2.4 7 2.2c1.8-.2 4.2-.2 4.9 0h.05c.7-.2 3.1-.2 4.9 0 2 .2 3.8 1.1 4.6 2.9.6 1.3.7 2.4.8 6.3 0 .9 0 2 .04 1.6 0 .4 0 1-.04 1.9zM18 9.6c0-1-.2-1.7-.7-2.3-.5-.5-1.2-.8-2-.8-1 0-1.7.4-2.2 1.1l-.6 1-.6-1c-.5-.7-1.2-1.1-2.2-1.1-.8 0-1.5.3-2 .8-.5.6-.7 1.3-.7 2.3V15h2V9.8c0-1 .4-1.5 1.3-1.5.9 0 1.4.6 1.4 1.8v2.6h2V10c0-1.2.5-1.8 1.4-1.8.9 0 1.3.5 1.3 1.5V15h2V9.6z" /></Icon>;
export const Facebook = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" /></Icon>;
export const Threads = (p: IconProps) => <Icon {...p}><g {...stroke} strokeWidth={1.8}><path d="M16.6 11.7c-.4-2.1-1.9-3.3-4-3.4-1.8 0-3 .9-3.1 2.3-.1 1.3 1 2.1 2.7 2.2 1.9.1 3.1-1 3.2-2.9.1-2-1.1-3.4-3.1-3.5" /><path d="M12 3c-4.6 0-7.6 2.7-7.6 9s3 9 7.6 9c3.3 0 5.4-1.5 6.4-3.6.8-1.7.4-3.8-1.5-4.8" /></g></Icon>;
export const WhatsApp = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 0 1 6.9 12.6l.5 2.5-2.6-.7A8.2 8.2 0 1 1 12 3.8zm-3 3.5c-.2 0-.5 0-.7.4-.2.4-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.3 3.7 2.1.8 2.6.7 3 .6.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4 0-.1-.2-.2-.5-.3-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1l-.8 1c-.1.2-.3.2-.5.1-.3-.2-1.2-.5-2.3-1.5-.9-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.5-.4-.4-.6-.4z" /></Icon>;
export const Slack = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M6 14a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 0 1 4 0v5a2 2 0 1 1-4 0v-5zM10 6a2 2 0 1 1 2-2v2h-2zm0 1a2 2 0 0 1 0 4H5a2 2 0 1 1 0-4h5zM18 10a2 2 0 1 1 2 2h-2v-2zm-1 0a2 2 0 0 1-4 0V5a2 2 0 1 1 4 0v5zM14 18a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 0 1 0-4h5a2 2 0 1 1 0 4h-5z" /></Icon>;
export const Pinterest = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.2-.8 3.4-.2.9.5 1.7 1.5 1.7 1.8 0 3-2.3 3-5 0-2.1-1.4-3.6-3.9-3.6-2.9 0-4.6 2.1-4.6 4.4 0 .8.2 1.4.6 1.9.2.2.2.3.1.5l-.2.8c-.1.3-.3.4-.5.2-1-.4-1.5-1.6-1.5-3 0-2.4 2-5.3 6-5.3 3.2 0 5.3 2.3 5.3 4.8 0 3.3-1.8 5.7-4.5 5.7-.9 0-1.8-.5-2.1-1l-.6 2.3c-.2.7-.6 1.5-1 2A10 10 0 1 0 12 2z" /></Icon>;
export const Bluesky = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M5.5 3.5c2.3 1.7 4.7 5.2 6.5 7.8 1.8-2.6 4.2-6.1 6.5-7.8 1.6-1.2 4.3-2.1 4.3 1.3 0 .7-.4 5.3-.6 6-.8 2.6-3.4 3.2-5.7 2.8 3.9.7 4.9 2.9 2.8 5.1-4 4.2-5.7-1.1-6.1-2.4-.1-.2-.1-.4-.2-.5-.1.1-.1.3-.2.5-.4 1.3-2.1 6.6-6.1 2.4-2.1-2.2-1.1-4.4 2.8-5.1-2.3.4-4.9-.2-5.7-2.8-.2-.7-.6-5.3-.6-6 0-3.4 2.7-2.5 4.3-1.3z" /></Icon>;
export const YouTube = (p: IconProps) => <Icon {...p}><path fill="currentColor" d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.5 31 31 0 0 0-.5-4.5zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" /></Icon>;

// Donate (recurring-gift refresh arrows) — used on the topbar Donate button
export const Donate = (p: IconProps) => <Icon {...p}><g {...stroke}><path d="M20 11a8 8 0 0 0-14-4M4 6v3h3" /><path d="M4 13a8 8 0 0 0 14 4M20 18v-3h-3" /></g></Icon>;

// Developer-section icons
export const Sparkles = (p: IconProps) => <Icon {...p}><path {...stroke} d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15l-1.8-4.2L5.5 9l4.7-1.3L12 3zM19 14l.9 2.3L22 17l-2.1.7L19 20l-.9-2.3L16 17l2.1-.7L19 14z" /></Icon>;
export const Database = (p: IconProps) => <Icon {...p}><g {...stroke}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></g></Icon>;
export const Plug = (p: IconProps) => <Icon {...p}><path {...stroke} d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v5" /></Icon>;
export const Shield = (p: IconProps) => <Icon {...p}><path {...stroke} d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></Icon>;
export const Terminal = (p: IconProps) => <Icon {...p}><g {...stroke}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9l3 3-3 3M13 15h4" /></g></Icon>;

// Brand marks (not 1em — sized by the consumer)
export const CcBadge = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 44" role="img" aria-label="Creative Commons BY" {...p}>
    <rect width="64" height="44" rx="8" fill="#2C2C2C" />
    <g stroke="#fff" strokeWidth="1.5" fill="none">
      <circle cx="16" cy="14" r="9" /><circle cx="44" cy="14" r="9" />
    </g>
    <text x="16" y="17.5" fontFamily="Arial,Helvetica,sans-serif" fontSize="8.5" fill="#fff" textAnchor="middle" fontWeight="700">cc</text>
    <g fill="#fff"><circle cx="44" cy="11" r="2.1" /><path d="M40.6 19c0-1.9 1.5-3.2 3.4-3.2s3.4 1.3 3.4 3.2z" /></g>
    <text x="32" y="37" fontFamily="Arial" fontSize="8.5" fill="#fff" textAnchor="middle" letterSpacing="2.5">BY</text>
  </svg>
);
export const Superbloom = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" {...p}>
    <path d="M32 32L58 32M32 32L51 43M32 32L44 53M32 32L32 58M32 32L20 53M32 32L13 43M32 32L6 32M32 32L13 21M32 32L20 11M32 32L32 6M32 32L44 11M32 32L51 21M32 32L48 48M32 32L16 48M32 32L16 16M32 32L48 16" />
  </svg>
);

export const social = {
  github: GitHub, linkedin: LinkedIn, instagram: Instagram, mastodon: Mastodon,
  threads: Threads, whatsapp: WhatsApp, slack: Slack, pinterest: Pinterest,
  bluesky: Bluesky, youtube: YouTube, twitter: Twitter, facebook: Facebook,
};

// GoogleTranslate.tsx — wraps the Google Translate widget.
// Renders a hidden #google_translate_element, initializes the widget once,
// and exports a trigger button that opens the native dropdown.
"use client";
import * as React from "react";
import Script from "next/script";
import { Chevron } from "./icons";

// Extend window for the Google Translate callback
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const POPULAR_LANGS: Record<string, { flag: string; name: string }> = {
  en: { flag: "\u{1F1FA}\u{1F1F8}", name: "English" },
  es: { flag: "\u{1F1EA}\u{1F1F8}", name: "Español" },
  fr: { flag: "\u{1F1EB}\u{1F1F7}", name: "Français" },
  de: { flag: "\u{1F1E9}\u{1F1EA}", name: "Deutsch" },
  pt: { flag: "\u{1F1E7}\u{1F1F7}", name: "Português" },
  ar: { flag: "\u{1F1F8}\u{1F1E6}", name: "العربية" },
  zh: { flag: "\u{1F1E8}\u{1F1F3}", name: "中文" },
  hi: { flag: "\u{1F1EE}\u{1F1F3}", name: "हिन्दी" },
  ja: { flag: "\u{1F1EF}\u{1F1F5}", name: "日本語" },
  ko: { flag: "\u{1F1F0}\u{1F1F7}", name: "한국어" },
  ru: { flag: "\u{1F1F7}\u{1F1FA}", name: "Русский" },
  uk: { flag: "\u{1F1FA}\u{1F1E6}", name: "Українська" },
  sw: { flag: "\u{1F1F0}\u{1F1EA}", name: "Kiswahili" },
  tr: { flag: "\u{1F1F9}\u{1F1F7}", name: "Türkçe" },
  id: { flag: "\u{1F1EE}\u{1F1E9}", name: "Indonesia" },
  th: { flag: "\u{1F1F9}\u{1F1ED}", name: "ไทย" },
};

/** Hidden container + script loader. Render once in the layout. */
export function GoogleTranslateProvider() {
  return (
    <>
      {/* Hidden widget container — Google Translate needs a DOM target */}
      <div id="google_translate_element" className="hidden" />
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                autoDisplay: false,
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `,
        }}
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      {/* Hide the Google Translate top bar that pushes page down */}
      <style>{`
        .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
        body { top: 0 !important; }
        .skiptranslate { display: none !important; }
        .goog-text-highlight { background: none !important; box-shadow: none !important; }
      `}</style>
    </>
  );
}

/** Trigger button — styled to match our design. Shows current language. */
export function LanguageButton({ variant = "header" }: { variant?: "header" | "footer" }) {
  const [open, setOpen] = React.useState(false);
  const [currentLang, setCurrentLang] = React.useState("en");
  const ref = React.useRef<HTMLDivElement>(null);

  // Detect current language from the Google Translate cookie
  React.useEffect(() => {
    function detectLang() {
      const match = document.cookie.match(/googtrans=\/en\/([a-z-]+)/i);
      if (match) {
        setCurrentLang(match[1].split("-")[0]);
      } else {
        setCurrentLang("en");
      }
    }
    detectLang();
    const interval = setInterval(detectLang, 2000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown on outside click
  React.useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  function selectLanguage(langCode: string) {
    // Set the Google Translate cookie and reload
    const domain = window.location.hostname;
    if (langCode === "en") {
      // Reset to original
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain}`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      window.location.reload();
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${domain}`;
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      window.location.reload();
    }
    setOpen(false);
  }

  const current = POPULAR_LANGS[currentLang] || POPULAR_LANGS.en;
  const label = currentLang.toUpperCase().slice(0, 2);

  if (variant === "footer") {
    return (
      <div className="relative" ref={ref}>
        <button onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2.5 h-12 px-[18px] rounded-pill border border-ink text-[15px] cursor-pointer">
          <span className="text-[17px]">{current.flag}</span> {label} <Chevron className={`w-3.5 h-3.5 ml-1 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && <LangDropdown onSelect={selectLanguage} currentLang={currentLang} position="top" />}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-[9px] h-[46px] px-4 rounded-pill border border-border bg-surface text-[15px] font-medium text-ink cursor-pointer">
        <span className="text-[17px] leading-none">{current.flag}</span> {label} <Chevron className={`w-3.5 h-3.5 text-ink-soft transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <LangDropdown onSelect={selectLanguage} currentLang={currentLang} position="bottom" />}
    </div>
  );
}

function LangDropdown({ onSelect, currentLang, position }: { onSelect: (code: string) => void; currentLang: string; position: "top" | "bottom" }) {
  return (
    <div className={`absolute ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"} right-0 w-52 max-h-[320px] overflow-y-auto bg-surface border border-border rounded-lg shadow-lg z-[200] py-1`}>
      {Object.entries(POPULAR_LANGS).map(([code, { flag, name }]) => (
        <button key={code} onClick={() => onSelect(code)}
          className={`w-full text-left px-3.5 py-2.5 text-sm flex items-center gap-2.5 hover:bg-primary-tint hover:text-primary transition-colors ${currentLang === code ? "bg-primary-tint text-primary font-medium" : ""}`}>
          <span className="text-base">{flag}</span> {name}
        </button>
      ))}
    </div>
  );
}

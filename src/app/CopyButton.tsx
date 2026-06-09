// app/CopyButton.tsx — client island for the code-block copy action.
"use client";
import * as React from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      type="button"
      onClick={() => { navigator.clipboard?.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
      className="ml-auto inline-flex items-center gap-1.5 text-xs text-[#9A9AA6] px-[9px] py-1 rounded-md border border-[#2A2A33] hover:text-white hover:border-[#4A4A57]"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

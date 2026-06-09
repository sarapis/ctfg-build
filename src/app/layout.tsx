// app/layout.tsx — root layout: fonts + chrome. Topbar/Footer wrap every directory page.
import type { Metadata } from "next";
import { Space_Grotesk, Archivo, Inter } from "next/font/google";
import { Topbar } from "../components/Topbar";
import { Footer } from "../components/Footer";
import { GoogleTranslateProvider } from "../components/GoogleTranslate";
import "./globals.css";

// Assign each font to the CSS variable the @theme block expects.
// In globals.css, set:  --font-display: var(--font-space-grotesk);  (etc.)
const display = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space-grotesk" });
const ui = Archivo({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-archivo" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Civic Tech Field Guide",
  description: "The world’s largest collection of projects using tech for the common good.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable} ${body.variable}`}>
      <body className="bg-bg text-ink font-display antialiased">
        <GoogleTranslateProvider />
        <Topbar />
        <hr className="divider" />
        {children}
        <Footer />
      </body>
    </html>
  );
}

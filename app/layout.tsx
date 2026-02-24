import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DAPT — Data Analytic Prediction Terminal",
  description:
    "DAPT is a data-driven prediction terminal for football matches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0b0f14]">
      <head>
        <meta name="theme-color" content="#0b0f14" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/dapt-icon.svg" />
        <link rel="apple-touch-icon" href="/dapt-icon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0b0f14] text-zinc-100`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-zinc-800 bg-black/40 backdrop-blur">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
              <Link href="/" className="flex items-baseline gap-2">
                <span className="rounded border border-emerald-400 px-2 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-400">
                  DAPT
                </span>
                <span className="hidden text-sm text-zinc-400 sm:inline">
                  Data Analytic Prediction Terminal
                </span>
              </Link>
              <nav className="flex items-center gap-4 text-sm font-mono">
                <Link
                  href="/matches"
                  className="text-zinc-300 transition hover:text-emerald-400"
                >
                  Matches
                </Link>
                <Link
                  href="/about"
                  className="text-zinc-300 transition hover:text-emerald-400"
                >
                  About
                </Link>
                <Link
                  href="/admin"
                  className="rounded border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400"
                >
                  Admin
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-4 py-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

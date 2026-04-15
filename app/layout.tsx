import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALLEYOOP",
  description: "ALLEYOOP collective",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">

            {/* LOGO / HOME */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="logo" className="h-8 w-auto" />
              <span className="text-sm text-white/70 hover:text-white">
                Home
              </span>
            </Link>

            {/* NAV LINKS */}
            <nav className="flex gap-6 text-sm">
              <Link href="/music" className="text-white/70 hover:text-white">
                Music
              </Link>
              <Link href="/tour" className="text-white/70 hover:text-white">
                Tour
              </Link>
              <Link href="/merch" className="text-white/70 hover:text-white">
                Merch
              </Link>
              <Link href="/collective" className="text-white/70 hover:text-white">
                Collective
              </Link>
            </nav>

          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}
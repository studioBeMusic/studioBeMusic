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
  title: {
    default: "Studio Be Music",
    template: "%s | Studio Be Music",
  },
  description:
    "Studio and publishing space for music created with intention, presence, and continuity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="site-shell">
          <header className="site-header">
            <div className="header-inner">
              <Link href="/" className="brand">
                Studio Be Music
              </Link>
              <nav aria-label="Main">
                <ul className="nav-list">
                  <li>
                    <Link href="/artists">Artists</Link>
                  </li>
                  <li>
                    <Link href="/music">Music</Link>
                  </li>
                  <li>
                    <Link href="/journey">Journey</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}

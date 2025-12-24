import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLink from "../components/NavLink";

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
                    <NavLink href="/artists">Artists</NavLink>
                  </li>
                  <li>
                    <NavLink href="/music">Music</NavLink>
                  </li>
                  <li>
                    <NavLink href="/journey">Journey</NavLink>
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

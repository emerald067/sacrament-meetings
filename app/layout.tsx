import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavLinks from "@/components/NavLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Plan, review, and print sacrament meeting programs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Suspense
          fallback={
            <header className="bg-blue-900 px-6 py-5 text-white">
              <div className="mx-auto max-w-6xl">
                <h1 className="text-2xl font-bold">
                  Sacrament Meeting Planner
                </h1>
                <p className="text-sm">Loading date...</p>
              </div>
            </header>
          }
        >
          <Header />
        </Suspense>

        <Suspense
          fallback={
            <nav className="bg-blue-800 px-6 py-3">
              <ul className="mx-auto flex max-w-6xl flex-wrap gap-6">
                <li>
                  <Link href="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/meetings" className="text-white">
                    All Meetings
                  </Link>
                </li>
                <li>
                  <Link href="/meetings/current" className="text-white">
                    Current Meeting
                  </Link>
                </li>
              </ul>
            </nav>
          }
        >
          <NavLinks />
        </Suspense>

        <main className="flex-1">
          {children}
        </main>

        <Suspense
          fallback={
            <footer className="mt-auto bg-blue-950 px-6 py-6 text-white">
              <div className="mx-auto max-w-6xl text-center">
                <p className="text-sm">Sacrament Meeting Planner</p>
                <p className="mt-2 text-xs text-gray-300">
                  Loading...
                </p>
              </div>
            </footer>
          }
        >
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
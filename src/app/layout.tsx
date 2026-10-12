import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Noticed — Work of Art. A Curated Digital Notebook",
  description:
    "A curated exploration of art, memory, and the stories that continue to shape how we see the world. Available on iOS and Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${cormorant.variable} antialiased bg-[#070b0d] text-stone-100 selection:bg-amber-900/40 selection:text-amber-100`}
      >
        {children}
      </body>
    </html>
  );
}

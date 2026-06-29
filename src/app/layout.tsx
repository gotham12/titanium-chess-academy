import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Titanium Chess Academy",
    template: "%s | Titanium Chess Academy",
  },
  description:
    "Premium chess instruction for grades K–12 in Shrewsbury, MA. Year-round lessons and Summer Camp 2026 with personalized, small-scale coaching.",
  keywords: [
    "chess academy",
    "chess lessons",
    "summer chess camp",
    "Shrewsbury MA",
    "Worcester County chess",
  ],
  openGraph: {
    title: "Titanium Chess Academy",
    description: "Where Strategy Leads To Success",
    url: "https://www.titaniumchessacademy.com",
    siteName: "Titanium Chess Academy",
    type: "website",
  },
  icons: {
    icon: "https://www.titaniumchessacademy.com/tab_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full bg-background font-body text-foreground antialiased">
        <div className="noise-overlay" />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

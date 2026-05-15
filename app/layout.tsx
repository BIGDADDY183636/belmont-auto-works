import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Belmont Auto Works — Honest work. Three generations on the North Side.",
  description:
    "Family-owned auto repair shop in Lincoln Square, Chicago. ASE-certified technicians. No upselling. 12-month/12K-mile warranty on all work.",
  openGraph: {
    title: "Belmont Auto Works",
    description: "Honest work. Three generations on the North Side.",
    url: "https://auto.jbar.studio",
    siteName: "Belmont Auto Works",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

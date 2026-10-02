import type { Metadata } from "next";
import { Unbounded, DM_Sans, Arimo, EB_Garamond } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MONARK — Brand Consultancy",
  description:
    "We define what a business stands for and brings it to life. Brand strategy, identity, creative & digital.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${dmSans.variable} ${arimo.variable} ${ebGaramond.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050505] text-[#FAFAFA] antialiased selection:bg-[#FFD004] selection:text-black">
        {children}
      </body>
    </html>
  );
}

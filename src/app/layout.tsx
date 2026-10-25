import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/components/seo/schemas";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stitchhospitality.com"),
  title: {
    template: "%s | Stitch Hospitality",
    default: "Stitch Hospitality — Interim & Fractional Hotel Leadership",
  },
  description:
    "Interim and fractional hotel leadership across general management, operations, sales, marketing, commercial strategy, and catering.",
  authors: [{ name: "Stitch Hospitality", url: "https://www.stitchhospitality.com" }],
  creator: "Stitch Hospitality",
  publisher: "Stitch Hospitality",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Personal Branding Builder – Bantu Kamu Bangun Personal Branding Instan!!",
  description:
    "Personal Branding Builder adalah toolkit digital untuk membantu kamu membangun personal brand dengan profesional, simpel, dan engaging. Cocok untuk pelajar, mahasiswa, kreator, freelancer, maupun bisnis owner.",
  keywords: [
    "personal branding",
    "template branding",
    "bangun personal brand",
    "brand toolkit",
    "branding untuk pemula",
    "desain personal brand",
    "digital product",
    "branding minimalis",
    "branding kreator",
  ],
  openGraph: {
    title:
      "Personal Branding Builder – Bantu Kamu Bangun Personal Branding Instan!!",
    description:
      "Toolkit digital all-in-one untuk membangun Personal Branding. Cocok untuk pelajar, mahasiswa, kreator, freelancer, maupun bisnis owner.",
    url: "https://personalbrandingbuilder.tools",
    siteName: "Personal Branding Builder",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Branding Builder – Toolkit Branding All in One",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Branding Builder",
    description: "Toolkit simpel & profesional untuk bangun personal brand.",
    images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={plusJakarta.className}>{children}</body>
    </html>
  );
}

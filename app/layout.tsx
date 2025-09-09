import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        url: "https://res.cloudinary.com/dpytrn22z/image/upload/v1757232018/Meta_Image_imcz0t.webp",
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
    description:
      "Toolkit simpel & profesional untuk bangun personal branding lebih efisien.",
    images: [
      "https://res.cloudinary.com/dpytrn22z/image/upload/v1757232018/Meta_Image_imcz0t.webp",
    ],
    creator: "@kadafidevayana",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`min-h-screen bg-[#000203] relative overflow-x-hidden [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/30 hover:[&::-webkit-scrollbar-thumb]:bg-white/50 [&::-webkit-scrollbar-thumb]:rounded-full ${poppins.className}`}>
        <div className="absolute inset-0 -top-10 h-screen w-full bg-[radial-gradient(circle_at_50%_40%,#00498b,#000203,#000203)]" />
        <div className="relative z-10 max-w-screen-sm md:max-w-none overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

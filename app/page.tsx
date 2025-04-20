import Image from "next/image";
import heroImage from "../public/hero.webp"; // Upload image ke folder public dan kompres dulu pakai Squoosh

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-gray-800">
      <section className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Bangun Website Cepat & Ringan
        </h1>
        <p className="text-lg mb-6">
          Dibuat dengan Next.js, SEO friendly, mobile optimized, dan kecepatan
          maksimal.
        </p>
        <Image
          src={heroImage}
          alt="Ilustrasi landing page"
          placeholder="blur"
          className="rounded-2xl shadow-lg"
          width={800}
          height={450}
        />
      </section>
    </main>
  );
}

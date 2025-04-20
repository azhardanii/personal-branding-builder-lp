import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Background dibagi 3 layer menggunakan absolute */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {/* Atas: hitam ke biru */}
        <div className="h-[30%] bg-gradient-to-b from-[#000000] to-[#0051bd]" />
        {/* Tengah: biru solid */}
        <div className="h-[40%] bg-[#0051bd]" />
        {/* Bawah: biru ke putih */}
        <div className="h-[30%] bg-gradient-to-b from-[#0051bd] to-white" />
      </div>

      <section className="w-full flex justify-center px-4 py-10">
        <div className="w-full max-w-sm text-center text-white">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/kadev-logo.png"
              alt="Kadev Academy"
              width={120}
              height={30}
              className="mx-auto"
            />
          </div>

          {/* Judul */}
          <h1 className="text-2xl font-bold leading-snug">
            Tools Personal Branding <br /> Pertama di Indonesia 🇮🇩
          </h1>

          {/* Gambar Produk */}
          <div className="my-6">
            <Image
              src="/product-img.png"
              alt="Personal Brand Builder"
              width={200}
              height={200}
              className="mx-auto drop-shadow-xl"
              priority
            />
          </div>

          {/* CTA */}
          <p className="text-base font-medium text-white">
            Bantu Kamu <br />
            <span className="font-bold italic uppercase">
              Bangun Personal Branding Instan!
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

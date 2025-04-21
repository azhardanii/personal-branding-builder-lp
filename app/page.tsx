import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full flex justify-center px-4 py-10 bg-deep-gradient min-h-screen md:min-h-fit">
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
              Bangun Personal Branding Secara Instan!
            </span>
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center px-4 py-10 bg-white text-center">
        <div className="w-full max-w-sm">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Apa Itu <br /> Personal Branding Builder?
          </h2>

          {/* Subheading */}
          <p className="text-base font-medium text-gray-700 mb-6">
            Tools yang bantu kamu personal branding gak pake ribet, instan, 5
            menit langsung siap.
          </p>

          {/* Gambar Produk / Service */}
          <div>
            <Image
              src="/service.png"
              alt="Preview Personal Branding Builder"
              width={600}
              height={200}
              className="mx-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-10 text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Welcome to Personal Branding Builder
        </h2>

        {/* Video */}
        <div className="aspect-video w-full max-w-md mx-auto mb-6">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/NBh1t1gGID0"
            title="Welcome to Personal Branding Builder"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Warning Text */}
        <div className="text-[#e5212b] space-y-1 mb-8">
          <p className="text-sm font-semibold">
            ‼️ TOOLS INI GA BOLEH DIPAKE SEMBARANG ORANG ‼️
          </p>
          <p className="text-xl font-bold">CUMA BUAT 10 ORANG TERNIAT</p>
          <p className="text-lg font-medium">YANG BISA DAPETIN AKSESNYA</p>
        </div>

        {/* CTA Button */}
        <div className="glow-wrapper">
          <a
            href="https://tribelio.page/site/checkout/masterclass5"
            target="_blank"
            rel="noreferrer"
          >
            <button className="glow-button">▶▶ AKSES SEKARANG ◀◀</button>
          </a>
        </div>
      </section>
    </main>
  );
}

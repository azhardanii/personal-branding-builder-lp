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
          <p className="text-base font-medium text-white ">
            <span className="text-lg font-bold">Bantu Kamu Bangun</span>
            <br />
            <span className="text-lg font-bold italic uppercase">
              Personal Branding Instan!!
            </span>
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center px-4 py-10 bg-white text-center">
        <div className="w-full max-w-sm">
          {/* Heading */}
          <h2 className="text-xl font-bold text-[#023274] mb-2 uppercase">
            Apa Itu <br /> Personal Branding Builder?
          </h2>

          {/* Subheading */}
          <p className="text-base font-medium text-[#023274] mb-6">
            Tools yang bantu kamu personal branding gak pake ribet, instan, 5
            menit langsung siap.
          </p>

          {/* Gambar Produk / Service */}
          <div>
            <Image
              src="/pbb-preview.webp"
              alt="Preview Personal Branding Builder"
              width={600}
              height={200}
              className="mx-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="w-full py-6 text-center">
        <div className="max-w-sm mx-auto">
          <hr className="border-0 h-[2px] bg-gradient-to-r from-white/0 via-[#0051bd] via-50% to-white/0 opacity-40" />
        </div>
      </div>

      <section className="w-full px-4 pt-5 pb-10 text-center">
        <div className="w-full mx-auto max-w-sm">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold text-[#023274] mb-6">
            <span className="text-3xl uppercase">Welcome to</span> <br />{" "}
            PERSONAL BRANDING BUILDER
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
            <p className="text-[12px] font-semibold">
              ‼️ TOOLS INI GA BOLEH DIPAKE SEMBARANG ORANG ‼️
            </p>
            <p className="text-2xl font-bold">CUMA BUAT 100 ORANG</p>
            <p className="text-base font-medium">
              TERCEPAT YANG BISA DAPETIN AKSESNYA
            </p>
          </div>

          {/* CTA Button */}
          <div className="glow-wrapper mb-8">
            <a
              href="https://lynk.id/kadafidevayana/e3RyMwz/checkout"
              target="_blank"
              rel="noreferrer"
            >
              <button className="glow-button text-xl">
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  &#x25B6;&#x25B6;
                </span>{" "}
                AKSES SEKARANG{" "}
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  &#x25C0;&#x25C0;
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center px-4 py-10 mb-2 bg-reverse-gradient min-h-screen md:min-h-fit">
        <div className="max-w-sm text-center py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            All in One
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Personal Branding Builder
          </p>

          <div className="space-y-5 text-center">
            {[
              {
                title: "1. Finder Personal Identity",
                desc: "🔍 Bantu kamu nemuin niche paling cocok",
              },
              {
                title: "2. Personal Detector Intelligence",
                desc: "🧠 Mengenal diri sendiri, kekuatan, dan peluangmu!",
              },
              {
                title: "3. Smart Pillar Generator",
                desc: "📌 Bantu bikin strategi & pilar biar konten tambah rame",
              },
              {
                title: "4. Content Factory",
                desc: "🔥 Unlimited konten 9999+",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-md py-3 px-5 rounded-xl"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-5 md:py-10 text-center text-[#023274]">
        <div className="max-w-sm mx-auto">
          <h2 className="text-xl font-bold mb-0">
            Tools Personal Branding Builder
          </h2>
          <p className="text-lg font-bold mb-4">
            Cocok Buat Kamu yang Saat Ini...
          </p>

          <Image
            src="/why-list.webp"
            alt="Kenapa harus pakai Personal Branding Builder"
            width={500}
            height={200}
            className="mx-auto mb-5 md:mb-10"
          />

          <div className="text-[#023274] text-sm font-medium mb-6 leading-relaxed">
            Kalau kamu{" "}
            <span className="underline font-bold underline-offset-4">
              RELATE
            </span>{" "}
            sama salah satu poin di atas…
            <br />
            <span className="text-base">
              {" "}
              Jangan tunda lagi, waktunya kamu pakai <br />
              <span className="font-bold">PERSONAL BRANDING BUILDER</span>{" "}
              Sekarang!!
            </span>
          </div>

          <div className="glow-wrapper">
            <a
              href="https://lynk.id/kadafidevayana/e3RyMwz/checkout"
              target="_blank"
              rel="noreferrer"
            >
              <button className="glow-button text-xl">
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  &#x25B6;&#x25B6;
                </span>{" "}
                LET'S GOO 🚀{" "}
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  &#x25C0;&#x25C0;
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>

      <div className="w-full mt-3 py-3 text-center">
        <div className="max-w-sm mx-auto">
          <hr className="border-0 h-[2px] bg-gradient-to-r from-white/0 via-[#0051bd] via-50% to-white/0 opacity-40" />
        </div>
      </div>

      <section className="w-full px-4 py-5 md:py-10 text-center">
        <div className="max-w-sm mx-auto">
          <h2 className="text-xl font-bold text-[#023274] mb-6">
            Kata mereka yang sudah pakai <br />
            PERSONAL BRANDING BUILDER
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <div className="w-full md:w-1/2" style={{ aspectRatio: "9 / 16" }}>
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/gJbp9sIQX5M"
                title="Testimoni 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full md:w-1/2" style={{ aspectRatio: "9 / 16" }}>
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/zq-_nBXBXg4"
                title="Testimoni 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mb-8">
            <Image
              src="/testi-pbb.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={600}
              height={200}
              className="mx-auto drop-shadow-lg"
            />
          </div>
          <h2 className="text-lg font-bold mb-3 text-[#023274]">
            Isi Form FEEDBACK dari para pengguna <br />
            PERSONAL BRANDING BUILDER
          </h2>
          <div>
            <Image
              src="/pbb-feedback.webp"
              alt="Feedback Pengguna Personal Branding Builder"
              width={600}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center px-2 py-10 mb-2 bg-co-gradient min-h-screen md:min-h-fit">
        <div className="max-w-sm text-center py-10">
          <Image
            src="/pbb-checkout.webp"
            alt="Checkout Personal Branding Builder"
            width={600}
            height={200}
            className="mx-auto mb-10"
          />
          <div className="glow-wrapper">
            <a
              href="https://lynk.id/kadafidevayana/e3RyMwz/checkout"
              target="_blank"
              rel="noreferrer"
            >
              <button className="glow-button text-2xl">
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  &#x25B6;&#x25B6;
                </span>{" "}
                CHECKOUT 🔥{" "}
                <span style={{ fontFamily: "Arial, sans-serif" }}>
                  &#x25C0;&#x25C0;
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>

      <div className="w-full py-3 text-center">
        <div className="max-w-sm mx-auto">
          <hr className="border-0 h-[2px] bg-gradient-to-r from-white/0 via-[#0051bd] via-50% to-white/0 opacity-40" />
        </div>
      </div>

      <section className="w-full flex justify-center px-2 min-h-screen md:min-h-fit">
        <div className="max-w-sm text-center py-10">
          <Image
            src="/pbb-faq.webp"
            alt="FAQ Personal Branding Builder"
            width={600}
            height={200}
            className="mx-auto mb-10"
          />
        </div>
      </section>

      <div className="w-full text-[#023274] text-center py-6 px-4">
        <div className="text-xs mx-auto max-w-sm flex justify-center">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <Image
            src="/logo-kadev-blue.webp"
            alt="KADEV Academy"
            width={110}
            height={50}
            className="ml-1 mr-0.5 pt-0.5"
          />
          <p>All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}

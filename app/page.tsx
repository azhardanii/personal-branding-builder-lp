import Image from "next/image";
import { ReactNode } from "react";
import LazyYoutube from "@/components/LazyYoutube";

const Section = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section className={`w-full px-4 py-10 ${className}`}>{children}</section>
);

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex justify-center w-full h-screen items-center">
        <div className="max-w-xl -mt-[20%] md:mt-40 lg:mt-0">
          <Image
            src="/pbbv2-heroimg.webp"
            alt="Personal Brand Builder"
            width={450}
            height={1000}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <Section className="text-center">
        <div className="relative w-full -mt-[40%] md:mt-32 lg:-mt-10 mx-auto">
          <div className="absolute top-[10rem] -left-[14rem] md:top-[27rem] lg:top-[24rem] lg:left-[15rem] w-[350px] md:w-auto h-auto md:bottom-10 md:right-3 -z-10">
            <Image
              src="/pbbv2-circleornament.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={400}
              height={100}
              className="opacity-75"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[20rem] -right-[15rem] md:top-[49rem] lg:top-[42rem] lg:right-[14rem] w-[350px] md:w-auto h-auto -z-10">
            <Image
              src="/pbbv2-circleornament.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={400}
              height={100}
              className="opacity-75"
              loading="lazy"
            />
          </div>

          <Image
            src="/pbbv2-what.webp"
            alt="Preview Personal Branding Builder"
            width={600}
            height={200}
            className="mx-auto max-w-sm px-16 md:px-0"
            loading="lazy"
          />
          <p className="text-xs md:text-base font-medium tracking-wider text-white my-6 md:my-8">
            Tools dan AI yang bantu kamu personal branding <br />
            <span className="font-bold text-[#fff500]">gak pake ribet, instan, 5 menit langsung siap.</span>
          </p>
          <Image
            src="/pbbv2-feature.webp"
            alt="Preview Personal Branding Builder"
            width={600}
            height={200}
            className="mx-auto"
            loading="lazy"
          />
        </div>
      </Section>

      <div className="w-full py-6 text-center">
        <div className="max-w-xs md:max-w-sm mx-auto">
          <hr className="border-0 h-[3px] md:h-1 bg-gradient-to-r from-white/0 via-[#005dd6] via-50% to-white/0" />
        </div>
      </div>

      <Section>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl text-white mb-6 tracking-wider">
            TOOLS INI <span className="font-bold">GA BOLEH DIPAKAI <br /> SEMBARANG ORANG‼️‼️</span>
          </h2>
          <div className="aspect-video w-full max-w-xl mx-auto mb-10">
            <LazyYoutube
              videoId="NBh1t1gGID0"
              title="Video Clip Personal Branding Builder"
              ratio="16:9"
            />
          </div>
          <div className="ml-3 md:ml-5">
            <Image
              src="/pbbv2-quick.webp"
              alt="Preview Personal Branding Builder"
              width={600}
              height={200}
              className="mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <div className="w-full py-6 text-center">
        <div className="max-w-xl mx-auto relative">
          <hr className="border-0 h-[3px] md:h-1 bg-gradient-to-r from-white/0 via-[#005dd6] via-50% to-white/0" />
          <div className="absolute top-[2.4rem] w-full -z-10">
            <Image
              src="/pbbv2-halfornament.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={400}
              height={100}
              className="scale-150 mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-xl mx-auto -mt-5 text-center text-white">
          <Image
            src="/pbbv2-forwho.webp"
            alt="Preview Personal Branding Builder"
            width={500}
            height={1500}
            className="mx-auto ml-1.5 md:ml-10"
            loading="lazy"
          />
        </div>
      </Section>

      <div className="w-full py-6 mt-8 text-center">
        <div className="max-w-xl mx-auto relative">
          <div className="absolute bottom-0 w-full -z-10">
            <Image
              src="/pbbv2-halfornament.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={400}
              height={100}
              className="scale-150 mx-auto scale-y-[-1]"
              loading="lazy"
            />
          </div>
          <hr className="border-0 h-[3px] md:h-1 bg-gradient-to-r from-white/0 via-[#005dd6] via-50% to-white/0" />
        </div>
      </div>

      <Section>
        <div className="relative max-w-xl mx-auto -mt-5 text-white">
          <div className="absolute top-[12rem] -left-[13rem] md:-left-[19rem] md:top-[27rem] lg:top-[28rem] lg:-left-[8rem] w-[350px] md:w-auto h-auto md:bottom-10 md:right-3 -z-10">
            <Image
              src="/pbbv2-circleornament.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={400}
              height={100}
              className="opacity-75"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[37rem] -right-[13rem] md:-right-[19rem] md:top-[68rem] lg:top-[68rem] lg:-right-[8rem] w-[350px] md:w-auto h-auto -z-10">
            <Image
              src="/pbbv2-circleornament.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={400}
              height={100}
              className="opacity-75"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[52rem] -left-[13rem] md:-left-[19rem] md:top-[93rem] lg:top-[93rem] lg:-left-[8rem] w-[350px] md:w-auto h-auto -z-10">
            <Image
              src="/pbbv2-circleornament.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={400}
              height={100}
              className="opacity-75"
              loading="lazy"
            />
          </div>

          <Image
            src="/pbbv2-allfeature.webp"
            alt="Preview Personal Branding Builder"
            width={1000}
            height={1500}
            className="mx-auto -ml-0.5"
            loading="lazy"
          />
        </div>
      </Section>

      <div className="w-full py-6 text-center">
        <div className="max-w-xs md:max-w-sm mx-auto">
          <hr className="border-0 h-[3px] md:h-1 bg-gradient-to-r from-white/0 via-[#005dd6] via-50% to-white/0" />
        </div>
      </div>

      <Section className="text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">
            Jangan percaya saya, <br /> <span className="text-[#fff500]">percaya</span> sama <span className="text-[#fff500]">3000+ orang</span> <br /> yang udah pake Tools AI ini.
          </h2>
          <div
            className="flex justify-center mb-5 text-white text-3xl md:text-4xl font-bold pb-3"
            style={{
              textShadow:
                "0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.5)",
            }}
          >
            Ini kata mereka:  
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <div className="w-full md:w-1/2">
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "linear-gradient(180deg, #0051bd, #003172, #003172)",
                  aspectRatio: "9 / 16",
                }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                  <LazyYoutube
                    videoId="gJbp9sIQX5M"
                    title="Testimoni Personal Branding Builder dari Danang Giri Sadewa "
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "linear-gradient(180deg, #0051bd, #003172, #003172)",
                  aspectRatio: "9 / 16",
                }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                  <LazyYoutube videoId="zq-_nBXBXg4" title="Testimoni 2" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <Image
              src="/pbbv2-testimoni.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={600}
              height={1200}
              className="mx-auto rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="w-full pt-6 pb-10 text-center">
            <div className="max-w-xs md:max-w-sm mx-auto">
              <hr className="border-0 h-[3px] md:h-1 bg-gradient-to-r from-white/0 via-[#005dd6] via-50% to-white/0" />
            </div>
          </div>

          <div
            className="flex justify-center mb-5 text-white text-3xl md:text-4xl font-bold pb-3"
            style={{
              textShadow:
                "0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.5)",
            }}
          >
            Belum puas dengan <br /> testimoninya?
          </div>
          <div>
            <Image
              src="/pbbv2-feedback.webp"
              alt="Feedback Pengguna Personal Branding Builder"
              width={600}
              height={1200}
              className="mx-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <div className="w-full py-6 text-center">
        <div className="max-w-xs md:max-w-sm mx-auto">
          <hr className="border-0 h-[3px] md:h-1 bg-gradient-to-r from-white/0 via-[#005dd6] via-50% to-white/0" />
        </div>
      </div>

      <Section>
        <div className="w-full mx-auto bg-[radial-gradient(circle_at_50%_33%,#00498b,#000203,#000203,#000203)]">
          <a
            href="https://lynk.id/kadafidevayana/e3RyMwz/checkout"
            target="_blank"
            rel="noreferrer"
            className="w-full flex justify-center"
          >
            <Image
              src="/pbbv2-checkout.webp"
              alt="Checkout Personal Branding Builder"
              width={600}
              height={200}
              loading="lazy"
            />
          </a>
        </div>
      </Section>

      <div className="w-full py-6 text-center">
        <div className="max-w-xs md:max-w-sm mx-auto">
          <hr className="border-0 h-[3px] md:h-1 bg-gradient-to-r from-white/0 via-[#005dd6] via-50% to-white/0" />
        </div>
      </div>

      <Section>
        <div className="max-w-xl mx-auto">
          <div className="-mr-10 relative">
            <Image
              src="/pbbv2-makesure.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={600}
              height={200}
              loading="lazy"
            />
            <div className="absolute bottom-2 -right-14 w-[350px] md:w-auto h-auto md:bottom-10 md:right-3 -z-10">
              <Image
                src="/pbbv2-circleornament.webp"
                alt="Testimoni Pengguna Personal Branding Builder"
                width={400}
                height={100}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      <div className="w-full py-6 text-center">
        <div className="max-w-xl mx-auto relative">
          <hr className="border-0 h-[3px] md:h-1 bg-gradient-to-r from-white/0 via-[#005dd6] via-50% to-white/0" />
          <div className="absolute top-[2.4rem] w-full -z-10">
            <Image
              src="/pbbv2-halfornament.webp"
              alt="Testimoni Pengguna Personal Branding Builder"
              width={400}
              height={100}
              className="scale-150 mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-xl mx-auto -mt-20">
          <Image
            src="/pbbv2-faq.webp"
            alt="FAQ Personal Branding Builder"
            width={600}
            height={200}
            className="mx-auto mb-10"
            loading="lazy"
          />
        </div>
      </Section>

      <div className="w-full text-white text-center py-6 px-4">
        <div className="text-xs mx-auto max-w-sm flex justify-center items-end">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <Image
            src="/kadev-logomark.webp"
            alt="KADEV Academy"
            width={70}
            height={50}
            className="ml-1 mr-0.5 pb-0.5"
            loading="lazy"
          />
          <p>All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}

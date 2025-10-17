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
      <div className="flex justify-center w-full h-screen items-center bg-[linear-gradient(to_right,#004b8d,#0061c6,#ffffff)]">
        <div className="max-w-xl -mt-[20%] md:mt-40 lg:mt-0 mr-3 md:mr-0 md:ml-5">
          <Image
            src="/pbbv2-hero.webp"
            alt="Personal Brand Builder"
            width={550}
            height={1000}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <Section className="text-center">
        <div className="relative w-full mt-0 mx-auto">
          <div className="absolute top-[10rem] -left-[14rem] md:top-[27rem] lg:top-[24rem] lg:left-[15rem] w-[350px] md:w-auto h-auto md:bottom-10 md:right-3 -z-10">
            <Image
              src="/pbbv2-circleornament.webp"
              alt="Ornament shining circle - Personal Branding Builder v2"
              width={400}
              height={100}
              className="opacity-75"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[20rem] -right-[15rem] md:top-[49rem] lg:top-[42rem] lg:right-[14rem] w-[350px] md:w-auto h-auto -z-10">
            <Image
              src="/pbbv2-circleornament.webp"
              alt="Ornament shining circle - Personal Branding Builder v2"
              width={400}
              height={100}
              className="opacity-75"
              loading="lazy"
            />
          </div>

          <div className="ml-1 md:ml-10">
            <Image
              src="/pbbv2-logo.webp"
              alt="Preview Personal Branding Builder"
              width={600}
              height={200}
              className="max-w-sm px-14 md:px-0 -ml-1 md:mx-auto"
              loading="lazy"
            />
          </div>
          <p className="text-xs md:text-base font-normal tracking-wider text-white my-6 md:my-8">
            Tools yang bantu kamu personal branding <br />
            <span className="font-extrabold text-[#fff500]">gak pake ribet</span>, <span className="font-extrabold text-[#fff500]">instan</span>, <span className="font-extrabold text-[#fff500]">5 menit langsung siap</span>.
          </p>
          <Image
            src="/pbbv2-benefit.webp"
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
          <h2 className="text-xl md:text-3xl text-white mb-6 tracking-wider">
            TOOLS INI <span className="font-extrabold text-[#ff0000]">GA BOLEH DIPAKAI <br /> SEMBARANG ORANG‼️‼️</span>
          </h2>
          <div className="aspect-video w-full max-w-xl mx-auto mb-10">
            <LazyYoutube
              videoId="BHZkZjAsjmM"
              title="Video Clip Personal Branding Builder"
              ratio="16:9"
            />
          </div>
          <div className="ml-2 md:ml-5">
            <Image
              src="/pbbv2-warning.webp"
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
            src="/pbbv2-pbbfor.webp"
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

      <Section className="bg-[radial-gradient(circle_at_50%_50%,rgba(0,73,139,0.8),rgba(0,0,0))] md:bg-[radial-gradient(circle_at_50%_50%,rgba(0,73,139,0.7),rgba(0,73,139,0.7),rgba(0,73,139,0.7),rgba(0,0,0),rgba(0,0,0),rgba(0,0,0),rgba(0,0,0))]">
        <div className="w-full max-w-3xl md:mx-auto md:h-screen flex items-center">
          <div className="flex justify-center mx-auto gap-5 md:gap-0 flex-col md:flex-row md:ml-6">
            <a
              href="https://lynk.id/kadafidevayana/3e8we3g142jp/checkout"
              target="_blank"
              rel="noreferrer"
              className="w-full pl-3.5 md:pl-0"
            >
              <Image
                src="/pbbv2-pro.webp"
                alt="Personal Branding Builder Pro Version"
                width={600}
                height={200}
                loading="lazy"
              />
            </a>
            <a
              href="https://lynk.id/kadafidevayana/e3RyMwz/checkout"
              target="_blank"
              rel="noreferrer"
              className="w-full px-4 md:px-5"
            >
              <Image
                src="/pbbv2-basic.webp"
                alt="Personal Branding Builder Basic Version"
                width={600}
                height={200}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </Section>
      <div className="w-full text-center font-extrabold text-xl italic text-white mt-3 mb-10 md:-mt-16 lg:-mt-20 md:mb-20 tracking-wider">
        <p className="text-[#ff0000] text-5xl">(98/100)</p>
        <p className="pt-2">SISA 2 KUOTA UNTUK <br /> <span className="text-3xl">HARGA DISKON!</span></p>
      </div>
      {/* <div className="w-full py-6 text-center">
        <div className="max-w-xs md:max-w-sm mx-auto">
          <hr className="border-0 h-[3px] md:h-1 bg-gradient-to-r from-white/0 via-[#005dd6] via-50% to-white/0" />
        </div>
      </div> */}

      {/* <Section>
        <div className="max-w-xl -ml-5 md:mx-auto ">
          <div className="-mr-10 relative">
            <Image
              src="/pbbv2-trigger.webp"
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
      </Section> */}

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

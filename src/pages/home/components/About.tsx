import hokkaido from '@/assets/hokkaido.png';

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-44 lg:py-60 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 max-w-[1280px] mx-auto pointer-events-none z-0 flex justify-end items-center py-8 md:py-12">
        <img
          src={hokkaido}
          alt=""
          aria-hidden="true"
          className="h-full w-auto max-w-none object-contain select-none opacity-80 translate-x-[58%] md:translate-x-[50%] lg:translate-x-[48%] xl:translate-x-[34%]"
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-0"
        >
          <p
            className="font-heading font-bold tracking-tight text-[3rem] md:text-[4rem] lg:text-[5rem] leading-none tracking-[0.15em] text-primary-200 [writing-mode:vertical-rl] select-none"
          >
            ABOUT US
          </p>
        </div>

        {/* テキストコンテンツ */}
        <div className="relative z-10 flex flex-row items-center md:gap-6 lg:gap-12 ml-4">
          <div className="w-[60%] sm:w-[60%] md:w-[60%] lg:w-[50%]  shrink-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-foreground-950 leading-snug sm:leading-tight mb-3 sm:mb-5 md:mb-8">
              地域に根ざした
              <br />
              <span className="text-foreground-400">おそうじとお手伝い</span>
            </h2>
            <p className="text-foreground-600 leading-relaxed text-sm md:text-base mb-8 md:hidden">
              私たち合同会社N-ONEは、北海道ニセコ町を拠点に地域をサポート。<br />『また来たい』と思える心通う空間を創ります。
            </p>
            <p className="text-foreground-600 leading-relaxed text-sm md:text-base lg:text-lg xl:text-xl mb-8 hidden md:block">
              私たち合同会社N-ONEは、北海道ニセコ町字曽我を拠点に、地域皆様のお手伝いをさせていただいております。<br />心通い合うコミュニティを育み、『何度でも足を運びたい』と思っていただけるような魅力ある空間の創造を目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
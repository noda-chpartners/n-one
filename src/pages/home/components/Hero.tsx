import hero from '@/assets/hero.jpg';

export default function Hero() {
  return (
    <section id="hero"
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-background-50">
      <img
        src={hero}
        alt="hero image"
        className="absolute left-0 top-0 w-full md:w-2/3 h-full object-cover object-top
    [clip-path:ellipse(140%_94%_at_50%_0%)]
    md:[clip-path:ellipse(95%_100%_at_0%_50%)]"
      />

      <div className="relative z-10 flex h-full min-h-screen min-h-[100dvh] items-end justify-end px-4 md:px-6 pb-6 pr-0">
        <div className="relative text-left max-w-xl md:max-w-2xl md:-ml-16 lg:-ml-24 px-4 py-4 md:px-6 md:py-8 -mb-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-3 -inset-y-2 md:-inset-x-10 md:-inset-y-6 bg-background-50/70 blur-xl md:blur-2xl rounded-3xl"
          />

          <div className="relative">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-500 leading-tight mb-2 md:mb-3 ">
              ニセコの暮らしに
              <br />
              寄り添う
            </h1>
            <p className="text-foreground-900 text-sm md:text-xl font-bold max-w-2xl  leading-relaxed">
              北海道虻田郡ニセコ町を拠点とする
              <br />
              地域密着型サービス
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
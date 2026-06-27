export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Artistic%20stylized%20landscape%20of%20Hokkaido%20Niseko%20mountain%20range%20with%20soft%20snow%20caps%20and%20green%20summer%20fields%2C%20warm%20morning%20golden%20light%2C%20minimal%20composition%20with%20wide%20open%20sky%2C%20gentle%20color%20palette%20with%20cream%20and%20warm%20earth%20tones%2C%20painterly%20artistic%20style%2C%20soft%20atmospheric%20depth%2C%20serene%20and%20inviting%20mood%2C%20Japanese%20countryside%20aesthetic%2C%20horizontal%20composition%20with%20ample%20negative%20space%20in%20upper%20portion&width=1800&height=1000&seq=n-one-hero-2026&orientation=landscape"
        alt="ニセコの山々と自然の風景"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 md:px-6">
        <div className="text-center max-w-4xl">
          <p className="text-white/80 text-sm md:text-base font-medium tracking-widest mb-4 md:mb-6">
            北海道・ニセコ町
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-3 md:mb-4">
            ニセコの暮らしに
            <br />
            寄り添う
          </h1>
          <p className="text-white/70 text-base md:text-xl font-light max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            清掃・除雪・草刈り — 北海道虻田郡ニセコ町を拠点とする
            <br className="hidden sm:block" />
            地域密着型サービス
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:06052994585"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-primary-500 text-white rounded-full text-base font-bold whitespace-nowrap cursor-pointer hover:bg-primary-600 transition-colors"
            >
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center"></i>
              まずはお電話で相談
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/40 text-white rounded-full text-base font-medium whitespace-nowrap cursor-pointer hover:bg-white/10 transition-colors"
            >
              サービスを見る
              <i className="ri-arrow-down-line w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <i className="ri-arrow-down-line w-4 h-4 flex items-center justify-center animate-bounce"></i>
        </a>
      </div>
    </section>
  );
}
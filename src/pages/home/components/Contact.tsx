export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Warm%20golden%20hour%20Hokkaido%20Niseko%20countryside%20scene%20with%20soft%20rolling%20hills%20and%20farm%20fields%20under%20dramatic%20sunset%20sky%2C%20peaceful%20rural%20Japanese%20landscape%2C%20cream%20and%20warm%20amber%20tones%2C%20artistic%20painterly%20style%2C%20atmospheric%20depth%2C%20wide%20open%20space%2C%20serene%20and%20inviting%20mood%2C%20horizontal%20composition&width=1800&height=900&seq=n-one-contact-bg&orientation=landscape"
        alt="ニセコの風景"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60"></div>

      <div className="relative z-10 max-w-[1280px] mx-auto text-center">
        <span className="inline-block text-xs tracking-[0.2em] text-white/60 font-medium border border-white/30 rounded-full px-4 py-1.5 mb-6">
          CONTACT
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4 leading-tight">
          お気軽に
          <br className="sm:hidden" />
          ご連絡ください
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          清掃・除雪・草刈りのご依頼やご相談は、
          <br className="hidden sm:block" />
          お電話一本で承ります。お見積り無料。
        </p>

        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 bg-white/10 backdrop-blur-md rounded-3xl px-8 md:px-14 py-8 md:py-10 border border-white/20">
          <div className="text-white">
            <p className="text-white/50 text-xs tracking-wider mb-2">電話番号</p>
            <a
              href="tel:06052994585"
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white hover:text-white/80 transition-colors tracking-wide cursor-pointer"
            >
              060-5299-4585
            </a>
          </div>

          <div className="hidden sm:block w-px h-16 bg-white/20"></div>
          <div className="sm:hidden w-16 h-px bg-white/20"></div>

          <a
            href="tel:06052994585"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary-500 text-white rounded-full text-base font-bold whitespace-nowrap cursor-pointer hover:bg-primary-600 transition-colors"
          >
            <i className="ri-phone-fill text-lg w-5 h-5 flex items-center justify-center"></i>
            今すぐ電話する
          </a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <i className="ri-time-line text-white/40 w-4 h-4 flex items-center justify-center"></i>
            <span>営業時間 8:00 〜 17:00</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
          <div className="flex items-center gap-2">
            <i className="ri-calendar-check-line text-white/40 w-4 h-4 flex items-center justify-center"></i>
            <span>定休日なし（土日祝も営業）</span>
          </div>
        </div>
      </div>
    </section>
  );
}
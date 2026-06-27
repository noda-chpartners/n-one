export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-[42%]">
            <span className="inline-block text-xs tracking-[0.2em] text-foreground-400 font-medium border border-foreground-300/40 rounded-full px-4 py-1.5 mb-6">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground-950 leading-tight mb-8">
              地域に根ざした
              <br />
              <span className="text-foreground-400">おそうじとお手伝い</span>
            </h2>
            <p className="text-foreground-600 leading-relaxed text-sm md:text-base mb-8 max-w-md">
              合同会社N-ONEは、北海道ニセコ町字曽我を拠点に、地元の皆様の清掃・除雪・草刈りのお手伝いをさせていただいております。ニセコの自然とともに、日々の暮らしを支えるサービスを提供しています。
            </p>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-foreground-800 font-medium text-sm border-b border-foreground-300 pb-1 hover:border-foreground-600 transition-colors cursor-pointer"
            >
              サービスの詳細を見る
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>

          <div className="lg:w-[58%] relative">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-[45%] mt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20service%20worker%20in%20clean%20cream%20colored%20uniform%20standing%20in%20a%20minimal%20modern%20interior%20space%2C%20warm%20natural%20lighting%20from%20large%20window%2C%20soft%20shadows%2C%20editorial%20portrait%20photography%2C%20clean%20aesthetic%2C%20neutral%20beige%20and%20cream%20tones%2C%20professional%20yet%20friendly%20atmosphere%2C%20Japanese%20workplace%20setting&width=800&height=1000&seq=n-one-about-01&orientation=portrait"
                    alt="N-ONEスタッフ"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-[55%]">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://readdy.ai/api/search-image?query=Beautiful%20Niseko%20Hokkaido%20summer%20landscape%20with%20lush%20green%20rolling%20hills%20and%20distant%20mountains%20under%20soft%20afternoon%20sunlight%2C%20peaceful%20Japanese%20countryside%20scenery%2C%20warm%20natural%20color%20palette%20with%20sage%20greens%20and%20earth%20tones%2C%20atmospheric%20depth%2C%20serene%20and%20inviting%20mood%2C%20wide%20composition%20showing%20open%20fields%20and%20sky&width=800&height=1067&seq=n-one-about-02&orientation=portrait"
                    alt="ニセコの自然風景"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 md:top-8 md:right-8 flex gap-6 md:gap-8">
              <div className="text-right">
                <p className="text-3xl md:text-5xl font-bold font-heading text-foreground-950">8:00-17:00</p>
                <p className="text-xs md:text-sm text-foreground-400 mt-1">営業時間・定休日なし</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
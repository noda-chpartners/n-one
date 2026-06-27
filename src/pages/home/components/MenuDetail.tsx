const menuItems = [
  {
    title: '清掃作業',
    subtitle: 'ご自宅・別荘の室内清掃全般',
    price: '¥6,000〜',
    image: 'https://readdy.ai/api/search-image?query=Japanese%20home%20interior%20cleaning%20before%20and%20after%20transformation%2C%20sparkling%20clean%20wooden%20floor%2C%20bright%20natural%20light%20through%20windows%2C%20tidy%20minimalist%20living%20room%2C%20warm%20cream%20and%20beige%20color%20palette%2C%20professional%20cleaning%20result%2C%20fresh%20and%20inviting%20atmosphere%2C%20Japanese%20modern%20home&width=800&height=1000&seq=n-one-menu-cleaning&orientation=portrait',
  },
  {
    title: '除雪',
    subtitle: '冬季の玄関前・駐車場・私道',
    price: '¥6,000〜',
    image: 'https://readdy.ai/api/search-image?query=Hokkaido%20winter%20house%20with%20perfectly%20cleared%20snow%20from%20driveway%20and%20entrance%2C%20neat%20snow%20banks%20on%20sides%2C%20warm%20light%20from%20house%20windows%2C%20fresh%20morning%20snow%2C%20crisp%20clean%20winter%20scene%2C%20professional%20snow%20removal%20result%2C%20peaceful%20Japanese%20winter%20countryside&width=800&height=1000&seq=n-one-menu-snow&orientation=portrait',
  },
  {
    title: '草刈り',
    subtitle: '春〜秋の庭・敷地の草刈り',
    price: '¥6,000〜',
    image: 'https://readdy.ai/api/search-image?query=Beautifully%20maintained%20Japanese%20garden%20lawn%20after%20professional%20grass%20cutting%2C%20lush%20green%20grass%20neatly%20trimmed%2C%20warm%20summer%20sunlight%2C%20traditional%20Japanese%20house%20in%20background%2C%20Hokkaido%20rural%20setting%2C%20fresh%20and%20natural%20atmosphere%2C%20tidy%20outdoor%20space%2C%20professional%20landscaping%20result&width=800&height=1000&seq=n-one-menu-grass&orientation=portrait',
  },
  {
    title: 'その他',
    subtitle: 'ガレージの片付けなど',
    price: 'お見積り',
    image: 'https://readdy.ai/api/search-image?query=Neatly%20organized%20garage%20interior%20after%20professional%20cleanup%2C%20tools%20and%20equipment%20tidily%20arranged%20on%20shelves%2C%20clean%20concrete%20floor%2C%20warm%20lighting%2C%20spacious%20and%20organized%20atmosphere%2C%20Japanese%20garage%20setting%2C%20transformation%20from%20cluttered%20to%20organized%2C%20minimalist%20storage%20aesthetic&width=800&height=1000&seq=n-one-menu-garage&orientation=portrait',
  },
];

export default function MenuDetail() {
  return (
    <section id="menu" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground-950">
            MENU &amp; PRICE
          </h2>
          <p className="text-foreground-400 text-sm md:text-base">
            ニセコ町を中心に、虻田郡周辺へ対応
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-background-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-foreground-900 text-xs md:text-sm font-bold px-3 py-1.5 rounded-full">
                  {item.price}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-white text-lg md:text-xl font-bold font-heading mb-1">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
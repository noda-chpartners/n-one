const services = [
  {
    title: '清掃作業',
    price: '¥6,000〜',
    description: 'ご自宅や別荘の室内清掃、窓拭き、床磨きまで丁寧に対応します。',
    image: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20interior%20cleaning%20scene%20in%20a%20Japanese%20home%2C%20warm%20sunlight%20streaming%20through%20large%20window%20onto%20polished%20wooden%20floor%2C%20clean%20aesthetic%20with%20neutral%20cream%20and%20beige%20tones%2C%20professional%20cleaning%20atmosphere%2C%20soft%20natural%20lighting%2C%20tidy%20and%20organized%20space%2C%20Japanese%20modern%20interior%20design%2C%20peaceful%20and%20fresh%20ambiance&width=800&height=800&seq=n-one-service-cleaning&orientation=squarish',
  },
  {
    title: '除雪',
    price: '¥6,000〜',
    description: '冬季の玄関前・駐車場・私道の除雪を迅速に対応。朝早くからお伺いします。',
    image: 'https://readdy.ai/api/search-image?query=Snow%20removal%20scene%20in%20Hokkaido%20winter%2C%20freshly%20cleared%20driveway%20with%20crisp%20white%20snow%20banks%20on%20sides%2C%20warm%20wooden%20house%20in%20background%2C%20soft%20winter%20morning%20light%2C%20peaceful%20snowy%20atmosphere%2C%20clean%20and%20neat%20path%20leading%20to%20house%2C%20Japanese%20winter%20rural%20setting%2C%20professional%20snow%20clearing%20work&width=800&height=800&seq=n-one-service-snow&orientation=squarish',
  },
  {
    title: '草刈り',
    price: '¥6,000〜',
    description: '春から秋にかけての庭や敷地の草刈り。広い敷地もお任せください。',
    image: 'https://readdy.ai/api/search-image?query=Japanese%20garden%20with%20freshly%20trimmed%20green%20lawn%2C%20professional%20landscaping%20scene%2C%20warm%20summer%20sunlight%20filtering%20through%20trees%2C%20lush%20green%20grass%20neatly%20cut%2C%20natural%20and%20fresh%20atmosphere%2C%20Hokkaido%20countryside%20garden%20setting%2C%20clean%20and%20tidy%20outdoor%20space%2C%20peaceful%20rural%20Japanese%20aesthetic&width=800&height=800&seq=n-one-service-grass&orientation=squarish',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-background-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground-950">
            SERVICE MENU
          </h2>
          <p className="text-foreground-500 text-sm md:text-base mt-4 max-w-xl mx-auto">
            ニセコの自然と暮らしに寄り添う、3つの主要サービス
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold font-heading mb-1">
                  {service.title}
                </h3>
                <p className="text-white/80 text-lg md:text-xl font-bold font-heading mb-3">
                  {service.price}
                </p>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
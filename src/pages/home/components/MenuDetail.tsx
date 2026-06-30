import kusakari from '@/assets/kusakari.jpg';
import snow from '@/assets/snow.jpg';
import { useRef, useEffect, useState } from 'react';


function PriceBlock({
  price,
}: {
  price: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.8 } 
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-end mr-2">
      <div
        ref={ref}
        className="relative inline-flex items-baseline pb-2"
      >
        {/* accent アンダーライン */}
        <span
          aria-hidden="true"
          className={`absolute bottom-2 z-0 left-0 h-2 md:h-4 w-full bg-accent-300 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        {price.includes('0') ? (
          <>
            <span className="relative z-10 text-2xl md:text-4xl font-bold text-primary-500">
              {price}
            </span>
            <span className="relative z-10 text-sm md:text-base font-bold text-foreground-600 ml-1">
              円～
            </span>
          </>
        ) : (
          <span className="relative z-10 text-2xl md:text-3xl font-bold text-primary-500">
            {price}
          </span>
        )}

      </div>
    </div>
  );
}

const menuItems = [
  {
    id: 1,
    title: '清掃',
    subtitle: 'ご自宅や別荘の室内清掃など幅広い内容を丁寧に対応しております。',
    price: '6000',
    image: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20interior%20cleaning%20scene%20in%20a%20Japanese%20home%2C%20warm%20sunlight%20streaming%20through%20large%20window%20onto%20polished%20wooden%20floor%2C%20clean%20aesthetic%20with%20neutral%20cream%20and%20beige%20tones%2C%20professional%20cleaning%20atmosphere%2C%20soft%20natural%20lighting%2C%20tidy%20and%20organized%20space%2C%20Japanese%20modern%20interior%20design%2C%20peaceful%20and%20fresh%20ambiance&width=800&height=800&seq=n-one-service-cleaning&orientation=squarish',
  },
  {
    id: 2,
    title: '除雪',
    subtitle: '玄関前や私道など迅速に対応。朝早くからお伺いします。',
    price: '6000',
    image: snow,
  },
  {
    id: 3,
    title: '草刈り',
    subtitle: '春から秋にかけての庭や敷地の草刈り。広い敷地もお任せください。',
    price: '6000',
    image: kusakari,
  },
  {
    id: 4,
    title: 'その他',
    subtitle: 'ガレージの片付けやドローンを使ったサービスなど是非ご相談ください。',
    price: 'お見積り',
    image: 'https://readdy.ai/api/search-image?query=Neatly%20organized%20garage%20interior%20after%20professional%20cleanup%2C%20tools%20and%20equipment%20tidily%20arranged%20on%20shelves%2C%20clean%20concrete%20floor%2C%20warm%20lighting%2C%20spacious%20and%20organized%20atmosphere%2C%20Japanese%20garage%20setting%2C%20transformation%20from%20cluttered%20to%20organized%2C%20minimalist%20storage%20aesthetic&width=800&height=1000&seq=n-one-menu-garage&orientation=portrait',
  },
];


export default function MenuDetail() {
  const softShapes = [
    'rounded-[63%_37%_24%_46%_/_55%_48%_52%_45%]',
    'rounded-[40%_70%_70%_30%_/_30%_28%_40%_70%]',
    'rounded-[40%_60%_55%_42%_/_60%_50%_60%_38%]',
    'rounded-[60%_40%_30%_70%_/_60%_30%_70%_60%]',
  ];

      return (
        <section id="menu" className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-[1024px] mx-auto">
            {/* ヘッダー部分 */}
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary-500">
                SERVICES &amp; PRICES
              </h2>
              <p className="text-foreground-800 font-bold text-base md:text-lg mt-1">
                サービスとご料金
              </p>
              <p className="text-foreground-600 text-sm md:text-base mt-3">
                ニセコの自然と暮らしに寄り添う、4つのメニュー
              </p>
            </div>

            {/* リスト部分 */}
            <div className="flex flex-col gap-16 md:gap-24">
              {menuItems.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                  >
                    {/* 画像エリア */}
                    <div
                      className={`group relative overflow-hidden aspect-[4/3] bg-background-100 shadow-sm ${softShapes[index]} ${isEven ? 'md:order-1' : 'md:order-2'
                        }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* テキストエリア */}
                    <div
                      className={`flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'
                        }`}
                    >
                      <h2 className="text-8xl md:text-8xl text-primary-200 -mb-6 ml-10">
                        0{item.id}
                      </h2>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-foreground-600 text-base md:text-lg mb-8 leading-relaxed">
                        {item.subtitle}
                      </p>

                      <PriceBlock price={item.price} />

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    }
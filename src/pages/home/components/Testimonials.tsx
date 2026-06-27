import { useState } from 'react';

const testimonials = [
  {
    text: 'N-ONEさんには毎年の除雪と春先の草刈りをお願いしています。ニセコの気候に詳しく、いつも丁寧な対応で助かっています。冬の早朝でもすぐに来てくれるので本当に安心です。',
    name: 'ニセコ町在住・T様',
    role: 'リピート顧客',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Japanese%20middle-aged%20man%20with%20warm%20friendly%20smile%2C%20soft%20natural%20lighting%2C%20clean%20simple%20cream%20background%2C%20editorial%20style%20headshot%2C%20approachable%20and%20trustworthy%20expression%2C%20casual%20neat%20attire&width=200&height=200&seq=n-one-testimonial-01&orientation=squarish',
  },
  {
    text: '別荘の管理をN-ONEさんに任せています。シーズン前の清掃から庭の手入れまで、すべてお願いできてとても助かっています。いつ来ても気持ちよく過ごせるのはN-ONEさんのおかげです。',
    name: 'ニセコ町在住・S様',
    role: '別荘オーナー',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Japanese%20woman%20in%20her%20fifties%20with%20kind%20gentle%20smile%2C%20soft%20natural%20lighting%2C%20clean%20simple%20cream%20background%2C%20editorial%20style%20headshot%2C%20warm%20and%20trustworthy%20expression%2C%20elegant%20casual%20attire&width=200&height=200&seq=n-one-testimonial-02&orientation=squarish',
  },
  {
    text: 'ガレージの片付けをお願いしたら、想像以上に綺麗に整理整頓していただきました。使わなくなったものの処分まで相談に乗ってくれて、本当に親切で丁寧な会社だと思います。',
    name: '倶知安町在住・K様',
    role: 'リピート顧客',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Japanese%20man%20in%20his%20forties%20with%20confident%20warm%20smile%2C%20soft%20natural%20lighting%2C%20clean%20simple%20cream%20background%2C%20editorial%20style%20headshot%2C%20friendly%20and%20reliable%20expression%2C%20smart%20casual%20attire&width=200&height=200&seq=n-one-testimonial-03&orientation=squarish',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-foreground-400 text-sm md:text-base tracking-wider font-heading">
            （ 地元の皆様からの信頼 ）
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-accent-500 text-white rounded-full px-4 py-1.5">
              <i className="ri-star-fill text-sm w-4 h-4 flex items-center justify-center"></i>
              <span className="text-sm font-bold">4.9</span>
            </div>
          </div>

          <blockquote className="mb-8">
            <p className="text-foreground-700 text-base md:text-lg leading-relaxed font-heading">
              &ldquo;{t.text}&rdquo;
            </p>
          </blockquote>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-background-200 flex-shrink-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-foreground-900 text-sm font-bold">{t.name}</p>
                <p className="text-foreground-400 text-xs">{t.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-foreground-200 flex items-center justify-center cursor-pointer hover:bg-foreground-100 transition-colors"
                aria-label="前のレビュー"
              >
                <i className="ri-arrow-left-line text-foreground-600 w-4 h-4 flex items-center justify-center"></i>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-foreground-900 flex items-center justify-center cursor-pointer hover:bg-foreground-800 transition-colors"
                aria-label="次のレビュー"
              >
                <i className="ri-arrow-right-line text-white w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  i === current
                    ? 'bg-foreground-800 w-6'
                    : 'bg-foreground-200 hover:bg-foreground-300'
                }`}
                aria-label={`レビュー ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { useRef, useEffect, useState } from 'react';
import contact from '@/assets/contact.jpg';
export default function Contact() {

  function PhoneNumber() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), 300);
            observer.unobserve(el);
          }
        },
        { threshold: 0.3, rootMargin: '0px 0px -5% 0px' }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);
    return (
      <div ref={ref} className="relative inline-block pb-1">
        <span
          aria-hidden="true"
          className={`absolute bottom-1 left-0 z-0 block h-2 md:h-4 w-full bg-accent-300 origin-left pointer-events-none transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'scale-x-100' : 'scale-x-0'
            }`}
        />
        <a
          href="tel:06052994585"
          className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-500 hover:text-primary-400 transition-colors tracking-wide cursor-pointer"
        >
          060-5299-4585
        </a>
      </div>
    );
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6">
      <img
        src={contact}
        alt="ニセコの風景"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground-50/70 to-primary-50/70"></div>

      <div className="relative z-10 max-w-[1280px] mx-auto flex justify-center px-4">
        <div className="w-full max-w-2xl bg-background-50/70  rounded-2xl md:rounded-3xl px-6 py-10 md:px-12 md:py-14  text-center">

          <span className="inline-block text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary-500 mb-2">
            CONTACT
          </span>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading text-foreground-950 mb-4 leading-tight">
            お気軽にご連絡ください
          </h2>

          <p className="text-foreground-950 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
            ご依頼やご相談は、
            <br />
            お電話一本で承っております。
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center px-4 md:px-8 py-6 md:py-8 mb-6 rounded-xl bg-white">
            <div>
              <p className="text-foreground-950 text-base tracking-wider mb-2">電話番号</p>
              <PhoneNumber />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center text-foreground-950/80 text-sm">
            <div className="flex items-center gap-2">
              <i className="ri-time-line text-foreground-950/80 flex items-center justify-center"></i>
              <span>営業時間 8:00 〜 17:00</span>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 md:-bottom-32 left-1/2 -translate-x-1/2 z-10
      w-[200%] md:w-[160%] h-44 md:h-44
      bg-primary-600 rounded-[50%]"
      />
    </section>
  );
}
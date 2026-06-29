import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisible = () => {
      const hero = document.getElementById('hero');
      if (!hero) {
        setVisible(window.scrollY > window.innerHeight);
        return;
      }
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setVisible(window.scrollY >= heroBottom);
    };

    updateVisible();
    window.addEventListener('scroll', updateVisible, { passive: true });
    window.addEventListener('resize', updateVisible);
    return () => {
      window.removeEventListener('scroll', updateVisible);
      window.removeEventListener('resize', updateVisible);
    };
  }, []);

  const scrollToTop = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ページトップへ戻る"
      className={`fixed bottom-6 right-4 md:bottom-8 md:right-6 z-40
        w-12 h-12 md:w-14 md:h-14
        flex items-center justify-center
        rounded-full bg-primary-500 text-white
        border border-primary-400 shadow-lg
        hover:bg-primary-600 active:scale-95
        transition-all duration-300 cursor-pointer
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <i className="ri-arrow-up-line text-2xl md:text-3xl" aria-hidden="true" />
    </button>
  );
}
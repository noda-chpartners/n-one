import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#info', label: 'Info' },
  { href: '#access', label: 'Access' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const updatePastHero = () => {
      const hero = document.getElementById('hero');
      if (!hero) {
        setPastHero(window.scrollY > window.innerHeight);
        return;
      }
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setPastHero(window.scrollY >= heroBottom);
    };

    updatePastHero();
    window.addEventListener('scroll', updatePastHero, { passive: true });
    window.addEventListener('resize', updatePastHero);
    return () => {
      window.removeEventListener('scroll', updatePastHero);
      window.removeEventListener('resize', updatePastHero);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 pt-4 transition-all duration-300 ${menuOpen ? 'bg-background-50 shadow-lg pb-2 md:bg-transparent md:shadow-none md:pb-0' : ''
        }`}
    >
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-16 lg:h-20 max-w-[1280px] mx-auto">


          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className={`text-xl md:text-xl lg:text-2xl font-bold font-heading whitespace-nowrap transition-colors duration-300 ${menuOpen || pastHero ? 'text-primary-600' : 'text-white'
              }`}
          >
            N-ONE
          </a>


          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 bg-white px-8 py-3 rounded-full border border-primary-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-bold whitespace-nowrap text-foreground-700 hover:text-primary-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 電話予約ボタン（最初のご提示コードのまま） */}
          <div className="hidden md:block">
            <a
              href="tel:06052994585"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer border ${scrolled
                ? 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600'
                : 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600'
                }`}
            >
              <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
              電話予約
            </a>
          </div>

          {/* モバイル用ハンバーガーメニューボタン */}
          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${menuOpen || pastHero ? 'text-primary-600' : 'text-white'
              }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* モバイルメニュー展開時 */}
      {menuOpen && (
        <div className="md:hidden border-t border-background-200">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-foreground-700 text-sm font-bold py-3 px-4 rounded-lg hover:bg-background-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* モバイル用の電話予約ボタン（最初のご提示コードのまま） */}
            <a
              href="tel:06052994585"
              className="flex items-center justify-center gap-2 mt-2 py-3 px-5 bg-primary-500 text-white rounded-full text-sm font-bold"
            >
              <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
              電話予約
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Service' },
  { href: '#menu', label: 'Menu' },
  { href: '#info', label: 'Info' },
  { href: '#access', label: 'Access' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 max-w-[1280px] mx-auto">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className={`text-xl md:text-2xl font-bold font-heading whitespace-nowrap transition-colors duration-300 ${
              scrolled ? 'text-foreground-950' : 'text-white'
            }`}
          >
            N-ONE
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? 'text-foreground-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="tel:06052994585"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                scrolled
                  ? 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600'
                  : 'bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
              電話予約
            </a>
          </div>

          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'text-foreground-950' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <i className={`text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-foreground-700 text-sm font-medium py-3 px-4 rounded-lg hover:bg-background-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
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
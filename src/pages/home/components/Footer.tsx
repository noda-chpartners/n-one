export default function Footer() {
  return (
    <footer className="bg-foreground-950 text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-white/90 mb-3">
              N-ONE
            </h3>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              ニセコの清掃・除雪・草刈りサービス
            </p>
            <a
              href="tel:06052994585"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground-950 rounded-full text-sm font-bold whitespace-nowrap cursor-pointer hover:bg-white/90 transition-colors"
            >
              お問い合わせ
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>

          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] font-medium mb-5">LINK</p>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Service', href: '#services' },
                { label: 'Menu', href: '#menu' },
                { label: 'Info', href: '#info' },
                { label: 'Access', href: '#access' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/50 text-sm hover:text-white/80 transition-colors border-b border-white/20 pb-0.5 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] font-medium mb-5">CONTACT</p>
            <div className="space-y-4">
              <div>
                <p className="text-white/50 text-sm">TEL</p>
                <a
                  href="tel:06052994585"
                  className="text-white/80 text-sm font-bold hover:text-white transition-colors border-b border-white/20 pb-0.5"
                >
                  060-5299-4585
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs tracking-[0.2em] font-medium mb-2 mt-6">ADDRESS</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  〒048-1501
                  <br />
                  北海道虻田郡ニセコ町字曽我
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">
              &copy; 合同会社N-ONE All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors border-b border-white/20 pb-0.5">
                プライバシーポリシー
              </a>
              <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors border-b border-white/20 pb-0.5">
                サイトポリシー
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
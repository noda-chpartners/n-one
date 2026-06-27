const infoItems = [
  {
    icon: 'ri-building-2-line',
    label: '会社名',
    value: '合同会社N-ONE',
  },
  {
    icon: 'ri-phone-line',
    label: '電話番号',
    value: '060-5299-4585',
    href: 'tel:06052994585',
    isLink: true,
  },
  {
    icon: 'ri-map-pin-line',
    label: '住所',
    value: '北海道虻田郡ニセコ町字曽我',
  },
  {
    icon: 'ri-time-line',
    label: '営業時間',
    value: '8:00 〜 17:00（平日・土日祝とも）',
  },
  {
    icon: 'ri-calendar-check-line',
    label: '定休日',
    value: '特になし（年末年始のぞく）',
  },
  {
    icon: 'ri-train-line',
    label: 'アクセス',
    value: 'JRニセコ駅から車で約5分',
  },
];

export default function Information() {
  return (
    <section id="info" className="py-16 md:py-24 px-4 md:px-6 bg-background-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground-950">
            BASIC INFORMATION
          </h2>
          <p className="text-foreground-400 text-sm md:text-base mt-3">
            合同会社N-ONE 基本情報
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="group relative bg-background-50 rounded-2xl p-6 md:p-8 border border-background-200/70 hover:border-primary-500/30 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <i
                    className={`${item.icon} text-primary-600 text-lg w-5 h-5 flex items-center justify-center`}
                  ></i>
                </div>
                <div className="min-w-0">
                  <p className="text-foreground-400 text-xs tracking-wider font-medium mb-1.5">
                    {item.label}
                  </p>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-foreground-900 font-bold text-sm md:text-base hover:text-primary-600 transition-colors border-b border-foreground-200 hover:border-primary-400 cursor-pointer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground-900 font-bold text-sm md:text-base leading-relaxed break-words">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-foreground-500 text-sm leading-relaxed max-w-2xl mx-auto">
            ニセコ町および虻田郡周辺を中心に、地域密着型のサービスを提供しています。
            清掃・除雪・草刈りのご依頼は、お気軽にお電話でご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}
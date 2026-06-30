const infoItems = [
  {
    icon: 'ri-building-2-line',
    label: '会社名',
    value: '合同会社N-ONE',
  },
  {
    icon: 'ri-phone-line',
    label: '電話番号',
    value: '090-5299-4585',
    href: 'tel:09052994585',
    isLink: true,
  },
  
  {
    icon: 'ri-time-line',
    label: '営業時間',
    value: '8:00 〜 17:00',
  },
  {
    icon: 'ri-calendar-check-line',
    label: '定休日',
    value: '特になし',
  },

];

export default function Information() {
  return (
    <section id="info" className="py-16 md:py-24 px-4 md:px-6 bg-background-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary-500">
            INFORMATION
          </h2>
          <p className="text-foreground-800 font-bold text-base md:text-lg mt-1">
            基本情報
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 m-10">
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="group relative bg-background-50 rounded-2xl p-6 md:p-8 border border-background-200/70 hover:border-primary-500/30 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                  <i
                    className={`${item.icon} text-white text-lg w-5 h-5 flex items-center justify-center`}
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
      </div>
    </section>
  );
}
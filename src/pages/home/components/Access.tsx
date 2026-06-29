export default function Access() {
  return (
    <section id="access" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1280px] mx-auto">
      <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary-500">
            ACCESS
          </h2>
          <p className="text-foreground-800 font-bold text-base md:text-lg mt-1">
            アクセス
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
          <div className="lg:w-[55%]">
            <div className="rounded-2xl overflow-hidden h-[360px] md:h-[420px] border border-background-300/60">
              <iframe
                src="https://maps.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E8%99%BB%E7%94%B0%E9%83%A1%E3%83%8B%E3%82%BB%E3%82%B3%E7%94%BA%E5%AD%97%E6%9B%BD%E6%88%91&t=m&z=14&output=embed&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="合同会社N-ONEの所在地"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="lg:w-[45%] flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-map-pin-2-fill text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-foreground-400 text-xs tracking-wider mb-1.5">住所</p>
                    <p className="text-foreground-900 font-bold text-base md:text-lg leading-relaxed">
                      〒048-1501
                      <br />
                      北海道虻田郡ニセコ町字曽我
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-background-200 pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-train-fill text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-foreground-400 text-xs tracking-wider mb-1.5">最寄り駅</p>
                    <p className="text-foreground-900 font-bold text-base md:text-lg">
                      JRニセコ駅
                    </p>
                    <p className="text-foreground-500 text-sm mt-1">駅から車で約5分</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
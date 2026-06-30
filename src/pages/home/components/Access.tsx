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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.8974021226127!2d140.65716659999998!3d42.832781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0aaf7a4db8115f%3A0x37f9aaa9b3121bd0!2z44Gh44KH44GE44Gh44KH44GEMg!5e0!3m2!1sja!2sjp!4v1782786151798!5m2!1sja!2sjp"
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
                      〒048-1522
                      <br />
                      北海道虻田郡ニセコ町字曽我397-8
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
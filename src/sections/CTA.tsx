import { motion } from 'motion/react'
import { Check } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-20 md:py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,93,247,0.15)_0%,_transparent_60%)]" />

      <div className="relative max-w-[1024px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[40px] md:text-[52px] font-extrabold text-white leading-[1.15] tracking-[-0.02em]">
            망설이는 사이,<br />
            <span className="text-[#60A5FA]">외국인은 옆&nbsp;매장</span>에<br />
            들어갑니다.
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] text-white/60 leading-[1.7] max-w-md font-medium">
            월 고정비 0원 · 주문당 후불. 잃을 것 없는 제안입니다. 지금&nbsp;신청하고 일주일 안에 첫 외국인 QR 주문을 받으세요.
          </p>

          <div className="flex flex-col gap-4 mt-10">
            {[
              '월 고정비 0원 · 주문당 후불 과금',
              '1~3일 내 세팅 완료',
              '32개국어 자동 번역',
              'ZIVO 앱 매장 노출 포함',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check size={18} className="text-[#1A5DF7] flex-shrink-0" />
                <span className="text-[17px] text-white/70 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'motion/react'

const SPECS = [
  { label: '도입비·월 고정비', value: '0', unit: '원', desc: '설치·기기·스티커·배송 모두 무료' },
  { label: '지원 언어', value: '32', unit: '개국', desc: '영·중·일·베·태·러·인니 외 포함' },
  { label: '약정·해지 수수료', value: '0', unit: '원', desc: '언제든 해지, 스티커 반납 의무 없음' },
  { label: '평균 도입 소요', value: '1~3', unit: '일', desc: '신청 승인 후 설치·등록까지' },
]

export function Stats() {
  return (
    <section className="py-24 sm:py-28 md:py-32 bg-[#0A0F1C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 items-end mb-14 md:mb-20 pb-8 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-bold text-white/40 tracking-[0.3em] uppercase mb-3">
              What you get
            </p>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-white leading-[1.05] tracking-[-0.025em]">
              모든 조건을 투명하게.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[14px] md:text-[15px] text-white/55 leading-[1.7]"
          >
            숨겨진 비용 없고, 약정도 없습니다. 주문이 발생한 건만큼만 수수료가 발생하는 단순한 구조입니다.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-y border-white/10">
          {SPECS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0A0F1C] py-8 md:py-10 md:px-6"
            >
              <p className="text-[12px] md:text-[13px] text-white/50 font-semibold mb-4">
                {s.label}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-[56px] sm:text-[68px] md:text-[80px] font-extrabold text-white tracking-[-0.04em] tabular-nums leading-[0.9]">
                  {s.value}
                </span>
                <span className="text-[20px] md:text-[24px] font-bold text-white/60">
                  {s.unit}
                </span>
              </div>
              <p className="mt-5 text-[13px] text-white/45 font-medium leading-[1.6]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

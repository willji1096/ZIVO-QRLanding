import { motion } from 'motion/react'

const AREAS = [
  '명동', '홍대', '강남', '이태원', '종로', '부산 해운대',
  '제주', '압구정', '성수', '을지로', '삼청동', '연남동',
  '광장시장', '북촌', '서촌', '해운대',
]

export function TrustBar() {
  const doubled = [...AREAS, ...AREAS]

  return (
    <section className="py-10 sm:py-12 bg-[#0F172A] overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-[16px] text-white/40 mb-6 px-6 font-medium"
      >
        전국 <span className="text-white font-bold">500개 이상</span>의 매장에서 사용 중
      </motion.p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-10" />
        <div className="flex animate-scroll-left">
          {doubled.map((name, i) => (
            <span key={`${name}-${i}`} className="flex-shrink-0 mx-4 text-[16px] font-semibold text-white/20 whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

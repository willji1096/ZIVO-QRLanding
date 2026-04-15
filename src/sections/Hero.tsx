import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1C]">
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/5" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 pt-28 pb-20 md:pt-40 md:pb-32 w-full">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-5 py-2.5 bg-[#1A5DF7] rounded-lg text-[16px] font-bold text-white shadow-[0_4px_16px_rgba(26,93,247,0.25)]">
              도입비용 0원 · 전세계 언어 지원
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[44px] sm:text-[62px] md:text-[78px] lg:text-[92px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            <span className="text-[#7FB3FF]">외국인</span> 불러오는
            <br />
            QR 오더 서비스
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[19px] md:text-[23px] text-white/90 leading-[1.6] font-medium mb-10 max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]"
          >
            바로 외국인들에게 우리 매장을 노출시키세요.
            <br className="hidden sm:block" />
            <span className="text-white font-bold">도입비용 0원</span>으로 외국인 매출부터 올립니다.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2.5 h-[60px] pl-10 pr-9 bg-[#1A5DF7] text-white text-[18px] font-bold rounded-xl hover:bg-[#1549D4] active:scale-[0.96] transition-[background-color,transform] duration-200 shadow-[0_8px_28px_rgba(26,93,247,0.45)]"
            >
              도입 신청하기
              <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center h-[60px] px-10 text-white text-[18px] font-bold rounded-xl bg-white/15 backdrop-blur-sm hover:bg-white/25 active:scale-[0.96] transition-[background-color,transform] duration-200"
            >
              서비스 알아보기
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

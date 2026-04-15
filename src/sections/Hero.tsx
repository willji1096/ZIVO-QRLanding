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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative max-w-[1024px] mx-auto px-6 lg:px-12 pt-28 pb-20 md:pt-40 md:pb-32 w-full">
        <motion.div
          className="max-w-3xl"
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
            className="text-[42px] sm:text-[58px] md:text-[72px] lg:text-[84px] font-extrabold text-[#0F172A] leading-[1.05] tracking-[-0.025em] mb-8"
          >
            외국인 불러오는
            <br />
            QR 오더
            <br />
            서비스
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[19px] md:text-[23px] text-[#334155] leading-[1.6] font-medium mb-10 max-w-xl"
          >
            바로 외국인들에게 우리 매장을 노출시키세요.
            <br className="hidden sm:block" />
            도입비용 0원으로 외국인 매출부터 올립니다.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2.5 h-[56px] pl-10 pr-9 bg-[#1A5DF7] text-white text-[18px] font-bold rounded-xl hover:bg-[#1549D4] active:scale-[0.96] transition-[background-color,transform] duration-200 shadow-[0_4px_20px_rgba(26,93,247,0.4)]"
            >
              도입 신청하기
              <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center h-[56px] px-10 text-[#0F172A] text-[18px] font-bold rounded-xl bg-white/80 backdrop-blur-sm border border-[#E2E8F0] hover:bg-white active:scale-[0.96] transition-[background-color,transform] duration-200 shadow-[0_2px_8px_rgba(15,23,42,0.06)]"
            >
              서비스 알아보기
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

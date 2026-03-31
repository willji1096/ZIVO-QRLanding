import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1C]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* 더 강한 오버레이 — 왼쪽에서 오른쪽으로 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 pt-28 pb-20 md:pt-40 md:pb-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2.5 bg-[#1A5DF7] rounded-lg text-[16px] font-bold text-white">
              설치비 0원 · 14개국어 지원
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[42px] sm:text-[58px] md:text-[72px] lg:text-[84px] font-extrabold text-white leading-[1.05] tracking-[-0.025em] mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
          >
            외국인 관광객,
            <br />
            QR 하나로
            <br />
            주문받으세요
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[19px] md:text-[23px] text-white/90 leading-[1.6] font-medium mb-10 max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.2)]"
          >
            테이블에 QR만 붙이면, 외국인 손님이
            <br className="hidden sm:block" />
            모국어로 메뉴를 보고 직접 주문합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2.5 h-[60px] px-10 bg-[#1A5DF7] text-white text-[18px] font-bold rounded-xl hover:bg-[#1549D4] transition-all duration-200 shadow-[0_4px_20px_rgba(26,93,247,0.4)]"
            >
              무료 도입 신청
              <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center h-[60px] px-10 text-white text-[18px] font-bold rounded-xl bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all duration-200"
            >
              서비스 알아보기
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

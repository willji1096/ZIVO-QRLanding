import { motion } from 'motion/react'

const AREAS = [
  '명동', '홍대', '강남', '이태원', '종로',
  '부산 해운대', '제주', '압구정', '성수', '광장시장',
]

export function TrustBar() {
  return (
    <section className="relative bg-[#0A0F1C] border-t border-white/[0.06] overflow-hidden">
      {/* Hero와 시각적 연결되는 상단 페이드 */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(10,15,28,0.6) 0%, transparent 100%)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 py-14 md:py-20">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center">
          {/* 좌: 문구 (Hero 카피 이어받기) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:max-w-[320px]"
          >
            <p className="text-[12px] font-bold text-[#7FB3FF] tracking-[0.2em] uppercase mb-4">
              Proven at 500+ stores
            </p>
            <p className="text-[20px] md:text-[24px] font-extrabold text-white leading-[1.35] tracking-[-0.015em]">
              이미 가고 있는 매장이 500곳.
            </p>
            <p className="mt-2 text-[14px] md:text-[15px] text-white/55 font-medium leading-[1.6]">
              여기까지 읽으셨다면, 아직 기회는 남아 있습니다.
            </p>
          </motion.div>

          {/* 우: 지역 리스트 — 에디토리얼 스타일 */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-6">
              {AREAS.map((name) => (
                <div key={name} className="flex items-baseline gap-2">
                  <span className="text-[10px] font-bold text-white/30 tabular-nums">●</span>
                  <span className="text-[14px] md:text-[15px] font-semibold text-white/75 tracking-[-0.01em]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[12px] text-white/40 font-medium">
              그 외 전국 <span className="text-white/70 font-semibold">470+ 개 지역</span>에서 운영 중
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

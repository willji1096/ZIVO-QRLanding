import { motion } from 'motion/react'

const CARDS = [
  {
    label: '기회 손실',
    title: '메뉴가 안 읽혀,\n문 앞에서 돌아가는 손님',
    desc: '외국인은 메뉴가 모국어로 보이지 않으면 그냥 옆\u00A0가게로 갑니다. 영어 메뉴판 한\u00A0장으로는 점점 부족합니다.',
    stat: '1,630',
    unit: '만 명',
    statDesc: '2024년 한국 방문 외국인 수 (한국관광공사)',
    accent: '#1A5DF7',
  },
  {
    label: '운영 비효율',
    title: '손짓·번역기 주문, 한 테이블에 15분',
    desc: '번역기 돌리는 동안 다른 손님은 기다립니다. 오주문·옵션 누락으로 재조리·클레임까지 이어지고, 바쁜 시간일수록 손실이 커집니다.',
    stat: '15',
    unit: '분',
    statDesc: '번역기 의존 매장의 평균 외국인 테이블 주문 시간',
    accent: '#1A5DF7',
  },
  {
    label: '고정 비용',
    title: '외국어 직원 인건비, 매달 180만 원',
    desc: '외국어 가능 직원을 따로 뽑는다 해도, 외국인만 오는 시간대는 없습니다. 놀리는 시간이 곧 비용이고, 그 비용이 매달 붙습니다.',
    stat: '180',
    unit: '만원',
    statDesc: '2025 최저임금 기준 외국어 직원 1명 월 인건비',
    accent: '#DC2626',
  },
]

export function PainPoints() {
  return (
    <section className="py-24 sm:py-28 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* 에디토리얼 헤더 */}
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 md:gap-16 items-end mb-16 md:mb-24 pb-8 border-b border-[#E2E8F0]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-bold text-[#94A3B8] tracking-[0.3em] uppercase mb-3">
              The Problem
            </p>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.05] tracking-[-0.025em]">
              외국인 손님을 놓치는 순간, 매출도 함께 빠져나갑니다.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:max-w-sm text-[14px] md:text-[15px] text-[#64748B] leading-[1.7]"
          >
            외국인을 받지 못하는 매장은 세 가지 방향에서 새어 나갑니다. 기회 손실, 운영 비효율, 고정 비용.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 md:gap-0 border-t border-l border-[#F1F5F9]">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 md:p-10 border-b border-r border-[#F1F5F9] flex flex-col"
            >
              {/* 카테고리 라벨 */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-[10px] font-bold text-[#94A3B8] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: card.accent }}>
                  {card.label}
                </span>
              </div>

              <h3 className="text-[22px] md:text-[26px] font-extrabold text-[#0F172A] leading-[1.3] mb-5 tracking-[-0.015em] whitespace-pre-line">
                {card.title}
              </h3>
              <p className="text-[15px] text-[#64748B] leading-[1.75] mb-auto">
                {card.desc}
              </p>

              <div className="mt-10 pt-6 border-t border-[#F1F5F9]">
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-[48px] md:text-[60px] font-extrabold tracking-[-0.04em] tabular-nums leading-[0.9]"
                    style={{ color: card.accent }}
                  >
                    {card.stat}
                  </span>
                  <span className="text-[20px] md:text-[22px] font-bold" style={{ color: card.accent }}>
                    {card.unit}
                  </span>
                </div>
                <p className="mt-3 text-[12px] text-[#94A3B8] font-medium leading-[1.55]">
                  {card.statDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

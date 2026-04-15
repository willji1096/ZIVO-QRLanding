import { motion } from 'motion/react'
import { Badge } from '@/components/Badge'

export function PainPoints() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <Badge>사장님의 고민</Badge>
          <h2 className="mt-5 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.02em]">
            외국인 손님을 놓치는 순간,
            <br />
            매출도 함께 빠져나갑니다.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              label: '외국인 매출 기회손실',
              title: '언어 안 통해서\n그냥 돌아가는 손님',
              desc: '메뉴판이 안 읽히면 손님은 문 앞에서 돌아섭니다. 우리 매장이 노출되지 않으면, 외국인 매출은 0원입니다.',
              stat: '230%',
              statDesc: '전세계 언어 메뉴 도입 매장의 외국인 매출 증가율',
              labelColor: 'text-[#1E3A8A]',
              statColor: 'text-[#1E3A8A]',
              descColor: 'text-[#3B82F6]',
            },
            {
              label: '주문 편의',
              title: '손짓발짓 주문,\n한 테이블에 15분',
              desc: '번역기 돌려가며 주문받다 보면 다른 손님은 기다리고, 오주문·빠진 옵션으로 재조리·클레임까지 반복됩니다.',
              stat: '72%',
              statDesc: '외국인 관광객의 주문 시 언어 문제 경험 비율',
              labelColor: 'text-[#1A5DF7]',
              statColor: 'text-[#1A5DF7]',
              descColor: 'text-[#60A5FA]',
            },
            {
              label: '인건비 세이브',
              title: '외국어 직원 채용,\n월 180만원 추가',
              desc: '외국어 가능 직원은 구하기도 어렵고 비용도 부담. QR 오더 하나로 추가 인건비 없이 해결됩니다.',
              stat: '180만+',
              statDesc: '외국어 가능 직원 월 추가 인건비 (세이브 가능액)',
              labelColor: 'text-[#60A5FA]',
              statColor: 'text-[#60A5FA]',
              descColor: 'text-[#93C5FD]',
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] flex flex-col"
            >
              <span className={`text-[14px] font-bold ${card.labelColor} mb-4 tracking-wide`}>{card.label}</span>
              <h3 className="text-[22px] md:text-[24px] font-extrabold text-[#0F172A] leading-[1.25] mb-3 whitespace-pre-line">
                {card.title}
              </h3>
              <p className="text-[16px] text-[#64748B] leading-[1.7] mb-auto">
                {card.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
                <span className={`text-[48px] md:text-[56px] font-extrabold ${card.statColor} tracking-[-0.02em] tabular-nums leading-none block`}>{card.stat}</span>
                <span className={`text-[14px] ${card.descColor} font-medium mt-2 block`}>{card.statDesc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'motion/react'
import { Badge } from '@/components/Badge'

export function PainPoints() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <Badge>사장님의 고민</Badge>
          <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.02em]">
            외국인 손님 올 때마다
            <br />
            이런 일 반복되지 않으셨나요?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              label: '언어 장벽',
              title: '손짓발짓 주문,\n매일 15분 낭비',
              desc: '번역기 돌려가며 주문받다 보면 한 테이블에 15분. 다른 손님은 기다리고, 직원은 지칩니다.',
              stat: '72%',
              statDesc: '외국인 관광객의 주문 시 언어 문제 경험 비율',
              labelColor: 'text-[#1E3A8A]',
              statColor: 'text-[#1E3A8A]',
              descColor: 'text-[#3B82F6]',
            },
            {
              label: '인건비',
              title: '외국어 직원 채용,\n월 180만원 추가',
              desc: '인건비도 부담인데 구하기도 쉽지 않습니다. 매출 대비 비용만 늘어납니다.',
              stat: '180만+',
              statDesc: '외국어 가능 직원 월 추가 인건비',
              labelColor: 'text-[#1A5DF7]',
              statColor: 'text-[#1A5DF7]',
              descColor: 'text-[#60A5FA]',
            },
            {
              label: '주문 오류',
              title: '오주문, 빠진 옵션,\n클레임 반복',
              desc: '소통 문제로 잘못된 주문이 발생하고, 재조리 비용에 손님 불만까지.',
              stat: '45%',
              statDesc: '주문 오류 중 언어 소통 문제 비율',
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

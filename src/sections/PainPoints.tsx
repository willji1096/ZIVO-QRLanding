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
          {/* 카드 1 — 언어 장벽 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] flex flex-col"
          >
            <span className="text-[15px] font-bold text-red-500 mb-4">언어 장벽</span>
            <h3 className="text-[22px] md:text-[24px] font-extrabold text-[#0F172A] leading-[1.25] mb-3">
              손짓발짓으로 주문받는 15분이 매일 반복됩니다
            </h3>
            <p className="text-[16px] text-[#64748B] leading-[1.7] mb-auto">
              영어 메뉴판 하나 없이, 번역기 돌려가며 주문 받다 보면
              한 테이블에 15분. 다른 손님은 기다리고, 직원은 지칩니다.
            </p>
            <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
              <span className="text-[48px] md:text-[56px] font-extrabold text-red-500/80 tracking-[-0.02em] tabular-nums leading-none block">72%</span>
              <span className="text-[14px] text-red-400 font-medium mt-2 block">외국인 관광객의 주문 시 언어 문제 경험 비율</span>
            </div>
          </motion.div>

          {/* 카드 2 — 인건비 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] flex flex-col"
          >
            <span className="text-[15px] font-bold text-amber-600 mb-4">인건비</span>
            <h3 className="text-[22px] md:text-[24px] font-extrabold text-[#0F172A] leading-[1.25] mb-3">
              외국어 직원 한 명 더 쓰자니 부담됩니다
            </h3>
            <p className="text-[16px] text-[#64748B] leading-[1.7] mb-auto">
              월 180만원 이상의 추가 인건비. 그마저도 구하기 쉽지 않습니다.
            </p>
            <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
              <span className="text-[48px] md:text-[56px] font-extrabold text-amber-500/70 tracking-[-0.02em] tabular-nums leading-none block">180만+</span>
              <span className="text-[14px] text-amber-400 font-medium mt-2 block">외국어 가능 직원 월 추가 인건비</span>
            </div>
          </motion.div>

          {/* 카드 3 — 주문 오류 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] flex flex-col"
          >
            <span className="text-[15px] font-bold text-violet-600 mb-4">주문 오류</span>
            <h3 className="text-[22px] md:text-[24px] font-extrabold text-[#0F172A] leading-[1.25] mb-3">
              잘못된 주문, 빠진 옵션, 클레임까지
            </h3>
            <p className="text-[16px] text-[#64748B] leading-[1.7] mb-auto">
              소통 문제로 발생하는 오주문. 재조리 비용에 손님 불만까지 이어집니다.
            </p>
            <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
              <span className="text-[48px] md:text-[56px] font-extrabold text-violet-500/70 tracking-[-0.02em] tabular-nums leading-none block">45%</span>
              <span className="text-[14px] text-violet-400 font-medium mt-2 block">주문 오류 중 언어 소통 문제 비율</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'motion/react'
import { Badge } from '@/components/Badge'

export function PainPoints() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-white">
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

        <div className="grid md:grid-cols-12 gap-5 md:gap-6">
          {/* 큰 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 p-8 md:p-12 rounded-3xl bg-[#FEF2F2]"
          >
            <span className="text-[15px] font-bold text-red-500 mb-4 block">가장 큰 문제</span>
            <h3 className="text-[24px] md:text-[30px] font-extrabold text-[#0F172A] leading-[1.2] mb-4">
              손짓발짓으로 주문받는
              <br />
              15분이 매일 반복됩니다
            </h3>
            <p className="text-[16px] md:text-[18px] text-[#64748B] leading-[1.7] max-w-md mb-8">
              영어 메뉴판 하나 없이, 번역기 돌려가며 주문 받다 보면
              한 테이블에 15분. 다른 손님은 기다리고, 직원은 지칩니다.
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-[52px] md:text-[64px] font-extrabold text-red-500/80 tracking-tight tabular-nums leading-none">72%</span>
              <span className="text-[16px] text-red-400 font-medium">의 외국인 관광객이<br />주문 시 언어 문제 경험</span>
            </div>
          </motion.div>

          {/* 작은 카드 2개 */}
          <div className="md:col-span-5 flex flex-col gap-5 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 md:p-9 rounded-3xl bg-[#FFFBEB] flex-1"
            >
              <span className="text-[15px] font-bold text-amber-600 mb-3 block">인건비</span>
              <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#0F172A] leading-[1.25] mb-3">
                외국어 직원 한 명 더 쓰자니
              </h3>
              <p className="text-[16px] text-[#64748B] leading-[1.6] mb-5">
                월 180만원 이상의 추가 인건비. 그마저도 구하기 쉽지 않습니다.
              </p>
              <span className="text-[36px] md:text-[42px] font-extrabold text-amber-500/70 tracking-tight tabular-nums leading-none">180만+<span className="text-[16px] font-bold text-amber-400"> /월</span></span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 md:p-9 rounded-3xl bg-[#F5F3FF] flex-1"
            >
              <span className="text-[15px] font-bold text-violet-600 mb-3 block">주문 오류</span>
              <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#0F172A] leading-[1.25] mb-3">
                잘못된 주문, 빠진 옵션, 클레임
              </h3>
              <p className="text-[16px] text-[#64748B] leading-[1.6] mb-5">
                소통 문제로 발생하는 오주문. 재조리 비용에 손님 불만까지.
              </p>
              <span className="text-[36px] md:text-[42px] font-extrabold text-violet-500/70 tracking-tight tabular-nums leading-none">45%<span className="text-[16px] font-bold text-violet-400"> 가 언어 문제</span></span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

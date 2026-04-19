import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { QRCardStack } from '@/components/QRCardStack'

const STEPS = [
  {
    num: '1',
    title: '도입 신청',
    desc: '아래 신청 폼에 매장명과 연락처만 남기세요. 별도 서류·방문 없이 1~3 영업일 내 담당자가 직접 연락드려 승인을 도와드립니다.',
    detail: '필요 정보: 매장명 · 대표자 연락처 · 업종',
    time: '소요: 1~3 영업일',
  },
  {
    num: '2',
    title: 'QR 스티커 수령 · 메뉴 등록',
    desc: '승인이 완료되면 매장 브랜드와 맞는 QR 스티커를 제작·배송해드립니다. 동시에 사장님이 한국어로 메뉴를 등록하시면 32개국어로 자동 번역됩니다.',
    detail: 'QR 스티커 디자인·제작·배송 모두 포함 (추가 비용 없음)',
    time: '소요: 2~3일',
  },
  {
    num: '3',
    title: '테이블에 붙이면 끝',
    desc: '받으신 QR 스티커를 테이블에 붙이는 순간 매장은 글로벌이 됩니다. 외국인 손님은 모국어로 메뉴를 보고, 직접 주문하고, 결제까지 혼자 마칩니다.',
    detail: '별도 기기·POS 교체 불필요. 기존 스마트폰·PC로 관리',
    time: '완료 즉시 운영 가능',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 md:py-28 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 md:mb-20"
            >
              <p className="text-[11px] font-bold text-[#94A3B8] tracking-[0.3em] uppercase mb-3">
                How it works
              </p>
              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.05] tracking-[-0.025em]">
                3단계, 일주일이면 매장이 글로벌이 됩니다.
              </h2>
              <p className="mt-6 text-[15px] md:text-[17px] text-[#64748B] font-medium leading-[1.7] max-w-md">
                복잡한 설치 과정 없이, 신청부터 운영까지 평균 1주일.
              </p>
            </motion.div>

            <div className="flex flex-col">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex gap-6 md:gap-10 ${i < STEPS.length - 1 ? 'pb-12 md:pb-14' : ''}`}
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1A5DF7] flex items-center justify-center shadow-[0_8px_20px_rgba(26,93,247,0.3)]">
                      <span className="text-[24px] md:text-[28px] font-extrabold text-white">{step.num}</span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-[2px] flex-1 mt-4 bg-gradient-to-b from-[#1A5DF7]/30 via-[#1A5DF7]/10 to-transparent" />
                    )}
                  </div>
                  <div className="flex-1 pt-1 pb-2">
                    <h3 className="text-[22px] md:text-[26px] font-extrabold text-[#0F172A] leading-[1.25] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[16px] md:text-[17px] text-[#475569] leading-[1.7] mb-4 max-w-xl">
                      {step.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                      <span className="text-[13px] text-[#1A5DF7] font-semibold">{step.detail}</span>
                      <span className="hidden sm:block w-1 h-1 rounded-full bg-[#CBD5E1]" />
                      <span className="text-[13px] text-[#94A3B8] font-medium">{step.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 md:mt-16"
            >
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 h-[56px] pl-8 pr-7 bg-[#1A5DF7] text-white text-[17px] font-bold rounded-xl hover:bg-[#1549D4] active:scale-[0.97] transition-[background-color,transform] duration-200 ease-out shadow-[0_10px_28px_rgba(26,93,247,0.35)]"
              >
                지금 바로 신청하기
                <ArrowRight size={19} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>

          {/* Right — QR 카드 스택 */}
          <div className="flex items-center justify-center">
            <QRCardStack />
          </div>
        </div>
      </div>
    </section>
  )
}

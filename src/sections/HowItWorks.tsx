import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/Badge'

const STEPS = [
  {
    num: '1',
    title: '도입 신청',
    desc: '아래 신청 폼에서 매장명과 연락처만 입력하시면 됩니다. 별도 서류나 복잡한 절차 없이, 1~3 영업일 이내에 담당자가 직접 연락드려 승인을 도와드립니다.',
    detail: '필요 정보: 매장명, 대표자 연락처, 업종',
    time: '소요 시간: 1~3 영업일',
  },
  {
    num: '2',
    title: 'QR 스티커 수령 & 메뉴 등록',
    desc: '승인이 완료되면 QR 스티커를 배송해드립니다. 동시에 사장님이 한국어로 메뉴를 등록하시면, 17개 언어로 자동 번역이 시작됩니다.',
    detail: 'QR 스티커 디자인·제작·배송 포함',
    time: '소요 시간: 2~3일',
  },
  {
    num: '3',
    title: '테이블에 붙이고 바로 시작',
    desc: '받으신 QR 스티커를 테이블에 붙이면 끝입니다. 그 순간부터 외국인 손님이 스마트폰으로 QR을 스캔하고, 모국어로 메뉴를 보고, 직접 주문할 수 있습니다.',
    detail: '별도 기기 구매 불필요, 기존 스마트폰으로 관리',
    time: '세팅 완료 즉시 운영 가능',
  },
]

function QRCardStack() {
  return (
    <div className="relative w-[280px] h-[360px] hidden lg:block" style={{ perspective: '800px' }}>
      {/* 뒤 카드 */}
      <motion.div
        initial={{ opacity: 0, rotateY: -15 }}
        whileInView={{ opacity: 0.4, rotateY: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-6 left-6 w-[220px] h-[300px] rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#1A5DF7] shadow-[0_8px_32px_rgba(26,93,247,0.2)]"
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* 중간 카드 */}
      <motion.div
        initial={{ opacity: 0, rotateY: -10 }}
        whileInView={{ opacity: 0.7, rotateY: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="absolute top-3 left-3 w-[220px] h-[300px] rounded-2xl bg-gradient-to-br from-[#1A5DF7] to-[#3B82F6] shadow-[0_8px_32px_rgba(26,93,247,0.25)]"
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* 앞 카드 — QR 스티커 */}
      <motion.div
        initial={{ opacity: 0, rotateY: -5 }}
        whileInView={{ opacity: 1, rotateY: 2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-[220px] h-[300px] rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-6 flex flex-col items-center justify-between"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 상단 */}
        <div className="text-center">
          <div className="w-8 h-8 rounded-lg bg-[#1A5DF7] flex items-center justify-center mx-auto mb-2">
            <span className="text-white text-[11px] font-extrabold">Z</span>
          </div>
          <span className="text-[11px] font-bold text-[#0F172A]">ZIVO QR Order</span>
          <span className="text-[9px] text-[#94A3B8] block">The Timber House</span>
        </div>

        {/* QR 코드 */}
        <div className="w-[120px] h-[120px] bg-[#0F172A] rounded-xl p-2.5 my-3">
          <div className="w-full h-full grid grid-cols-7 grid-rows-7 gap-[2px]">
            {Array.from({ length: 49 }).map((_, i) => {
              const row = Math.floor(i / 7)
              const col = i % 7
              const isCorner = (row < 3 && col < 3) || (row < 3 && col > 3) || (row > 3 && col < 3)
              const isFilled = isCorner || Math.random() > 0.45
              return (
                <div
                  key={i}
                  className={`rounded-[1px] ${isFilled ? 'bg-white' : 'bg-white/20'}`}
                />
              )
            })}
          </div>
        </div>

        {/* 하단 */}
        <div className="text-center">
          <span className="text-[18px] font-extrabold text-[#0F172A] block">T17</span>
          <span className="text-[10px] text-[#94A3B8]">QR을 스캔하여 주문하세요</span>
        </div>
      </motion.div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 md:py-40 bg-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-20">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 md:mb-20"
            >
              <Badge>도입 과정</Badge>
              <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-white leading-[1.1] tracking-[-0.02em]">
                3단계면 충분합니다
              </h2>
              <p className="mt-4 text-[18px] md:text-[20px] text-white/40 font-medium">
                복잡한 설치 과정 없이, 신청부터 운영까지 일주일이면 됩니다.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="flex flex-col">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex gap-6 md:gap-10 ${i < STEPS.length - 1 ? 'pb-12 md:pb-16' : ''}`}
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1A5DF7] flex items-center justify-center">
                      <span className="text-[24px] md:text-[28px] font-extrabold text-white">{step.num}</span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-[2px] flex-1 mt-4 bg-gradient-to-b from-[#1A5DF7]/40 to-transparent" />
                    )}
                  </div>

                  <div className="flex-1 pt-1 pb-2">
                    <h3 className="text-[24px] md:text-[28px] font-extrabold text-white leading-[1.2] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[17px] md:text-[18px] text-white/60 leading-[1.7] mb-5 max-w-xl">
                      {step.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                      <span className="text-[14px] text-[#60A5FA] font-semibold">
                        {step.detail}
                      </span>
                      <span className="text-[14px] text-white/30 font-medium">
                        {step.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-14 md:mt-20"
            >
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2.5 h-[60px] pl-10 pr-9 bg-[#1A5DF7] text-white text-[18px] font-bold rounded-xl hover:bg-[#1549D4] active:scale-[0.96] transition-[background-color,transform] duration-200 ease-out shadow-[0_4px_20px_rgba(26,93,247,0.35)]"
              >
                지금 바로 신청하기
                <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>

          {/* Right: 3D QR Card Stack */}
          <div className="flex items-center justify-center">
            <QRCardStack />
          </div>
        </div>
      </div>
    </section>
  )
}

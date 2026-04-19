import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: '정말 도입 비용이 0원인가요?',
    a: '네. 초기 설치비·기기비·셋업비·QR 스티커 제작비·배송비 모두 0원입니다. 별도의 태블릿을 구매하실 필요도 없고, 기존 스마트폰이나 PC로 관리할 수 있습니다.',
  },
  {
    q: '그럼 수수료는 어떻게 되나요?',
    a: '월 고정비 없이 주문당 소정의 수수료만 발생합니다. 주문이 없는 달은 비용도 0원입니다. 구체적인 수수료율은 업종·규모에 따라 다르므로, 도입 상담 시 정확히 안내드립니다.',
  },
  {
    q: '외국어를 전혀 몰라도 운영할 수 있나요?',
    a: '가능합니다. 한국어로만 메뉴를 등록하시면 ZIVO가 32개국어(영어·중국어·일본어·베트남어·태국어·러시아어·인도네시아어 등)로 자동 번역합니다. 주문도 한국어로 들어오기 때문에 외국어 지식이 필요 없습니다.',
  },
  {
    q: '기존 POS와 연동이 되나요?',
    a: '네, 국내 주요 POS 시스템과 연동을 지원합니다. POS를 바꾸지 않고 ZIVO QR만 추가로 붙이는 형태로 사용하실 수 있습니다.',
  },
  {
    q: 'ZIVO 앱에도 매장이 노출되나요?',
    a: '네. ZIVO는 외국인 관광객을 위한 K-관광 플랫폼입니다. QR 파트너가 되시면 매장이 ZIVO 앱 지도·검색에 자동 노출되어, QR 스티커 밖에서도 외국인 손님이 매장을 찾아오는 유입 경로가 됩니다.',
  },
  {
    q: '언제든 해지할 수 있나요?',
    a: '네, 약정 기간 없이 언제든 해지 가능합니다. 해지 수수료도 없으며, 스티커 반납 의무도 없습니다.',
  },
  {
    q: '도입까지 얼마나 걸리나요?',
    a: '신청 후 평균 1~3 영업일 내 승인, 메뉴 등록과 QR 스티커 제작·배송까지 합치면 총 3~5일입니다. 바쁜 시즌에도 일주일 안에는 오픈하실 수 있습니다.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-24 md:py-28 bg-white">
      <div className="max-w-[820px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-[11px] font-bold text-[#94A3B8] tracking-[0.3em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#0F172A] leading-[0.98] tracking-[-0.025em]">
            궁금한 점, 먼저 풀어드립니다.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-white rounded-xl shadow-[0_0_0_1px_rgba(15,23,42,0.05)] hover:shadow-[0_0_0_1px_rgba(15,23,42,0.1)] transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left group"
              >
                <span className="text-[16px] md:text-[18px] font-bold text-[#0F172A] pr-4 group-hover:text-[#1A5DF7] transition-colors">
                  <span className="text-[#1A5DF7] mr-2">Q.</span>
                  {item.q}
                </span>
                {openIndex === i ? (
                  <Minus size={20} className="text-[#1A5DF7] flex-shrink-0" />
                ) : (
                  <Plus size={20} className="text-[#94A3B8] flex-shrink-0 group-hover:text-[#1A5DF7] transition-colors" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 md:px-8 pb-6 text-[15px] md:text-[16px] text-[#475569] leading-[1.75]">
                      <span className="text-[#1A5DF7] font-bold mr-2">A.</span>
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

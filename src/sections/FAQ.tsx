import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { Badge } from '@/components/Badge'

const FAQ_ITEMS = [
  { q: '정말 설치비가 0원인가요?', a: '네, 설치비·기기비·셋업비 모두 0원입니다. QR 스티커도 제작하여 배송해드립니다. 별도의 태블릿이나 기기 구매 없이, 기존 스마트폰이나 PC로 관리할 수 있습니다.' },
  { q: '수수료는 어떻게 되나요?', a: '주문 건당 소정의 수수료가 발생합니다. 월 고정비는 없으며, 주문이 없으면 비용도 없습니다. 자세한 수수료 체계는 도입 상담 시 안내드립니다.' },
  { q: '기존 POS와 연동이 되나요?', a: '네, 국내 주요 POS 시스템과 연동을 지원합니다. POS 변경 없이 ZIVO QR을 추가하여 사용하실 수 있습니다.' },
  { q: '외국어를 몰라도 사용할 수 있나요?', a: '물론입니다. 한국어로만 메뉴를 등록하시면 됩니다. ZIVO가 17개 언어로 자동 번역합니다. 주문도 한국어로 들어오기 때문에 외국어를 전혀 모르셔도 됩니다.' },
  { q: '언제든 해지할 수 있나요?', a: '네, 약정 기간 없이 언제든 해지 가능합니다. 해지 수수료도 없습니다.' },
  { q: '도입까지 얼마나 걸리나요?', a: '신청 후 평균 1~3 영업일 이내 승인 및 세팅 완료. 메뉴 등록과 QR 스티커 제작 포함 약 3~5일.' },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <Badge>자주 묻는 질문</Badge>
          <h2 className="mt-5 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.02em]">
            궁금한 점이 있으신가요?
          </h2>
        </motion.div>

        <div className="flex flex-col gap-1">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-white rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.03)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left group"
              >
                <span className="text-[17px] md:text-[18px] font-bold text-[#0F172A] pr-4 group-hover:text-[#1A5DF7] transition-colors">
                  {item.q}
                </span>
                {openIndex === i ? (
                  <Minus size={20} className="text-[#1A5DF7] flex-shrink-0" />
                ) : (
                  <Plus size={20} className="text-[#94A3B8] flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <p className="px-6 md:px-8 pb-6 text-[16px] text-[#64748B] leading-[1.7]">{item.a}</p>
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

import { motion } from 'motion/react'
import { Badge } from '@/components/Badge'

const REVIEWS = [
  { name: '김민수 대표', loc: '명동 한정식', text: '일본 관광객이 많은데, 도입 후 주문 시간이 절반으로 줄었어요. 직원들도 더 이상 손짓발짓 안 해도 됩니다.', metric: '주문 시간 50% 단축' },
  { name: '박서연 사장님', loc: '홍대 카페', text: '외국인 비율이 40%인데, 영어 메뉴판 만들 필요 없이 QR 하나로 해결. 14개 언어라니.', metric: '메뉴 번역 비용 0원' },
  { name: '이준혁 점장', loc: '이태원 BBQ', text: '오주문이 거의 사라졌어요. 예전엔 매일 1-2건씩 잘못된 주문이 있었는데, 이제 손님이 직접 골라서.', metric: '주문 오류 95% 감소' },
  { name: '최수진 대표', loc: '강남 스시', text: '설치비 무료라서 반신반의했는데, 진짜. QR 스티커도 예쁘게 만들어주시고 세팅도 하루 만에.', metric: '설치비·기기비 0원' },
  { name: '장우진 사장님', loc: '해운대 해산물', text: '중국 관광객 결제 문제도 해결. 다양한 결제 수단 덕분에 외국인 매출이 눈에 띄게 늘었습니다.', metric: '외국인 매출 180% 증가' },
  { name: '한지은 점장', loc: '삼청동 디저트', text: '대시보드에서 어떤 메뉴가 인기인지 바로 보여요. 외국인들이 좋아하는 메뉴를 파악해서 전략적으로 운영.', metric: '데이터 기반 메뉴 전략' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 md:py-40 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-20"
        >
          <div>
            <Badge>도입 후기</Badge>
            <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.02em]">
              사장님들의 실제 후기
            </h2>
          </div>
          <p className="text-[17px] text-[#64748B] max-w-sm md:text-right font-medium">
            ZIVO QR을 먼저 도입한 사장님들이 직접 말씀해주셨습니다.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="break-inside-avoid mb-5 p-7 rounded-2xl border border-[#E2E8F0] bg-[#FAFAFA]"
            >
              <p className="text-[16px] text-[#334155] leading-[1.7] mb-5 font-medium">"{review.text}"</p>
              <span className="inline-block text-[14px] font-bold text-[#1A5DF7] bg-[#EFF6FF] px-3 py-1.5 rounded-lg mb-5">
                {review.metric}
              </span>
              <div className="flex items-center gap-3 pt-5 border-t border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-full bg-[#E2E8F0] flex items-center justify-center">
                  <span className="text-[13px] font-bold text-[#64748B]">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <span className="text-[15px] font-bold text-[#0F172A] block">{review.name}</span>
                  <span className="text-[13px] text-[#94A3B8] font-medium">{review.loc}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

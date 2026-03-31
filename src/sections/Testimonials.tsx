import { motion } from 'motion/react'
import { Badge } from '@/components/Badge'

const REVIEWS = [
  { name: '김민수 대표', loc: '명동 한정식', text: '일본 관광객이 많은 매장인데, 도입하고 나서 주문 시간이 절반으로 줄었어요. 직원들이 손짓발짓 안 해도 되니까 다른 일에 집중할 수 있게 됐습니다.', metric: '주문 시간 50% 단축' },
  { name: '박서연 사장님', loc: '홍대 카페', text: '외국인 손님 비율이 40%인데, 따로 영어 메뉴판을 만들 필요가 없어졌어요. 한국어로만 등록하면 알아서 번역되니까 메뉴 바꿀 때도 부담이 없습니다.', metric: '번역 비용 0원' },
  { name: '이준혁 점장', loc: '이태원 BBQ', text: '예전에는 매일 1~2건씩 잘못된 주문이 있었는데, 이제 손님이 직접 화면에서 골라서 주문하니까 오주문이 거의 사라졌어요.', metric: '주문 오류 95% 감소' },
  { name: '최수진 대표', loc: '강남 스시', text: '초기 비용이 없다고 해서 처음엔 의심했는데, 정말 기기도 스티커도 다 제공해주시고 세팅도 하루 만에 끝났어요.', metric: '도입 1일 완료' },
  { name: '장우진 사장님', loc: '해운대 해산물', text: '중국인 손님 결제 문제가 항상 골치였는데, 다양한 결제 수단 덕분에 매끄럽게 해결됐어요. 외국인 매출이 확실히 늘었습니다.', metric: '외국인 매출 180% 증가' },
  { name: '한지은 점장', loc: '삼청동 디저트', text: '대시보드에서 어떤 메뉴가 외국인한테 인기인지 바로 확인돼요. 데이터 보고 시즌 메뉴를 바꿨더니 주문량이 눈에 띄게 올랐습니다.', metric: '인기 메뉴 주문량 40% 증가' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 md:py-40 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <Badge>도입 후기</Badge>
          <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.02em]">
            사장님들의 실제 후기
          </h2>
          <p className="mt-4 text-[18px] md:text-[20px] text-[#64748B] font-medium">
            ZIVO QR을 먼저 도입한 사장님들의 이야기입니다.
          </p>
        </motion.div>

        {/* 2행 3열 그리드 — masonry 대신 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-7 rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)]"
            >
              {/* Metric — 가장 먼저 눈에 */}
              <span className="inline-block text-[14px] font-bold text-[#1A5DF7] bg-[#EFF6FF] px-3 py-1.5 rounded-lg mb-5">
                {review.metric}
              </span>

              <p className="text-[16px] text-[#334155] leading-[1.7] mb-6 font-medium">"{review.text}"</p>

              <div className="flex items-center gap-3 pt-5 border-t border-[#F1F5F9]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A5DF7] to-[#60A5FA] flex items-center justify-center">
                  <span className="text-[13px] font-bold text-white">{review.name.charAt(0)}</span>
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

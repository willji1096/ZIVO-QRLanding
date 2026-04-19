import { motion } from 'motion/react'

const REVIEWS = [
  {
    name: '김민수 대표',
    loc: '명동 한정식',
    photo: '/images/owner-1.jpg',
    text: '일본·중국 관광객이 많은 매장인데, QR 도입하고 주문 시간이 체감상 절반 이하로 줄었습니다. 직원들이 손짓발짓 안 해도 되니 홀 서비스에 집중할 수 있어요.',
    metric: '주문 처리 시간 단축',
  },
  {
    name: '박서연 사장',
    loc: '홍대 카페',
    photo: '/images/owner-2.jpg',
    text: '외국인 손님 비중이 40%인데, 영어·일어 메뉴판을 따로 만들 필요가 없어졌습니다. 메뉴를 바꿔도 32개국어가 알아서 따라옵니다.',
    metric: '번역 운영비 0원',
  },
  {
    name: '이준혁 점장',
    loc: '이태원 BBQ',
    photo: '/images/owner-3.jpg',
    text: '예전에는 하루 1~2건씩 오주문이 있었는데, 손님이 화면에서 직접 고르니 거의 사라졌어요. 클레임이 줄어드니 홀 분위기도 좋아집니다.',
    metric: '주문 오류 감소',
  },
  {
    name: '최수진 대표',
    loc: '강남 스시',
    photo: '/images/owner-4.jpg',
    text: '초기 비용 0원이라고 해서 의심했는데, 기기도 스티커도 다 제공해주시고 세팅도 며칠 만에 끝났어요. 주문이 있어야 수수료가 나가니 부담도 없습니다.',
    metric: '도입 3일 완료',
  },
  {
    name: '장우진 사장',
    loc: '해운대 해산물',
    photo: '/images/owner-5.jpg',
    text: '중국인 손님 결제가 항상 골치였는데 결제가 매끄러워졌고, ZIVO 앱에 매장이 노출되면서 처음 오시는 외국인 손님이 눈에 띄게 늘었습니다.',
    metric: '외국인 매출 상승',
  },
  {
    name: '한지은 점장',
    loc: '삼청동 디저트',
    photo: '/images/owner-6.jpg',
    text: '어떤 메뉴가 외국인에게 인기인지 대시보드로 확인하고, 그걸로 시즌 메뉴를 기획해요. 데이터 기반 운영이 처음 가능해졌습니다.',
    metric: '인기 메뉴 분석',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 text-center"
        >
          <p className="text-[11px] font-bold text-[#94A3B8] tracking-[0.3em] uppercase mb-3">
            Stories from Owners
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.05] tracking-[-0.025em]">
            먼저 도입한 사장님들의 솔직한 이야기.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.05),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_14px_36px_rgba(15,23,42,0.08)] transition-shadow duration-300 flex flex-col"
            >
              {/* 사장님 사진 */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#F1F5F9]">
                <img
                  src={review.photo}
                  alt={`${review.name} - ${review.loc}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                  loading="lazy"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                {/* metric 배지 — 사진 위 좌상단 */}
                <span className="absolute top-3 left-3 inline-block text-[12px] font-bold text-[#1A5DF7] bg-white px-2.5 py-1 rounded-lg shadow-[0_4px_12px_rgba(15,23,42,0.15)]">
                  {review.metric}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-[15px] md:text-[16px] text-[#334155] leading-[1.75] mb-5 font-medium">
                  "{review.text}"
                </p>
                <div className="mt-auto pt-4 border-t border-[#F1F5F9]">
                  <span className="text-[15px] font-bold text-[#0F172A] block leading-tight">{review.name}</span>
                  <span className="text-[13px] text-[#94A3B8] font-medium">{review.loc}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-[12px] text-[#94A3B8]">
          * 실제 도입 매장 인터뷰 요약, 성명은 대표 예시
        </p>
      </div>
    </section>
  )
}

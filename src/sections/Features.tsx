import { motion } from 'motion/react'
import {
  Globe, QrCode, Bell, Settings, BarChart3,
  Star, Ticket, CreditCard,
} from 'lucide-react'
import { Badge } from '@/components/Badge'

const FEATURES_LEFT = [
  { icon: Globe, title: '다국어 메뉴', desc: '한국어로 메뉴를 한 번만 등록하면 영어, 일본어, 중국어 등 17개 언어로 자동 번역됩니다. 사진, 설명, 옵션까지 완벽하게.' },
  { icon: QrCode, title: 'QR 테이블 주문', desc: '손님이 테이블의 QR을 스캔하면 앱 설치 없이 바로 웹 메뉴가 열립니다. 회원가입도 필요 없어서 누구나 즉시 주문 가능.' },
  { icon: Bell, title: '실시간 주문 알림', desc: '새로운 주문이 들어오면 사장님 기기에 즉시 알림이 갑니다. 바쁜 시간대에도 놓치는 주문 없이 빠르게 처리하세요.' },
  { icon: Settings, title: '메뉴 관리', desc: '메뉴 추가, 가격 수정, 품절 처리를 실시간으로 반영할 수 있습니다. 사진 교체와 옵션 변경도 즉시 가능.' },
]

const FEATURES_RIGHT = [
  { icon: BarChart3, title: '매출 분석', desc: '일별, 월별 매출 추이와 인기 메뉴 순위를 한눈에 파악하세요. 시간대별 주문 패턴까지 분석해 운영 전략을 세울 수 있습니다.' },
  { icon: Star, title: '리뷰 관리', desc: '고객이 남긴 리뷰를 확인하고 바로 답변할 수 있습니다. 외국인 리뷰도 자동 번역되어 한국어로 편하게 읽을 수 있어요.' },
  { icon: Ticket, title: '쿠폰·프로모션', desc: '할인 쿠폰이나 이벤트 메뉴를 설정해 재방문을 유도하세요. 외국인 관광객 대상 프로모션도 간편하게 만들 수 있습니다.' },
  { icon: CreditCard, title: '결제 연동', desc: '신용카드, 간편결제 등 다양한 결제 수단을 지원합니다. 외국인 카드 결제도 문제없이 처리되어 매출 기회를 놓치지 않습니다.' },
]

function FeatureItem({ icon: Icon, title, desc, delay }: { icon: typeof Globe; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex gap-5 group"
    >
      <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A5DF7] transition-[background-color] duration-200">
        <Icon size={22} className="text-[#1A5DF7] group-hover:text-white transition-[color] duration-200" />
      </div>
      <div className="flex-1">
        <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">{title}</h3>
        <p className="text-[15px] text-[#64748B] leading-[1.7]">{desc}</p>
      </div>
    </motion.div>
  )
}

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 md:py-40 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <Badge>주요 기능</Badge>
          <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.02em]">
            매장 운영에 필요한 모든 것
          </h2>
          <p className="mt-4 text-[18px] md:text-[20px] text-[#64748B] font-medium">
            QR 주문부터 매출 분석까지. 하나의 플랫폼.
          </p>
        </motion.div>

        {/* 2열 리스트 — 카드 그리드 대신 */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
          <div className="flex flex-col gap-10 md:gap-12">
            {FEATURES_LEFT.map((f, i) => (
              <FeatureItem key={f.title} {...f} delay={i * 0.06} />
            ))}
          </div>
          <div className="flex flex-col gap-10 md:gap-12">
            {FEATURES_RIGHT.map((f, i) => (
              <FeatureItem key={f.title} {...f} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

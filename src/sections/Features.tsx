import { motion } from 'motion/react'
import {
  Globe, QrCode, Bell, Settings, BarChart3,
  Star, Ticket, CreditCard,
} from 'lucide-react'
import { Badge } from '@/components/Badge'

const FEATURES = [
  { icon: Globe, title: '다국어 메뉴', desc: '한국어로 메뉴를 한 번만 등록하면 영어, 일본어, 중국어 등 14개 언어로 자동 번역됩니다. 사진, 설명, 옵션까지 완벽하게.' },
  { icon: QrCode, title: 'QR 테이블 주문', desc: '손님이 테이블의 QR을 스캔하면 앱 설치 없이 바로 웹 메뉴가 열립니다. 회원가입도 필요 없어서 누구나 즉시 주문 가능.' },
  { icon: Bell, title: '실시간 주문 알림', desc: '새로운 주문이 들어오면 사장님 기기에 즉시 알림이 갑니다. 바쁜 시간대에도 놓치는 주문 없이 빠르게 처리하세요.' },
  { icon: Settings, title: '메뉴 관리', desc: '메뉴 추가, 가격 수정, 품절 처리를 실시간으로 반영할 수 있습니다. 사진 교체와 옵션 변경도 즉시 가능.' },
  { icon: BarChart3, title: '매출 분석', desc: '일별, 월별 매출 추이와 인기 메뉴 순위를 한눈에 파악하세요. 시간대별 주문 패턴까지 분석해 운영 전략을 세울 수 있습니다.' },
  { icon: Star, title: '리뷰 관리', desc: '고객이 남긴 리뷰를 확인하고 바로 답변할 수 있습니다. 외국인 리뷰도 자동 번역되어 한국어로 편하게 읽을 수 있어요.' },
  { icon: Ticket, title: '쿠폰·프로모션', desc: '할인 쿠폰이나 이벤트 메뉴를 설정해 재방문을 유도하세요. 외국인 관광객 대상 프로모션도 간편하게 만들 수 있습니다.' },
  { icon: CreditCard, title: '결제 연동', desc: '신용카드, 간편결제 등 다양한 결제 수단을 지원합니다. 외국인 카드 결제도 문제없이 처리되어 매출 기회를 놓치지 않습니다.' },
]

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-6 md:p-7 rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06),0_2px_4px_0_rgba(0,0,0,0.04)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.08),0_8px_24px_0_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-[box-shadow,transform] duration-200 ease-out"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-4 group-hover:bg-[#1A5DF7] transition-[background-color] duration-200">
                <feat.icon size={22} className="text-[#1A5DF7] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-[17px] font-bold text-[#0F172A] mb-2">{feat.title}</h3>
              <p className="text-[15px] text-[#64748B] leading-[1.6]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

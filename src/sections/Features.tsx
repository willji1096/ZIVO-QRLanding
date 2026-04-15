import { motion } from 'motion/react'
import {
  Globe, Smartphone, Bell, Settings, BarChart3,
  Star, LayoutGrid, CreditCard,
} from 'lucide-react'
import { Badge } from '@/components/Badge'

const FEATURES = [
  { icon: Globe, title: '전세계 언어 자동 번역', desc: '한국어로 메뉴를 한 번만 등록하면 전세계 언어로 자동 번역됩니다. 사진, 설명, 옵션까지 완벽하게.' },
  { icon: Smartphone, title: '웹 기반, 앱 설치 불필요', desc: '손님 스마트폰에 아무것도 설치할 필요 없습니다. QR 스캔만으로 바로 메뉴가 열립니다.' },
  { icon: Bell, title: '실시간 주문 알림', desc: '새로운 주문이 들어오면 즉시 알림. 바쁜 시간대에도 놓치는 주문 없이 빠르게 처리하세요.' },
  { icon: Settings, title: '메뉴 관리', desc: '메뉴 추가, 가격 수정, 품절 처리를 실시간으로 반영. 사진 교체와 옵션 변경도 즉시 가능.' },
  { icon: BarChart3, title: '매출 분석', desc: '일별·월별 매출 추이와 인기 메뉴 순위를 한눈에. 시간대별 주문 패턴까지 분석해 운영 전략을 세울 수 있습니다.' },
  { icon: Star, title: '리뷰 관리', desc: '고객이 남긴 리뷰를 확인하고 바로 답변. 외국인 리뷰도 자동 번역되어 한국어로 편하게 읽을 수 있어요.' },
  { icon: LayoutGrid, title: '테이블 관리', desc: '테이블별 QR 코드 매핑, 동시 다건 주문 처리, 테이블 상태 실시간 확인까지 한 화면에서.' },
  { icon: CreditCard, title: '결제 연동', desc: '신용카드, 간편결제 등 다양한 결제 수단 지원. 외국인 카드 결제도 문제없이 처리됩니다.' },
]

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <Badge>주요 기능</Badge>
          <h2 className="mt-5 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.02em]">
            매장 운영에 필요한 모든 것
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-[#64748B] font-medium">
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
              className="group p-6 md:p-7 rounded-2xl bg-[#F8FAFC] shadow-[0_0_0_1px_rgba(0,0,0,0.03)] hover:bg-white hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-[box-shadow,background-color,transform] duration-200 ease-out"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-4 group-hover:bg-[#1A5DF7] transition-[background-color] duration-200">
                <feat.icon size={22} className="text-[#1A5DF7] group-hover:text-white transition-[color] duration-200" />
              </div>
              <h3 className="text-[17px] font-bold text-[#0F172A] mb-2">{feat.title}</h3>
              <p className="text-[15px] text-[#64748B] leading-[1.7]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'motion/react'
import {
  Languages, Smartphone, BellRing, UtensilsCrossed, LayoutGrid,
  BarChart3, Star, CreditCard, MapPin,
} from 'lucide-react'

const FEATURES = [
  {
    icon: Languages,
    title: '32개국어 자동 번역',
    desc: '한국어로 한\u00A0번 등록하면 영·중·일·베·태·러·인니 등 32개국어로 자동 번역됩니다.',
  },
  {
    icon: Smartphone,
    title: 'PWA 웹, 앱 설치 불필요',
    desc: 'QR 스캔 후 모바일 웹으로 바로 메뉴. 설치·가입·로그인 없이 1분 안에 주문 완료.',
  },
  {
    icon: BellRing,
    title: '실시간 주문 알림',
    desc: '새 주문·호출·요청사항을 즉시 알림. 홀·주방 어디서든 놓치지 않고 대응.',
  },
  {
    icon: UtensilsCrossed,
    title: '메뉴·옵션 즉시 반영',
    desc: '메뉴 추가, 가격, 품절, 사진. 어드민에서 누르는 순간 32개국 메뉴에 반영됩니다.',
  },
  {
    icon: LayoutGrid,
    title: '테이블 관리',
    desc: '테이블별 QR 매핑, 동시 다건 주문, 테이블 상태 실시간 확인. 홀 동선이 한눈에.',
  },
  {
    icon: BarChart3,
    title: '매출·정산 리포트',
    desc: '일·월별 매출, 인기 메뉴, 시간대별 주문 패턴. 시즌 메뉴와 재고 계획이 쉬워집니다.',
  },
  {
    icon: Star,
    title: '리뷰 관리',
    desc: '외국인 리뷰도 한국어로 자동 번역되어 확인·답변 가능. 별점·사진 통합 관리.',
  },
  {
    icon: CreditCard,
    title: '주문당 후불 과금',
    desc: '월 고정비 0원. 실제 주문이 발생한 건만큼만 수수료를 지불. 주문 없으면 비용도 없습니다.',
  },
  {
    icon: MapPin,
    title: 'ZIVO 앱 노출 포함',
    desc: 'QR 파트너가 되시면 ZIVO 외국인 여행 플랫폼 지도·검색에 매장이 자동 등록됩니다.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-28 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* 에디토리얼 인트로 */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 items-end mb-14 md:mb-20 pb-8 border-b border-[#E2E8F0]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-bold text-[#94A3B8] tracking-[0.3em] uppercase mb-3">
              What's inside
            </p>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#0F172A] leading-[0.95] tracking-[-0.025em]">
              필요한 건 다 들어있어요.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:max-w-sm text-[14px] md:text-[15px] text-[#64748B] leading-[1.7]"
          >
            QR 주문, 32개국어 번역, 주문·테이블·정산 관리, ZIVO 앱 노출까지. 외식업 운영에 필요한 기능만 남겼습니다.
          </motion.p>
        </div>

        {/* 피처 리스트 — 3×3 편집형 그리드, 구분선 중심 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#F1F5F9]">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative p-7 md:p-8 border-b border-r border-[#F1F5F9] hover:bg-[#F8FAFC] transition-[background-color] duration-200"
            >
              <feat.icon size={22} strokeWidth={1.75} className="text-[#1A5DF7] mb-5" />
              <h3 className="text-[16px] md:text-[17px] font-bold text-[#0F172A] mb-2.5 leading-[1.35] tracking-[-0.01em]">
                {feat.title}
              </h3>
              <p className="text-[14px] text-[#64748B] leading-[1.7]">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

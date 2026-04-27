import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { PhoneMockup } from '@/components/PhoneMockup'
import { MenuListScreen } from '@/components/mockups/MenuListScreen'
import { MenuDetailScreen } from '@/components/mockups/MenuDetailScreen'
import { OrderCompleteScreen } from '@/components/mockups/OrderCompleteScreen'
import { DashboardDesktop } from '@/components/mockups/DashboardDesktop'

const SOLUTIONS = [
  {
    num: '01',
    badge: 'Multi-language',
    title: '한국어로 한\u00A0번 등록하면 32개국어로 자동 번역',
    highlight: '32개국어',
    description: '영어·중국어·일본어·베트남어·태국어·러시아어·인도네시아어·스페인어·프랑스어·독일어·아랍어 등. 메뉴명·설명·옵션·원산지·리뷰까지 번역되고, 손님은 자기 나라 언어로만 보면 됩니다.',
    features: [
      '한국어 등록 = 32개국 메뉴 완성',
      '사진·가격·옵션·원산지 자동 번역',
      '외국인 리뷰도 한국어로 자동 번역',
    ],
    screen: 'multilang',
  },
  {
    num: '02',
    badge: 'QR Ordering',
    title: 'QR 스캔부터 주문 완료까지 1분',
    highlight: '1분',
    description: '앱 설치 후 회원가입만 한 번. 그 뒤로는 테이블 QR만 스캔하면 메뉴 → 옵션 → 직원 호출 → 결제 → 영수증까지 손님이 혼자 끝냅니다.',
    features: [
      '앱 설치 + 회원가입 1회로 결제 정보 등록',
      '테이블 번호 자동 인식 · 직원 호출',
      '옵션(중량·가니쉬)·요청사항 지원',
      '주문번호·영수증 자동 발급',
    ],
    screen: 'order',
  },
  {
    num: '03',
    badge: 'Partner Dashboard',
    title: '주문·메뉴·정산·테이블을 한\u00A0화면에서',
    highlight: '한\u00A0화면',
    description: '매장/메뉴/주문/결제·정산/테이블/리뷰 — 7개 어드민 화면이 한 계정으로 연결됩니다. 사장님 전용 PC/태블릿 대시보드로 운영이 한눈에 정리됩니다.',
    features: [
      '실시간 주문 알림 · 상태(접수대기·조리중·완료)',
      '메뉴·가격·품절 즉시 반영 (32개국어 동시)',
      '테이블별 주문·매출 조회',
      '일·월 정산 리포트 · 인기 메뉴 분석',
    ],
    screen: 'dashboard',
  },
]

function DualPhone({ main, sub }: { main: React.ReactNode; sub: React.ReactNode }) {
  return (
    <div className="flex justify-center gap-0 sm:gap-6 lg:gap-5">
      <PhoneMockup>{main}</PhoneMockup>
      <PhoneMockup className="-ml-[50px] -mt-6 sm:ml-0 sm:mt-0 relative z-10 drop-shadow-[-6px_4px_16px_rgba(0,0,0,0.18)] sm:drop-shadow-none">
        {sub}
      </PhoneMockup>
    </div>
  )
}

function SolutionScreen({ type }: { type: string }) {
  switch (type) {
    case 'multilang':
      return <DualPhone main={<MenuListScreen lang="en" />} sub={<MenuDetailScreen lang="en" />} />
    case 'order':
      return <DualPhone main={<MenuListScreen lang="ko" />} sub={<OrderCompleteScreen />} />
    case 'dashboard':
      return <DashboardDesktop />
    default:
      return null
  }
}

export function Solution() {
  return (
    <section id="solution" className="py-20 sm:py-24 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <p className="text-[11px] font-bold text-[#94A3B8] tracking-[0.3em] uppercase mb-3">
            The Solution
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.05] tracking-[-0.025em]">
            <span className="text-[#1A5DF7]">도입비용 0원, 월 고정비 0원.</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-[17px] text-[#64748B] font-medium max-w-xl mx-auto leading-[1.7]">
            외국인 손님 메뉴부터 결제까지 필요한 모든 것이 한&nbsp;번에.<br />
            <span className="text-[#94A3B8]">*주문이 있을 때만 수수료가 발생합니다.</span>
          </p>
        </motion.div>

        <div className="flex flex-col gap-28 md:gap-40">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.badge}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center"
            >
              <div className={`flex flex-col gap-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-baseline gap-3">
                  <span className="text-[14px] font-extrabold text-[#1A5DF7] tabular-nums">
                    {sol.num}
                  </span>
                  <span className="text-[11px] font-bold text-[#94A3B8] tracking-[0.2em] uppercase">
                    {sol.badge}
                  </span>
                </div>
                <h3 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.2] tracking-[-0.02em]">
                  {(() => {
                    const idx = sol.title.indexOf(sol.highlight)
                    if (idx === -1) return sol.title
                    return (
                      <>
                        {sol.title.slice(0, idx)}
                        <span className="text-[#1A5DF7]">{sol.highlight}</span>
                        {sol.title.slice(idx + sol.highlight.length)}
                      </>
                    )
                  })()}
                </h3>
                <p className="text-[16px] md:text-[17px] text-[#64748B] leading-[1.75]">
                  {sol.description}
                </p>
                <ul className="flex flex-col gap-2.5 mt-2 pt-5 border-t border-[#E2E8F0]">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] text-[#334155] font-medium leading-[1.6]">
                      <Check size={17} strokeWidth={2.5} className="text-[#1A5DF7] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <SolutionScreen type={sol.screen} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

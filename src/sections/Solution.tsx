import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { Badge } from '@/components/Badge'
import { PhoneMockup } from '@/components/PhoneMockup'
import { MenuListScreen } from '@/components/mockups/MenuListScreen'
import { MenuDetailScreen } from '@/components/mockups/MenuDetailScreen'
import { OrderCompleteScreen } from '@/components/mockups/OrderCompleteScreen'
import { DashboardDesktop } from '@/components/mockups/DashboardDesktop'

const SOLUTIONS = [
  {
    badge: '다국어 자동 번역',
    title: '17개국어로\n메뉴가 자동 번역됩니다',
    description: '한국어 메뉴를 등록하면 영어, 일본어, 중국어 등 17개 언어로 자동 번역. 외국인 손님이 모국어로 메뉴를 보고, 모국어로 주문합니다.',
    features: ['한국어 등록 한 번이면 끝', '17개 언어 자동 번역', '사진·옵션까지 완벽 번역'],
    badgeColor: 'bg-blue-100 text-blue-700',
    screen: 'multilang',
  },
  {
    badge: 'QR 테이블 주문',
    title: 'QR 스캔 한 번이면\n바로 주문 완료',
    description: '앱 설치도, 회원가입도 필요 없습니다. 테이블의 QR을 스캔하면 즉시 웹 메뉴가 열리고, 터치 몇 번으로 주문이 완료됩니다.',
    features: ['앱 설치 불필요', 'QR → 메뉴 → 주문 → 결제', '테이블 번호 자동 인식'],
    badgeColor: 'bg-emerald-100 text-emerald-700',
    screen: 'order',
  },
  {
    badge: '사장님 대시보드',
    title: '주문부터 매출까지\n한 화면에서 관리',
    description: '실시간 주문 알림, 메뉴 관리, 매출 분석까지. 사장님 전용 대시보드에서 매장 운영을 한눈에 파악하세요.',
    features: ['실시간 주문 알림', '메뉴/가격 즉시 수정', '매출 리포트'],
    badgeColor: 'bg-violet-100 text-violet-700',
    screen: 'dashboard',
  },
]

function DualPhone({ main, sub }: { main: React.ReactNode; sub: React.ReactNode }) {
  return (
    <div className="flex justify-center gap-5">
      <PhoneMockup>
        {main}
      </PhoneMockup>
      <PhoneMockup className="hidden sm:block">
        {sub}
      </PhoneMockup>
    </div>
  )
}

function SolutionScreen({ type }: { type: string }) {
  switch (type) {
    case 'multilang':
      return (
        <DualPhone
          main={<MenuListScreen lang="en" />}
          sub={<MenuDetailScreen lang="en" />}
        />
      )
    case 'order':
      return (
        <DualPhone
          main={<MenuListScreen lang="ko" />}
          sub={<OrderCompleteScreen />}
        />
      )
    case 'dashboard':
      return <DashboardDesktop />
    default:
      return null
  }
}

export function Solution() {
  return (
    <section id="solution" className="py-24 sm:py-32 md:py-40 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <Badge>ZIVO QR 솔루션</Badge>
          <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.02em]">
            ZIVO QR이 해결합니다
          </h2>
          <p className="mt-4 text-[18px] md:text-[20px] text-[#64748B] font-medium">
            설치비 0원, 별도 기기 없이 시작하세요.
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
              {/* 텍스트 */}
              <div className={`flex flex-col gap-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[14px] font-bold w-fit ${sol.badgeColor}`}>
                  {sol.badge}
                </span>
                <h3 className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-[#0F172A] leading-[1.15] whitespace-pre-line tracking-[-0.01em]">
                  {sol.title}
                </h3>
                <p className="text-[17px] md:text-[18px] text-[#64748B] leading-[1.7]">{sol.description}</p>
                <ul className="flex flex-col gap-3 mt-2">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[16px] text-[#334155] font-medium">
                      <Check size={18} className="text-[#1A5DF7] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 목업 */}
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

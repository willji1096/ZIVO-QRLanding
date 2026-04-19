interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'lg'
}

// 내부 컨텐츠는 항상 240×480 기준으로 렌더링하고, 뷰포트별로 scale만 조정한다.
// 이렇게 해야 MenuListScreen 등의 고정 폰트 사이즈가 모바일에서도 자연스럽게 축소된다.
export function PhoneMockup({ children, className = '', size = 'default' }: PhoneMockupProps) {
  // 외곽 wrapper — 실제 레이아웃이 차지할 시각 공간
  const wrapperSize = size === 'lg'
    ? 'w-[200px] h-[400px] sm:w-[260px] sm:h-[520px] lg:w-[280px] lg:h-[560px]'
    : 'w-[180px] h-[360px] sm:w-[240px] sm:h-[480px] lg:w-[260px] lg:h-[520px]'

  // 내부는 항상 자연 캔버스 크기로 렌더 후 scale 다운
  const canvasSize = size === 'lg' ? 'w-[280px] h-[560px]' : 'w-[260px] h-[520px]'
  const canvasScale = size === 'lg'
    ? 'scale-[0.714] sm:scale-[0.929] lg:scale-100'
    : 'scale-[0.692] sm:scale-[0.923] lg:scale-100'

  return (
    <div className={`${wrapperSize} ${className}`}>
      <div className={`${canvasSize} ${canvasScale} origin-top-left`}>
        <div className="w-full h-full bg-[#E2E8F0] rounded-[36px] p-2 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)]">
          <div className="bg-white rounded-[28px] overflow-hidden flex flex-col h-full">
            <div className="flex-1 overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

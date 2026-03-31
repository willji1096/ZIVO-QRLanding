interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'lg'
}

export function PhoneMockup({ children, className = '', size = 'default' }: PhoneMockupProps) {
  // 파트너 랜딩 기준: 240x480 (1:2 비율)
  const sizeClass = size === 'lg' ? 'w-[240px] sm:w-[260px]' : 'w-[220px] sm:w-[240px]'
  const heightClass = size === 'lg' ? 'h-[480px] sm:h-[520px]' : 'h-[440px] sm:h-[480px]'

  return (
    <div className={`${sizeClass} ${className}`}>
      <div className={`bg-[#E2E8F0] rounded-[36px] p-2 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)] ${heightClass}`}>
        <div className="bg-white rounded-[28px] overflow-hidden flex flex-col h-full">
          <div className="flex-1 overflow-hidden">
            {children}
          </div>
          <div className="py-2 flex justify-center flex-shrink-0">
            <div className="w-[100px] h-[4px] bg-[#0F172A] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

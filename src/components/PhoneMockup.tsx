interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
}

export function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
  return (
    <div className={`w-[260px] sm:w-[280px] ${className}`}>
      {/* 베젤 프레임 — zivo-partner-landing 스타일 */}
      <div className="bg-[#E2E8F0] rounded-[36px] p-2 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)]">
        {/* 내부 화면 — concentric radius: 36 - 8 = 28 */}
        <div className="bg-white rounded-[28px] overflow-hidden flex flex-col min-h-[480px]">
          <div className="flex-1">
            {children}
          </div>
          {/* 홈 인디케이터 */}
          <div className="py-2 flex justify-center">
            <div className="w-[100px] h-[4px] bg-[#0F172A] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

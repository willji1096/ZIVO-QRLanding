interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
}

export function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
  return (
    <div className={`w-[260px] sm:w-[280px] ${className}`}>
      <div className="rounded-[32px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_40px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden">
        {children}
      </div>
    </div>
  )
}

interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
}

export function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
  return (
    <div className={`w-[260px] sm:w-[280px] ${className}`}>
      <div className="rounded-[32px] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-black/[0.06] overflow-hidden">
        {children}
      </div>
    </div>
  )
}

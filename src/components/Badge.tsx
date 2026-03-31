interface BadgeProps {
  children: React.ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#1A5DF7] font-bold text-[13px] tracking-wide">
      <span className="w-1.5 h-1.5 bg-[#1A5DF7] rounded-full" />
      {children}
    </span>
  )
}

interface BadgeProps {
  children: React.ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#1A5DF7] font-bold text-[14px] tracking-wide shadow-[0_0_0_1px_rgba(26,93,247,0.12)]">
      <span className="w-1.5 h-1.5 bg-[#1A5DF7] rounded-full" />
      {children}
    </span>
  )
}

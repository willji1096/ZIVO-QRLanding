export function DashboardScreen() {
  return (
    <div className="flex flex-col px-5 pt-6 pb-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <span className="text-[10px] text-[#94A3B8] block">ZIVO QR</span>
          <span className="text-[15px] font-bold text-[#0F172A]">오늘의 현황</span>
        </div>
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="p-3.5 bg-[#F8FAFC] rounded-xl">
          <span className="text-[10px] text-[#94A3B8] block mb-1">총 주문</span>
          <span className="text-[22px] font-extrabold text-[#0F172A] tabular-nums">47건</span>
        </div>
        <div className="p-3.5 bg-[#EFF6FF] rounded-xl">
          <span className="text-[10px] text-[#94A3B8] block mb-1">매출</span>
          <span className="text-[22px] font-extrabold text-[#1A5DF7] tabular-nums">₩2.8M</span>
        </div>
      </div>

      {/* Latest Order */}
      <div className="p-3.5 bg-[#F8FAFC] rounded-xl mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-[#0F172A] bg-white px-2 py-0.5 rounded">T17</span>
          <span className="text-[10px] font-semibold text-[#1A5DF7] bg-[#EFF6FF] px-2 py-0.5 rounded-full">신규</span>
        </div>
        <span className="text-[12px] text-[#475569] block">Tenderloin x1, Tartare x1</span>
        <span className="text-[13px] font-bold text-[#0F172A] block mt-1">₩243,000</span>
      </div>

      {/* Foreign ratio */}
      <div className="p-3.5 bg-[#F8FAFC] rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-[#64748B]">외국인 비율</span>
          <span className="text-[12px] font-bold text-[#1A5DF7]">68%</span>
        </div>
        <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
          <div className="h-full bg-[#1A5DF7] rounded-full" style={{ width: '68%' }} />
        </div>
      </div>
    </div>
  )
}

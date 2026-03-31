export function OrderCompleteScreen() {
  return (
    <div className="flex flex-col items-center px-5 pt-10 pb-6">
      {/* Check */}
      <div className="w-12 h-12 rounded-full bg-[#ECFDF5] flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <span className="text-[15px] font-bold text-[#0F172A] mb-1">Order Confirmed!</span>
      <span className="text-[11px] text-[#94A3B8] mb-6">Table T17 · #2024-0847</span>

      {/* Items */}
      <div className="w-full bg-[#F8FAFC] rounded-xl p-4 mb-4">
        <div className="flex justify-between text-[12px] mb-2">
          <span className="text-[#475569]">Hanwoo Tenderloin</span>
          <span className="font-semibold text-[#0F172A]">₩198,000</span>
        </div>
        <div className="flex justify-between text-[12px]">
          <span className="text-[#475569]">Beef Tartare</span>
          <span className="font-semibold text-[#0F172A]">₩45,000</span>
        </div>
      </div>

      {/* Total */}
      <div className="w-full flex justify-between items-center px-1 mb-6">
        <span className="text-[13px] font-semibold text-[#64748B]">Total</span>
        <span className="text-[18px] font-extrabold text-[#1A5DF7]">₩243,000</span>
      </div>

      {/* Button */}
      <button className="w-full py-3 bg-[#1A5DF7] text-white text-[13px] font-semibold rounded-xl">
        Order More
      </button>
    </div>
  )
}

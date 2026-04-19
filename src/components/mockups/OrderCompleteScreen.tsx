export function OrderCompleteScreen() {
  return (
    <div className="flex flex-col bg-white h-full">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 text-center">
        <div className="w-12 h-12 rounded-full bg-[#ECFDF5] flex items-center justify-center mx-auto mb-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-[15px] font-extrabold text-[#0F172A]">주문 완료</h2>
        <p className="text-[10.5px] text-[#94A3B8] mt-1">주문이 정상 접수되었습니다</p>
      </div>

      {/* Order Number Card */}
      <div className="mx-4 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]">
        {[
          { k: '주문 번호', v: '#0001' },
          { k: '테이블', v: '17번' },
          { k: '주문 시간', v: '17:54' },
        ].map((row) => (
          <div key={row.k} className="flex items-center justify-between py-1">
            <span className="text-[10px] text-[#94A3B8]">{row.k}</span>
            <span className="text-[10.5px] font-semibold text-[#0F172A] tabular-nums">{row.v}</span>
          </div>
        ))}
      </div>

      {/* Order Items */}
      <div className="px-4 pt-4">
        <div className="text-[10px] font-bold text-[#94A3B8] tracking-[0.08em] uppercase mb-2">주문 내역</div>
        {[
          { name: '1++ 한우 안심 스테이크', qty: '1개' },
          { name: '한우 육회', qty: '1개' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-[#F1F5F9] last:border-b-0">
            <span className="text-[11.5px] font-semibold text-[#0F172A]">{item.name}</span>
            <span className="text-[10px] text-[#64748B] tabular-nums">{item.qty}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mx-4 mt-2 py-3 flex items-baseline justify-between border-t-2 border-[#0F172A]">
        <span className="text-[11px] font-bold text-[#0F172A]">결제 금액</span>
        <span className="text-[16px] font-extrabold text-[#0F172A] tabular-nums">
          225,000<span className="text-[10px] font-bold text-[#64748B] ml-0.5">원</span>
        </span>
      </div>

      {/* Button */}
      <div className="mt-auto px-3 pb-3 pt-2">
        <button className="w-full h-11 bg-[#1A5DF7] text-white text-[12px] font-bold rounded-xl shadow-[0_6px_14px_rgba(26,93,247,0.3)]">
          추가 주문하기
        </button>
      </div>
    </div>
  )
}

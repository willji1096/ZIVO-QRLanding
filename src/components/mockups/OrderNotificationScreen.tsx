export function OrderNotificationScreen() {
  return (
    <div className="flex flex-col px-5 pt-6 pb-5">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[15px] font-bold text-[#0F172A]">주문 알림</span>
        <span className="text-[11px] font-semibold text-[#1A5DF7] bg-[#EFF6FF] px-2 py-0.5 rounded">3건</span>
      </div>

      {[
        { table: 'T17', time: '방금', items: 'Tenderloin x1, Tartare x1', price: '₩243,000', isNew: true },
        { table: 'T8', time: '3분 전', items: 'Sirloin x2, Beer x2', price: '₩380,000', isNew: true },
        { table: 'T3', time: '12분 전', items: 'Course A (2인)', price: '₩380,000', isNew: false },
      ].map((order, i) => (
        <div key={i} className={`p-3.5 rounded-xl mb-2.5 ${order.isNew ? 'bg-[#EFF6FF] border border-[#DBEAFE]' : 'bg-[#F8FAFC]'}`}>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold text-[#0F172A] bg-white px-2 py-0.5 rounded shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">{order.table}</span>
              <span className="text-[10px] text-[#94A3B8]">{order.time}</span>
            </div>
            {order.isNew && (
              <span className="w-2 h-2 bg-[#1A5DF7] rounded-full" />
            )}
          </div>
          <span className="text-[12px] text-[#475569] block">{order.items}</span>
          <span className="text-[14px] font-bold text-[#0F172A] block mt-1 tabular-nums">{order.price}</span>
        </div>
      ))}

      <button className="w-full py-3 bg-[#1A5DF7] text-white text-[13px] font-semibold rounded-xl mt-2">
        전체 주문 보기
      </button>
    </div>
  )
}

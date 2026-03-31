export function DashboardDesktop() {
  return (
    <div className="w-full">
      {/* Browser Frame */}
      <div className="bg-[#E2E8F0] rounded-xl overflow-hidden shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)]">
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F1F5F9]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FD5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FDBB2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C840]" />
          </div>
          <div className="flex-1 mx-6">
            <div className="bg-white rounded-md px-3 py-1 text-[10px] text-[#94A3B8] text-center">
              admin.zivoqr.com/dashboard
            </div>
          </div>
        </div>

        {/* App Content */}
        <div className="bg-[#FAFBFC] flex min-h-[320px]">
          {/* Sidebar — 실제 QR 어드민 참고 */}
          <div className="w-[48px] bg-white border-r border-[#F1F5F9] py-3 flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-[#1A5DF7] flex items-center justify-center mb-2">
              <span className="text-white text-[9px] font-extrabold">Z</span>
            </div>
            {['dashboard', 'storefront', 'restaurant_menu', 'receipt_long', 'payments', 'table_bar', 'reviews'].map((name, i) => (
              <div key={name} className={`w-7 h-7 rounded-lg flex items-center justify-center text-[12px] ${
                i === 0 ? 'bg-[#EFF6FF] text-[#1A5DF7]' : 'text-[#94A3B8]'
              }`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {i === 0 && <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />}
                  {i === 1 && <path d="M3 3h18v18H3zM3 9h18M9 21V9" />}
                  {i === 2 && <path d="M3 6h18M3 12h18M3 18h18" />}
                  {i === 3 && <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />}
                  {i === 4 && <><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /></>}
                  {i === 5 && <path d="M12 3v18M3 12h18" />}
                  {i === 6 && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />}
                </svg>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[13px] font-bold text-[#0F172A]">대시보드</h3>
                <span className="text-[10px] text-[#94A3B8]">The Timber House · 오늘</span>
              </div>
              <div className="flex gap-1.5">
                <div className="h-6 px-2.5 bg-white border border-[#E2E8F0] rounded-md flex items-center text-[9px] text-[#64748B] font-medium">내보내기</div>
                <div className="h-6 px-2.5 bg-[#1A5DF7] rounded-md flex items-center text-[9px] text-white font-semibold">+ 메뉴 추가</div>
              </div>
            </div>

            {/* Stat Cards — 실제 QR 어드민 3열 */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: '오늘 주문 수', value: '47건', sub: '전일 대비 +12%', icon: '🛒', color: 'text-[#1A5DF7]' },
                { label: '오늘 매출', value: '₩2.8M', sub: '2,800,000원', icon: '💰', color: 'text-[#059669]' },
                { label: '취소/환불', value: '2건', sub: '취소 1건 · 환불 1건', icon: '↩️', color: 'text-[#EF4444]' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-3 border border-[#F1F5F9]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] text-[#94A3B8]">{stat.label}</span>
                    <span className="text-[10px]">{stat.icon}</span>
                  </div>
                  <span className={`text-[15px] font-extrabold ${stat.color} tabular-nums block`}>{stat.value}</span>
                  <span className="text-[8px] text-[#94A3B8]">{stat.sub}</span>
                </div>
              ))}
            </div>

            {/* Order Table — 실제 QR 어드민 참고 */}
            <div className="bg-white rounded-lg border border-[#F1F5F9] overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#F1F5F9]">
                <span className="text-[10px] text-[#64748B]">최근 주문 <span className="font-bold text-[#0F172A]">10</span>건</span>
                <span className="text-[9px] text-[#1A5DF7] font-semibold">전체 보기 →</span>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#F1F5F9]">
                    {['주문번호', '테이블', '메뉴', '금액', '상태'].map((h) => (
                      <th key={h} className="text-left text-[8px] font-semibold text-[#94A3B8] px-3 py-1.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '0001', table: 'T17', menu: '한우 안심 외 1건', price: '243,000원', status: '접수대기', sc: 'bg-[#FFF7ED] text-[#EA580C]' },
                    { id: '0002', table: 'T8', menu: '등심 스테이크 외 3건', price: '380,000원', status: '조리중', sc: 'bg-[#EFF6FF] text-[#1A5DF7]' },
                    { id: '0003', table: 'T3', menu: '한우 코스 A', price: '380,000원', status: '완료', sc: 'bg-[#ECFDF5] text-[#059669]' },
                  ].map((row) => (
                    <tr key={row.id} className="border-b border-[#F8FAFC] last:border-0">
                      <td className="px-3 py-2 text-[9px] text-[#1A5DF7] font-medium">{row.id}</td>
                      <td className="px-3 py-2 text-[9px] font-bold text-[#0F172A]">{row.table}</td>
                      <td className="px-3 py-2 text-[9px] text-[#475569]">{row.menu}</td>
                      <td className="px-3 py-2 text-[9px] font-semibold text-[#0F172A] tabular-nums">{row.price}</td>
                      <td className="px-3 py-2">
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${row.sc}`}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

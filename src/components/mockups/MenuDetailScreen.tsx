export function MenuDetailScreen({ lang = 'en' }: { lang?: 'ko' | 'en' }) {
  const t = translations[lang]

  return (
    <div className="flex flex-col">
      {/* Hero Image */}
      <div className="relative h-[140px] bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center">
        <span className="text-[48px]">🥩</span>
        {/* Back button */}
        <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </div>
      </div>

      {/* Menu Info */}
      <div className="px-5 pt-4 pb-3">
        <h2 className="text-[16px] font-bold text-[#0F172A] mb-1">{t.name}</h2>
        <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-3">{t.desc}</p>
        <div className="flex items-center justify-between">
          {/* Qty */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#F1F5F9] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5"><path d="M5 12h14" /></svg>
            </div>
            <span className="text-[14px] font-bold text-[#0F172A] tabular-nums w-4 text-center">1</span>
            <div className="w-7 h-7 rounded-lg bg-[#F1F5F9] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
            </div>
          </div>
          <span className="text-[16px] font-extrabold text-[#1A5DF7] tabular-nums">{t.price}</span>
        </div>
      </div>

      {/* Option Group */}
      <div className="px-5 py-3 border-t border-[#F8FAFC]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px] font-bold text-[#0F172A]">{t.optionTitle}</span>
          <span className="text-[10px] font-semibold text-[#1A5DF7] bg-[#EFF6FF] px-1.5 py-0.5 rounded">{t.required}</span>
        </div>
        {t.options.map((opt, i) => (
          <div key={i} className="flex items-center gap-2.5 py-2">
            <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
              i === 0 ? 'border-[#1A5DF7]' : 'border-[#D1D5DB]'
            }`}>
              {i === 0 && <div className="w-[8px] h-[8px] rounded-full bg-[#1A5DF7]" />}
            </div>
            <span className="text-[12px] text-[#334155] flex-1">{opt.label}</span>
            <span className="text-[11px] text-[#94A3B8] tabular-nums">{opt.price}</span>
          </div>
        ))}
      </div>

      {/* Add to Cart */}
      <div className="px-5 py-4 mt-auto">
        <button className="w-full py-3 bg-[#1A5DF7] text-white text-[13px] font-semibold rounded-xl">
          {t.addToCart}
        </button>
      </div>
    </div>
  )
}

const translations = {
  ko: {
    name: '1++ 한우 안심 스테이크',
    desc: '최상급 한우 안심을 3cm 두께로 구워낸 시그니처 스테이크. 레몬 슬라이스 기본 제공.',
    price: '180,000원',
    optionTitle: '중량 선택',
    required: '필수',
    addToCart: '장바구니 담기 · 180,000원',
    options: [
      { label: '300g', price: '기본' },
      { label: '400g', price: '+15,000원' },
      { label: '500g', price: '+25,000원' },
    ],
  },
  en: {
    name: '1++ Hanwoo Tenderloin Steak',
    desc: 'Premium Hanwoo tenderloin, 3cm thick signature steak. Served with lemon slices.',
    price: '₩180,000',
    optionTitle: 'Weight',
    required: 'Required',
    addToCart: 'Add to Cart · ₩180,000',
    options: [
      { label: '300g', price: 'Default' },
      { label: '400g', price: '+₩15,000' },
      { label: '500g', price: '+₩25,000' },
    ],
  },
}

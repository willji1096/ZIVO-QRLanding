type Lang = 'ko' | 'en'

type Pack = {
  name: string
  desc: string
  price: string
  qty: number
  weightTitle: string
  weightReq: string
  weights: { label: string; price: string; selected?: boolean }[]
  addToCart: string
}

const translations: Record<Lang, Pack> = {
  ko: {
    name: '1++ 한우 안심 스테이크',
    desc: '3cm 두께 시그니처 · 레몬 슬라이스 기본',
    price: '180,000원',
    qty: 1,
    weightTitle: '중량 선택',
    weightReq: '필수',
    weights: [
      { label: '300g', price: '기본', selected: true },
      { label: '400g', price: '+15,000원' },
      { label: '500g', price: '+25,000원' },
    ],
    addToCart: '장바구니 담기 · 180,000원',
  },
  en: {
    name: '1++ Hanwoo Tenderloin',
    desc: '3cm signature cut · served with lemon',
    price: '₩180,000',
    qty: 1,
    weightTitle: 'Weight',
    weightReq: 'Required',
    weights: [
      { label: '300g', price: 'Default', selected: true },
      { label: '400g', price: '+₩15,000' },
      { label: '500g', price: '+₩25,000' },
    ],
    addToCart: 'Add to cart · ₩180,000',
  },
}

export function MenuDetailScreen({ lang = 'en' }: { lang?: Lang }) {
  const t = translations[lang]

  return (
    <div className="flex flex-col bg-white h-full">
      {/* Hero Image */}
      <div className="relative h-[148px] bg-[#F1F5F9] overflow-hidden">
        <img src="/menu/menu-tenderloin.png" alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.12)]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </div>
      </div>

      {/* Menu Info */}
      <div className="px-4 pt-4 pb-3">
        <h2 className="text-[14px] font-extrabold text-[#0F172A] leading-tight">{t.name}</h2>
        <p className="text-[10.5px] text-[#94A3B8] leading-relaxed mt-1 mb-4">{t.desc}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-[#F1F5F9] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5"><path d="M5 12h14" /></svg>
            </div>
            <span className="text-[13px] font-bold text-[#0F172A] tabular-nums w-3 text-center">{t.qty}</span>
            <div className="w-6 h-6 rounded-lg bg-[#0F172A] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
            </div>
          </div>
          <span className="text-[15px] font-extrabold text-[#0F172A] tabular-nums">{t.price}</span>
        </div>
      </div>

      {/* Option — 중량만 */}
      <div className="px-4 py-3 border-t border-[#F1F5F9]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-[#0F172A]">{t.weightTitle}</span>
          <span className="text-[9px] font-bold text-white bg-[#1A5DF7] px-1.5 py-0.5 rounded">{t.weightReq}</span>
        </div>
        {t.weights.map((opt, i) => (
          <div key={i} className="flex items-center gap-2.5 py-1.5">
            <div className={`w-[16px] h-[16px] rounded-full border-[1.5px] flex items-center justify-center ${
              opt.selected ? 'border-[#1A5DF7]' : 'border-[#CBD5E1]'
            }`}>
              {opt.selected && <div className="w-[8px] h-[8px] rounded-full bg-[#1A5DF7]" />}
            </div>
            <span className={`text-[11px] flex-1 ${opt.selected ? 'text-[#0F172A] font-semibold' : 'text-[#475569]'}`}>
              {opt.label}
            </span>
            <span className="text-[10px] text-[#94A3B8] tabular-nums">{opt.price}</span>
          </div>
        ))}
      </div>

      {/* Add to cart */}
      <div className="mt-auto px-3 pb-3 pt-2">
        <button className="w-full h-11 bg-[#1A5DF7] text-white text-[12px] font-bold rounded-xl shadow-[0_6px_14px_rgba(26,93,247,0.3)]">
          {t.addToCart}
        </button>
      </div>
    </div>
  )
}

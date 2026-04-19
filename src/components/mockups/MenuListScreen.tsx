type Lang = 'ko' | 'en' | 'ja' | 'zh'

type Item = {
  img: string
  name: string
  price: string
  priceOriginal?: string
  badge?: 'best' | 'signature' | 'new'
}

type Pack = {
  store: string
  wait: string
  tabs: string[]
  cart: string
  badges: Record<'best' | 'signature' | 'new', string>
  items: Item[]
}

const translations: Record<Lang, Pack> = {
  ko: {
    store: 'The Timber House',
    wait: '대기 30분',
    tabs: ['추천', '메인', '사이드', '음료'],
    cart: '장바구니 · 225,000원',
    badges: { best: '추천', signature: '대표', new: '신규' },
    items: [
      { img: '/menu/menu-tenderloin.png', name: '1++ 한우 안심 스테이크', price: '180,000원', priceOriginal: '200,000원', badge: 'best' },
      { img: '/menu/menu-tartare.png', name: '한우 육회', price: '45,000원', badge: 'new' },
    ],
  },
  en: {
    store: 'The Timber House',
    wait: '30 min wait',
    tabs: ['Best', 'Main', 'Side', 'Drinks'],
    cart: 'Cart · ₩225,000',
    badges: { best: 'Best', signature: 'Signature', new: 'New' },
    items: [
      { img: '/menu/menu-tenderloin.png', name: 'Hanwoo Tenderloin', price: '₩180,000', priceOriginal: '₩200,000', badge: 'best' },
      { img: '/menu/menu-tartare.png', name: 'Beef Tartare', price: '₩45,000', badge: 'new' },
    ],
  },
  ja: {
    store: 'The Timber House',
    wait: '待ち 30分',
    tabs: ['おすすめ', 'メイン', 'サイド', 'ドリンク'],
    cart: 'カート · ₩225,000',
    badges: { best: 'おすすめ', signature: '看板', new: '新' },
    items: [
      { img: '/menu/menu-tenderloin.png', name: '韓牛ヒレステーキ', price: '₩180,000', priceOriginal: '₩200,000', badge: 'best' },
      { img: '/menu/menu-tartare.png', name: '韓牛ユッケ', price: '₩45,000', badge: 'new' },
    ],
  },
  zh: {
    store: 'The Timber House',
    wait: '等待 30分',
    tabs: ['推荐', '主菜', '小食', '饮品'],
    cart: '购物车 · ₩225,000',
    badges: { best: '推荐', signature: '招牌', new: '新品' },
    items: [
      { img: '/menu/menu-tenderloin.png', name: '韩牛里脊牛排', price: '₩180,000', priceOriginal: '₩200,000', badge: 'best' },
      { img: '/menu/menu-tartare.png', name: '韩牛生拌', price: '₩45,000', badge: 'new' },
    ],
  },
}

const BADGE_STYLE: Record<'best' | 'signature' | 'new', string> = {
  best: 'bg-[#EFF6FF] text-[#1A5DF7]',
  signature: 'bg-[#0F172A] text-white',
  new: 'bg-[#ECFDF5] text-[#059669]',
}

export function MenuListScreen({ lang = 'en' }: { lang?: Lang }) {
  const t = translations[lang]

  return (
    <div className="flex flex-col bg-white h-full">
      {/* Store Info */}
      <div className="px-4 pt-5 pb-3">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[15px] font-extrabold text-[#0F172A] leading-tight">{t.store}</span>
          <span className="text-[10px] font-bold text-[#1A5DF7] bg-[#EFF6FF] px-1.5 py-0.5 rounded-md">T17</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10.5px] text-[#64748B] font-medium">
          <span className="text-[#FFB800]">★</span>
          <span className="font-bold text-[#0F172A]">4.97</span>
          <span className="text-[#E2E8F0]">·</span>
          <span>{t.wait}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 px-4 pb-4 overflow-hidden">
        {t.tabs.map((tab, i) => (
          <span
            key={tab}
            className={`px-2.5 py-1 rounded-full text-[10.5px] font-semibold whitespace-nowrap ${
              i === 0 ? 'bg-[#0F172A] text-white' : 'text-[#64748B] bg-[#F8FAFC]'
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Menu Items (2) */}
      <div className="px-4 flex flex-col gap-4">
        {t.items.map((item, i) => (
          <div key={i} className="flex gap-3 items-center">
            <div className="w-[68px] h-[68px] rounded-xl overflow-hidden bg-[#F1F5F9] flex-shrink-0">
              <img src={item.img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0">
              {item.badge && (
                <span className={`inline-block text-[9px] font-bold px-1.5 py-[1px] rounded mb-1 ${BADGE_STYLE[item.badge]}`}>
                  {t.badges[item.badge]}
                </span>
              )}
              <span className="text-[12.5px] font-bold text-[#0F172A] block leading-tight">
                {item.name}
              </span>
              <div className="mt-1 flex items-baseline gap-1.5">
                {item.priceOriginal && (
                  <span className="text-[10px] text-[#94A3B8] line-through tabular-nums">{item.priceOriginal}</span>
                )}
                <span className="text-[12.5px] font-extrabold text-[#0F172A] tabular-nums">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="mt-auto px-3 pb-3 pt-5">
        <div className="h-11 bg-[#1A5DF7] rounded-xl flex items-center justify-center shadow-[0_6px_14px_rgba(26,93,247,0.3)]">
          <span className="text-white text-[12px] font-bold">{t.cart}</span>
        </div>
      </div>
    </div>
  )
}

export function MenuListScreen({ lang = 'en' }: { lang?: 'ko' | 'en' | 'ja' | 'zh' }) {
  const t = translations[lang]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[16px] font-bold text-[#0F172A]">{t.storeName}</span>
          <span className="text-[11px] font-semibold text-[#1A5DF7] bg-[#EFF6FF] px-2 py-0.5 rounded">T17</span>
        </div>
        <span className="text-[11px] text-[#94A3B8]">★ 4.97 · {t.wait}</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-5 pb-4">
        {t.tabs.map((tab, i) => (
          <span key={tab} className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
            i === 0 ? 'bg-[#0F172A] text-white' : 'text-[#94A3B8]'
          }`}>{tab}</span>
        ))}
      </div>

      {/* Menu Items — 2개만 */}
      <div className="px-5 flex flex-col gap-4 pb-5">
        {t.items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-[56px] h-[56px] rounded-xl bg-[#F8FAFC] flex items-center justify-center flex-shrink-0">
              <span className="text-[22px]">{item.img}</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[13px] font-semibold text-[#0F172A] block">{item.name}</span>
              <span className="text-[11px] text-[#94A3B8] block mt-0.5">{item.sub}</span>
              <span className="text-[13px] font-bold text-[#1A5DF7] block mt-1">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="mx-5 mb-5 py-3 bg-[#1A5DF7] rounded-xl flex items-center justify-center gap-2">
        <span className="text-white text-[13px] font-semibold">{t.cart}</span>
      </div>
    </div>
  )
}

const translations = {
  ko: {
    storeName: 'The Timber House',
    wait: '대기 30분',
    tabs: ['추천', '메인', '사이드', '음료'],
    cart: '장바구니 보기 · 225,000원',
    items: [
      { img: '🥩', name: '한우 안심 스테이크', sub: '1++ 최상급 · 300g', price: '180,000원' },
      { img: '🥗', name: '한우 육회', sub: '전통 양념 · 참기름', price: '45,000원' },
    ],
  },
  en: {
    storeName: 'The Timber House',
    wait: 'Wait 30 min',
    tabs: ['Best', 'Main', 'Side', 'Drink'],
    cart: 'View Cart · ₩225,000',
    items: [
      { img: '🥩', name: 'Hanwoo Tenderloin', sub: '1++ Premium · 300g', price: '₩180,000' },
      { img: '🥗', name: 'Beef Tartare', sub: 'Traditional · Sesame oil', price: '₩45,000' },
    ],
  },
  ja: {
    storeName: 'The Timber House',
    wait: '待ち 30分',
    tabs: ['おすすめ', 'メイン', 'サイド', 'ドリンク'],
    cart: 'カート · ₩225,000',
    items: [
      { img: '🥩', name: '韓牛ヒレステーキ', sub: '1++ 最上級 · 300g', price: '₩180,000' },
      { img: '🥗', name: '韓牛ユッケ', sub: '伝統味付け · ごま油', price: '₩45,000' },
    ],
  },
  zh: {
    storeName: 'The Timber House',
    wait: '等待 30分钟',
    tabs: ['推荐', '主菜', '小食', '饮品'],
    cart: '购物车 · ₩225,000',
    items: [
      { img: '🥩', name: '韩牛里脊牛排', sub: '1++ 顶级 · 300g', price: '₩180,000' },
      { img: '🥗', name: '韩牛生拌', sub: '传统调味 · 香油', price: '₩45,000' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-[#0A0F1C] border-t border-white/[0.04] py-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <span className="text-[16px] font-extrabold text-white tracking-[-0.01em]">
              ZIVO<span className="text-[#1A5DF7]"> QR</span>
            </span>
            <p className="mt-2 text-[13px] text-white/30 max-w-xs leading-relaxed">
              외국인 관광객을 위한 다국어 QR 주문 솔루션.
            </p>
          </div>
          <div className="flex gap-10 text-[13px]">
            <div className="flex flex-col gap-2">
              <span className="text-white/50 font-medium mb-1">서비스</span>
              <a href="#solution" className="text-white/30 hover:text-white/50 transition-colors">서비스 소개</a>
              <a href="#features" className="text-white/30 hover:text-white/50 transition-colors">주요 기능</a>
              <a href="#how-it-works" className="text-white/30 hover:text-white/50 transition-colors">도입 과정</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/50 font-medium mb-1">고객지원</span>
              <a href="#faq" className="text-white/30 hover:text-white/50 transition-colors">FAQ</a>
              <a href="#cta" className="text-white/30 hover:text-white/50 transition-colors">도입 문의</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-white/20">
          <p>&copy; 2025 Global Alpha Media Inc.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/30 transition-colors">이용약관</a>
            <a href="#" className="hover:text-white/30 transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

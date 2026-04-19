export function Footer() {
  return (
    <footer className="bg-[#0A0F1C] border-t border-white/[0.04] pt-14 pb-10">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <img src="/logo/zivo-logo-white.svg" alt="zivo" className="h-[26px] w-auto" draggable={false} />
              <span className="text-[15px] font-bold text-[#1A5DF7] tracking-[-0.01em]">QR</span>
            </div>
            <p className="mt-3 text-[13px] text-white/40 leading-[1.7]">
              ZIVO는 외국인 관광객과 한국 매장을 연결하는 K-관광 플랫폼입니다. QR 오더로 언어 장벽 없이 외국인 손님을 받으세요.
            </p>
          </div>
          <div className="flex gap-10 text-[13px]">
            <div className="flex flex-col gap-2.5">
              <span className="text-white/60 font-semibold mb-1">서비스</span>
              <a href="#solution" className="text-white/40 hover:text-white/70 transition-colors">서비스 소개</a>
              <a href="#features" className="text-white/40 hover:text-white/70 transition-colors">주요 기능</a>
              <a href="#how-it-works" className="text-white/40 hover:text-white/70 transition-colors">도입 과정</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-white/60 font-semibold mb-1">고객지원</span>
              <a href="#faq" className="text-white/40 hover:text-white/70 transition-colors">FAQ</a>
              <a href="#cta" className="text-white/40 hover:text-white/70 transition-colors">도입 문의</a>
              <a href="#" className="text-white/40 hover:text-white/70 transition-colors">이용약관</a>
              <a href="#" className="text-white/40 hover:text-white/70 transition-colors">개인정보처리방침</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06]">
          <p className="text-[12px] text-white/35 leading-[1.7]">
            (주)글로벌알파미디어 · 대표: <span className="text-white/25">변경필요</span>
            <span className="mx-2 text-white/20">|</span>
            사업자등록번호: <span className="text-white/25">변경필요</span>
            <span className="mx-2 text-white/20">|</span>
            주소: 서울특별시 <span className="text-white/25">변경필요</span>
          </p>
          <p className="mt-2 text-[11px] text-white/25">
            &copy; 2025 Global Alpha Media Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

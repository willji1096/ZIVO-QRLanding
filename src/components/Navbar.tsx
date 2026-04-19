import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { label: '서비스 소개', href: '#solution' },
  { label: '주요 기능', href: '#features' },
  { label: '도입 과정', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-black/[0.05]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[60px] md:h-[68px]">
        <a href="#" className="flex items-center gap-2">
          <img
            src={scrolled ? '/logo/zivo-logo-dark.svg' : '/logo/zivo-logo-white.svg'}
            alt="zivo"
            className="h-[22px] w-auto transition-opacity"
            draggable={false}
          />
          <span className={`text-[14px] font-bold tracking-[-0.01em] transition-colors duration-300 ${
            scrolled ? 'text-[#1A5DF7]' : 'text-white/90'
          }`}>
            QR
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[14px] font-semibold transition-colors duration-200 hover:text-[#1A5DF7] ${
                scrolled ? 'text-[#475569]' : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="group h-10 pl-5 pr-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-white bg-[#1A5DF7] rounded-lg hover:bg-[#1549D4] active:scale-[0.96] transition-[background-color,transform] duration-150 shadow-[0_6px_18px_rgba(26,93,247,0.3)]"
          >
            도입 신청
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
        </div>

        <button className="md:hidden p-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
          {menuOpen ? (
            <X className="text-[#0F172A]" size={22} />
          ) : (
            <Menu className="text-[#0F172A]" size={22} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#F1F5F9]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] font-medium text-[#334155] hover:text-[#1A5DF7] py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="mt-2 h-11 flex items-center justify-center text-[14px] font-bold text-white bg-[#1A5DF7] rounded-lg"
            >
              도입 신청
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

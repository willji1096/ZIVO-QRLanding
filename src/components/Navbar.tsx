import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: '서비스 소개', href: '#solution' },
  { label: '주요 기능', href: '#features' },
  { label: '도입 후기', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[56px] md:h-[64px]">
        <a href="#" className="flex items-center">
          <span className={`text-[18px] font-extrabold tracking-[-0.01em] transition-colors duration-300 ${
            scrolled ? 'text-[#0F172A]' : 'text-white'
          }`}>
            ZIVO<span className="text-[#1A5DF7]"> QR</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium transition-colors duration-200 hover:text-[#1A5DF7] ${
                scrolled ? 'text-[#64748B]' : 'text-white/60'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="h-9 px-5 inline-flex items-center text-[13px] font-semibold text-white bg-[#1A5DF7] rounded-lg hover:bg-[#1549D4] transition-colors"
          >
            무료 도입 신청
          </a>
        </div>

        <button className="md:hidden p-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className={scrolled ? 'text-[#0F172A]' : 'text-white'} size={22} />
          ) : (
            <Menu className={scrolled ? 'text-[#0F172A]' : 'text-white'} size={22} />
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
              className="mt-2 h-11 flex items-center justify-center text-[14px] font-semibold text-white bg-[#1A5DF7] rounded-lg"
            >
              무료 도입 신청
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

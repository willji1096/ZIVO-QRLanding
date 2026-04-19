import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const COLORS = [
  { name: 'Signal Blue', hex: '#1A5DF7' },
  { name: 'Deep Navy', hex: '#1E3A8A' },
  { name: 'Terracotta', hex: '#C0583B' },
  { name: 'Sage Green', hex: '#6C8B6E' },
  { name: 'Forest', hex: '#2F5A3A' },
  { name: 'Warm Beige', hex: '#D9C9A8' },
  { name: 'Cream', hex: '#F3ECDC' },
  { name: 'Charcoal', hex: '#1C1C1E' },
  { name: 'Slate', hex: '#64748B' },
  { name: 'Pure White', hex: '#FFFFFF' },
]

export function QRShowcase() {
  const imgRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="relative max-w-[1120px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[11px] font-bold text-[#94A3B8] tracking-[0.3em] uppercase mb-3">
            Sticker — 10 Colors
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.05] tracking-[-0.025em]">
            매장 인테리어에 맞춰 컬러를 고르세요.
          </h2>
          <p className="mt-6 text-[15px] md:text-[17px] text-[#64748B] font-medium max-w-xl mx-auto leading-[1.7]">
            한정식에는 네이비, 카페에는 크림, 모던 매장에는 차콜. 테이블 위 인테리어 소품처럼 어울리게.
          </p>
        </motion.div>

        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(15,23,42,0.2),0_0_0_1px_rgba(15,23,42,0.05)] aspect-[16/9]"
        >
          <motion.img
            src="/images/qr-showcase.jpg"
            alt="ZIVO QR 스탠드 10가지 색상 쇼케이스"
            className="absolute inset-x-0 -top-[6%] w-full h-[112%] object-cover"
            style={{ y: imgY }}
            loading="lazy"
          />
        </motion.div>

        {/* 컬러칩 그리드 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 md:mt-14 grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3 md:gap-4"
        >
          {COLORS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className="w-full aspect-square rounded-xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: c.hex,
                  boxShadow: c.hex.toLowerCase() === '#ffffff'
                    ? '0 0 0 1px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.05)'
                    : '0 6px 16px rgba(15,23,42,0.12)',
                }}
              />
              <span className="text-[11px] md:text-[12px] font-semibold text-[#475569] text-center leading-tight">
                {c.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-[13px] text-[#64748B] font-medium">
          *실제 제작·배송 모두 <span className="font-bold text-[#0F172A]">도입비용 0원에 포함</span>됩니다.
        </p>
      </div>
    </section>
  )
}

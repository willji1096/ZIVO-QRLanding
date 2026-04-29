import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import type { MotionValue } from 'motion/react'
import { useRef } from 'react'

/**
 * QR 카드 디자인 레퍼런스:
 * Figma https://www.figma.com/design/o1EaxsOOYnulzppz3qSZVz/?node-id=36-1264
 * 워딩: "zivo" 로고(v=노랑 #FFB800) + "Scan to Order" + "외국인 전용"
 */

const QR_PATTERN = [
  1,1,1,0,1,0,1,1,1,
  1,0,1,1,0,1,1,0,1,
  1,1,1,0,1,0,1,1,1,
  0,1,0,1,1,0,1,0,1,
  1,0,1,0,1,1,0,1,0,
  0,1,1,1,0,1,1,0,1,
  1,1,1,0,1,0,1,1,1,
  1,0,1,1,0,1,0,0,1,
  1,1,1,0,1,1,1,0,1,
]

function QRCode({ color = '#0F172A', bg = '#ffffff' }: { color?: string; bg?: string }) {
  return (
    <div
      className="aspect-square h-full max-w-full rounded-[10px] p-[9px]"
      style={{ backgroundColor: bg }}
    >
      <div className="w-full h-full grid grid-cols-9 grid-rows-9 gap-[2px]">
        {QR_PATTERN.map((filled, i) => (
          <div
            key={i}
            className="rounded-[1.5px]"
            style={{ backgroundColor: filled ? color : `${color}14` }}
          />
        ))}
      </div>
    </div>
  )
}

interface CardProps {
  bg: string
  logoSrc: string // 로고 SVG 경로
  subTextColor: string
  bottomTextColor: string
  qrColor: string
  qrBg: string
  border?: string
  highlight?: string
}

function QRCard({
  bg,
  logoSrc,
  subTextColor,
  bottomTextColor,
  qrColor,
  qrBg,
  border,
  highlight,
}: CardProps) {
  return (
    <div
      className="relative w-[252px] h-[394px] rounded-[26px] px-6 pt-[28px] pb-[24px] flex flex-col items-center overflow-hidden"
      style={{
        backgroundColor: bg,
        border: border ?? 'none',
      }}
    >
      {highlight && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-28 pointer-events-none"
          style={{ background: highlight }}
        />
      )}

      <img
        src={logoSrc}
        alt="zivo"
        className="relative h-[44px] w-auto"
        draggable={false}
      />

      <span
        className={`relative mt-3.5 text-[22px] font-extrabold tracking-[0.10em] uppercase whitespace-nowrap ${subTextColor}`}
      >
        Scan to Order
      </span>

      <div className="relative w-full flex-1 min-h-0 flex items-center justify-center mt-4">
        <QRCode color={qrColor} bg={qrBg} />
      </div>

      <span className={`relative mt-4 text-[20px] font-extrabold tracking-[0.02em] ${bottomTextColor}`}>
        외국인 전용
      </span>
    </div>
  )
}

const CARDS = {
  blue: {
    bg: '#1A5DF7',
    logoSrc: '/logo/zivo-logo-white.svg',
    subTextColor: 'text-white/90',
    bottomTextColor: 'text-white/85',
    qrColor: '#0F172A',
    qrBg: '#ffffff',
    highlight: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)',
  },
  cream: {
    bg: '#F3ECDC',
    logoSrc: '/logo/zivo-logo-dark.svg',
    subTextColor: 'text-[#64748B]',
    bottomTextColor: 'text-[#64748B]',
    qrColor: '#0F172A',
    qrBg: '#FFFFFF',
    border: '1px solid #E7DFCB',
    highlight: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)',
  },
  charcoal: {
    bg: '#1C1C1E',
    logoSrc: '/logo/zivo-logo-white.svg',
    subTextColor: 'text-white/70',
    bottomTextColor: 'text-white/65',
    qrColor: '#0F172A',
    qrBg: '#FFFFFF',
    highlight: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)',
  },
}

// 마우스 위치에 기반한 틸트 카드 래퍼
function TiltedCard({
  mouseX,
  mouseY,
  depth,
  top,
  left,
  idleDelay,
  idleAmp,
  baseRotateY,
  baseRotateX,
  baseRotateZ,
  shadow,
  children,
}: {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  depth: number // 0 (앞) ~ 1 (뒤). 뒤로 갈수록 반응 감소
  top: number
  left: number
  idleDelay: number
  idleAmp: number
  baseRotateY: number
  baseRotateX: number
  baseRotateZ: number
  shadow: string
  children: React.ReactNode
}) {
  // 깊이에 따라 틸트 강도 차등 (앞 카드 더 크게 반응)
  const intensity = 1 - depth * 0.55
  const rotY = useTransform(mouseX, [-1, 1], [-16 * intensity, 16 * intensity])
  const rotX = useTransform(mouseY, [-1, 1], [10 * intensity, -10 * intensity])
  const trX = useTransform(mouseX, [-1, 1], [-10 * intensity, 10 * intensity])
  const trY = useTransform(mouseY, [-1, 1], [-6 * intensity, 6 * intensity])

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 + depth * 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: depth * 0.18,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="absolute"
      style={{
        top,
        left,
        transformStyle: 'preserve-3d',
        rotateY: useTransform(rotY, (v) => v + baseRotateY),
        rotateX: useTransform(rotX, (v) => v + baseRotateX),
        rotateZ: baseRotateZ,
        x: trX,
        y: trY,
        filter: shadow,
      }}
    >
      <motion.div
        animate={{ y: [0, -idleAmp, 0] }}
        transition={{
          duration: 4.6 + depth * 0.6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: idleDelay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function QRCardStack() {
  const ref = useRef<HTMLDivElement | null>(null)

  // -1 ~ 1 범위로 정규화된 마우스 좌표
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mouseX = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.4 })
  const mouseY = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.4 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
    rawX.set(Math.max(-1, Math.min(1, nx)))
    rawY.set(Math.max(-1, Math.min(1, ny)))
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[420px] h-[560px] hidden lg:block"
      style={{ perspective: '1400px', perspectiveOrigin: '50% 45%' }}
    >
      {/* 바닥 그림자 */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 bottom-[2px] w-[340px] h-4 rounded-[50%] blur-[14px] opacity-[0.18] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #0F172A 0%, transparent 70%)' }}
      />

      {/* 뒤 — 차콜 */}
      <TiltedCard
        mouseX={mouseX}
        mouseY={mouseY}
        depth={1}
        top={108}
        left={126}
        idleDelay={0.6}
        idleAmp={4}
        baseRotateY={-18}
        baseRotateX={10}
        baseRotateZ={2}
        shadow="drop-shadow(0 18px 28px rgba(15,23,42,0.16)) drop-shadow(0 4px 10px rgba(0,0,0,0.08))"
      >
        <QRCard {...CARDS.charcoal} />
      </TiltedCard>

      {/* 중간 — 크림 */}
      <TiltedCard
        mouseX={mouseX}
        mouseY={mouseY}
        depth={0.5}
        top={68}
        left={68}
        idleDelay={0.3}
        idleAmp={6}
        baseRotateY={-14}
        baseRotateX={12}
        baseRotateZ={1.5}
        shadow="drop-shadow(0 22px 34px rgba(15,23,42,0.16)) drop-shadow(0 6px 14px rgba(0,0,0,0.08))"
      >
        <QRCard {...CARDS.cream} />
      </TiltedCard>

      {/* 앞 — 블루 */}
      <TiltedCard
        mouseX={mouseX}
        mouseY={mouseY}
        depth={0}
        top={32}
        left={10}
        idleDelay={0}
        idleAmp={8}
        baseRotateY={-10}
        baseRotateX={12}
        baseRotateZ={1}
        shadow="drop-shadow(0 22px 32px rgba(26,93,247,0.18)) drop-shadow(0 8px 14px rgba(15,23,42,0.08))"
      >
        <QRCard {...CARDS.blue} />
      </TiltedCard>
    </div>
  )
}

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

interface WideBreakProps {
  variant: 'tourism' | 'language' | 'sticker'
}

const CONTENT = {
  tourism: {
    eyebrow: '2024년 방한 외국인 1,630만 명 — 역대 최다',
    title: '한국 관광은 다시 뜨거워지고 있습니다',
    sub: '문제는 들어온 손님을 매장이 받을 준비가 됐는지입니다.',
    image: '/images/wide-tourism.jpg',
    alt: '명동 거리의 외국인 관광객 인파',
    focal: 'center 40%',
    overlay: 'linear-gradient(90deg, rgba(10,15,28,0.75) 0%, rgba(10,15,28,0.55) 50%, rgba(10,15,28,0.5) 100%)',
  },
  language: {
    eyebrow: 'Language is not the bottleneck anymore',
    title: '언어가 아니라, 손님이 먼저 찾아옵니다',
    sub: '외국인은 이미 모국어로 메뉴를 읽고, 직접 주문합니다.',
    image: '/images/wide-language.jpg',
    alt: '외국인 손님이 ZIVO QR로 한식 메뉴를 보는 모습',
    focal: 'center 30%',
    overlay: 'linear-gradient(90deg, rgba(10,15,28,0.6) 0%, rgba(10,15,28,0.3) 60%, rgba(10,15,28,0.2) 100%)',
  },
  sticker: {
    eyebrow: 'Only one sticker. That\u2019s it.',
    title: 'QR 스티커 한\u00A0장으로 매장은 글로벌이 됩니다',
    sub: '설치도, 기기도, 교체도 없습니다.',
    image: '/images/wide-sticker.jpg',
    alt: '테이블 위 ZIVO QR 스탠드 클로즈업',
    focal: 'center 55%',
    overlay: 'linear-gradient(90deg, rgba(10,15,28,0.55) 0%, rgba(10,15,28,0.35) 45%, rgba(10,15,28,0.65) 100%)',
  },
}

export function WideBreak({ variant }: WideBreakProps) {
  const c = CONTENT[variant]
  const ref = useRef<HTMLElement | null>(null)

  // 스크롤 파랄럭스 — 섹션이 뷰포트에 들어오는 동안 이미지가 더 느리게 이동
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // 이미지 컨테이너는 120% 높이, y는 -10% ~ +10% 범위로 이동
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* 배경 이미지 — 파랄럭스 */}
      <div aria-hidden className="absolute inset-0">
        <motion.div
          className="absolute inset-x-0 -top-[10%] h-[120%]"
          style={{ y: imgY }}
        >
          <img
            src={c.image}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: c.focal }}
            loading="lazy"
          />
        </motion.div>
        <div className="absolute inset-0" style={{ background: c.overlay }} />
      </div>

      <div className="relative max-w-[1120px] mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[12px] md:text-[13px] font-bold text-white/80 tracking-[0.18em] uppercase mb-5"
        >
          {c.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[30px] sm:text-[42px] md:text-[54px] font-extrabold text-white leading-[1.15] tracking-[-0.02em] max-w-3xl mx-auto drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]"
        >
          {c.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-6 text-[16px] md:text-[19px] text-white/85 font-medium max-w-xl mx-auto leading-[1.6]"
        >
          {c.sub}
        </motion.p>
      </div>
    </section>
  )
}

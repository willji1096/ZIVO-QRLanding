import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { useRef } from 'react'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export function Hero() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // 스크롤에 따라 배경 이미지가 15%까지 아래로 밀림 (천천히 빠짐)
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section ref={ref} className="relative min-h-[100vh] md:min-h-[100vh] overflow-hidden bg-[#0A0F1C]">
      {/* 배경 이미지 풀블리드 + 파랄럭스 */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ y: imgY, scale: imgScale }}
      >
        <img
          src="/images/hero.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 55%' }}
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* 가독성 오버레이 — 모바일은 위→아래, 데스크톱은 좌→우 */}
      <div
        aria-hidden
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,15,28,0.85) 0%, rgba(10,15,28,0.55) 40%, rgba(10,15,28,0.3) 65%, rgba(10,15,28,0.85) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(10,15,28,0.88) 0%, rgba(10,15,28,0.7) 25%, rgba(10,15,28,0.35) 55%, rgba(10,15,28,0) 75%)',
        }}
      />
      {/* 하단 페이드 — 다음 섹션과 자연스러운 연결 */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 md:h-48"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10,15,28,0.5) 100%)' }}
      />

      {/* 콘텐츠 */}
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 pt-28 pb-16 md:pt-36 md:pb-24 min-h-[100vh] md:min-h-[100vh] flex items-center">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* 헤드라인 */}
          <motion.h1
            variants={fadeUp}
            className="text-[40px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-extrabold text-white leading-[1.08] tracking-[-0.028em] mb-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]"
          >
            외국인 관광객 1,800만 시대,
            <br />
            <span className="text-[#7FB3FF]">한국 관광은 지금이 시작입니다.</span>
          </motion.h1>

          <motion.ul variants={fadeUp} className="flex flex-wrap gap-x-5 gap-y-2 mt-8 mb-9">
            {[
              '월 고정비 0원',
              '주문 있을 때만 수수료',
              '32개국어 자동 번역',
              '1~3일 내 도입',
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5 text-[14px] md:text-[15px] text-white/85 font-semibold">
                <Check size={16} className="text-[#7FB3FF]" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 h-[60px] pl-9 pr-8 bg-[#1A5DF7] text-white text-[17px] font-bold rounded-xl hover:bg-[#1549D4] active:scale-[0.97] transition-[background-color,transform,box-shadow] duration-200 shadow-[0_12px_36px_rgba(26,93,247,0.5)] hover:shadow-[0_16px_44px_rgba(26,93,247,0.6)]"
            >
              무료 도입 신청하기
              <ArrowRight size={19} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center h-[60px] px-8 text-white text-[17px] font-bold rounded-xl bg-white/12 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/35 active:scale-[0.97] transition-[background-color,border-color,transform] duration-200"
            >
              서비스 살펴보기
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[13px] text-white/60 font-medium"
          >
            * 승인까지 평균 1~3 영업일 소요
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}

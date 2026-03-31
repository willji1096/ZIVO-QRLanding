import { motion, useMotionValue, useSpring, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 50, stiffness: 100 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(Math.round(v).toLocaleString()))
    return unsub
  }, [spring])

  return <span ref={ref}>{display}{suffix}</span>
}

const STATS = [
  { value: 65, suffix: '%', label: '주문 처리 시간 단축' },
  { value: 230, suffix: '%', label: '외국인 매출 증가' },
  { value: 90, suffix: '%', label: '주문 오류 감소' },
  { value: 500, suffix: '+', label: '도입 매장' },
]

export function Stats() {
  return (
    <section className="py-20 sm:py-24 bg-[#1A5DF7]">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-[48px] sm:text-[60px] md:text-[72px] font-extrabold text-white tracking-[-0.03em] tabular-nums leading-none">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-[16px] sm:text-[17px] text-white/60 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'motion/react'

const CARD_ROTATE = 'rotateX(14deg) rotateY(-20deg) rotateZ(2deg)'

const QR_PATTERN = [
  1,1,1,0,1,1,1,
  1,0,1,1,1,0,1,
  1,1,1,0,1,1,1,
  0,1,0,1,0,1,0,
  1,1,1,0,1,0,1,
  1,0,1,1,0,1,1,
  1,1,1,0,1,1,1,
]

function QRCode({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`w-full aspect-square ${dark ? 'bg-[#0F172A]' : 'bg-white'} rounded-lg p-3`}>
      <div className="w-full h-full grid grid-cols-7 grid-rows-7 gap-[2px]">
        {QR_PATTERN.map((filled, i) => (
          <div key={i} className={`rounded-[1px] ${
            filled
              ? dark ? 'bg-white' : 'bg-[#0F172A]'
              : dark ? 'bg-white/15' : 'bg-[#0F172A]/10'
          }`} />
        ))}
      </div>
    </div>
  )
}

interface CardProps {
  bg: string
  logoColor: string
  textColor: string
  qrDark: boolean
  qrWrapClass: string
}

function QRCard({ bg, logoColor, textColor, qrDark, qrWrapClass }: CardProps) {
  return (
    <div className={`w-[200px] h-[270px] ${bg} rounded-2xl p-5 flex flex-col items-center gap-3 overflow-hidden`}>
      {/* ZIVO 로고 */}
      <span className={`text-[22px] font-extrabold tracking-[-0.02em] ${logoColor}`}>
        zi<span className="text-[#FFB800]">v</span>o
      </span>

      {/* Scan to Order */}
      <span className={`text-[12px] font-semibold tracking-[0.05em] ${textColor} uppercase`}>
        Scan to Order
      </span>

      {/* QR */}
      <div className={`flex-1 w-full ${qrWrapClass} rounded-lg flex items-center justify-center p-2`}>
        <QRCode dark={qrDark} />
      </div>
    </div>
  )
}

export function QRCardStack() {
  return (
    <div className="relative w-[320px] h-[380px] hidden lg:block" style={{ perspective: '1000px', perspectiveOrigin: '50% 40%' }}>
      {/* 뒤 — 다크 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute opacity-30"
        style={{ top: '70px', left: '75px', transform: CARD_ROTATE }}
      >
        <QRCard bg="bg-[#1E2128]" logoColor="text-white" textColor="text-white/60" qrDark={false} qrWrapClass="bg-white" />
      </motion.div>

      {/* 중간 — 화이트 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute opacity-60"
        style={{ top: '35px', left: '38px', transform: CARD_ROTATE }}
      >
        <QRCard bg="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]" logoColor="text-[#1A5DF7]" textColor="text-[#64748B]" qrDark={false} qrWrapClass="bg-[#F5F7FA] border border-[#E5E8EB]" />
      </motion.div>

      {/* 앞 — 블루 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute shadow-[0_4px_8px_rgba(0,0,0,0.04),0_20px_50px_rgba(0,0,0,0.12),0_40px_80px_rgba(0,0,0,0.08)]"
        style={{ top: '0px', left: '0px', transform: CARD_ROTATE }}
      >
        <QRCard bg="bg-[#1A5DF7]" logoColor="text-white" textColor="text-white/80" qrDark={false} qrWrapClass="bg-white" />
      </motion.div>
    </div>
  )
}

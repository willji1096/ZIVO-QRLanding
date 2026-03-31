import { motion } from 'motion/react'

/* Figma 에셋 URLs */
const LOGO_BLUE = 'https://www.figma.com/api/mcp/asset/649be5e4-0fbb-435a-a45b-156cffd65150'
const LOGO_WHITE = 'https://www.figma.com/api/mcp/asset/9064930e-37a9-4c29-b855-d3057d94a9b3'
const SCAN_TEXT_WHITE = 'https://www.figma.com/api/mcp/asset/848317f0-0e45-409c-9f0d-c23813864744'
const SCAN_TEXT_DARK = 'https://www.figma.com/api/mcp/asset/20d58170-d70b-4ace-807b-4326c69d180e'
const SCAN_TEXT_LIGHT = 'https://www.figma.com/api/mcp/asset/f7ca4436-53da-4003-86e7-dd02ab86c711'
const QR_BLUE = 'https://www.figma.com/api/mcp/asset/46542c3d-dfc7-4749-8872-41c8d4b32058'
const QR_WHITE = 'https://www.figma.com/api/mcp/asset/14357d99-4ac2-49f8-9a89-a53d7b94e9a2'
const QR_DARK = 'https://www.figma.com/api/mcp/asset/00c99c78-310f-4bf4-8f3a-f693141a3a9f'
const DECO_BLUE = 'https://www.figma.com/api/mcp/asset/d85d2928-89a6-4a50-a2ca-b58fb6430cf8'
const DECO_WHITE = 'https://www.figma.com/api/mcp/asset/deac06a6-9f13-4dea-a01c-5ecc000e2bee'
const DECO_DARK = 'https://www.figma.com/api/mcp/asset/9e9d65f2-721f-45e0-af04-3001ef5901bb'

const CARD_ROTATE = 'rotateX(14deg) rotateY(-20deg) rotateZ(2deg)'

interface CardProps {
  bg: string
  logo: string
  scanText: string
  qr: string
  qrBg: string
  textColor: string
  deco: string
  qrBorder?: string
}

function QRCard({ bg, logo, scanText, qr, qrBg, textColor, deco, qrBorder }: CardProps) {
  return (
    <div
      className={`w-[200px] h-[280px] ${bg} rounded-xl overflow-hidden p-5 flex flex-col gap-3 items-center relative`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* 장식 — 하단 좌측 원형 */}
      <img src={deco} alt="" className="absolute -left-9 top-[147px] w-[280px] h-[280px] pointer-events-none" />

      {/* ZIVO 로고 */}
      <img src={logo} alt="ZIVO" className="relative w-[64px] h-[27px] object-contain" />

      {/* Scan to Order */}
      <img src={scanText} alt="Scan to Order" className="relative w-[115px] h-[13px] object-contain" />

      {/* QR 코드 */}
      <div className={`relative w-full flex-1 ${qrBg} ${qrBorder || ''} rounded-lg flex items-center justify-center p-3`}>
        <img src={qr} alt="QR Code" className="w-full h-full object-contain" />
      </div>

      {/* 외국인 전용 */}
      <span className={`relative text-[18px] font-bold tracking-[-0.36px] ${textColor}`}>
        외국인 전용
      </span>
    </div>
  )
}

export function QRCardStack() {
  return (
    <div className="relative w-[340px] h-[400px] hidden lg:block" style={{ perspective: '1000px', perspectiveOrigin: '50% 40%' }}>
      {/* 뒤 — 다크 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute"
        style={{ top: '70px', left: '80px', transform: CARD_ROTATE }}
      >
        <div className="opacity-40">
          <QRCard
            bg="bg-[#1E2128]"
            logo={LOGO_WHITE}
            scanText={SCAN_TEXT_LIGHT}
            qr={QR_DARK}
            qrBg="bg-white"
            textColor="text-white"
            deco={DECO_DARK}
          />
        </div>
      </motion.div>

      {/* 중간 — 화이트 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute"
        style={{ top: '35px', left: '40px', transform: CARD_ROTATE }}
      >
        <div className="opacity-70">
          <QRCard
            bg="bg-white"
            logo={LOGO_BLUE}
            scanText={SCAN_TEXT_DARK}
            qr={QR_WHITE}
            qrBg="bg-[#F5F7FA]"
            qrBorder="border border-[#E5E8EB]"
            textColor="text-[#1E2128]"
            deco={DECO_WHITE}
          />
        </div>
      </motion.div>

      {/* 앞 — 블루 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute"
        style={{ top: '0px', left: '0px', transform: CARD_ROTATE }}
      >
        <div className="shadow-[0_4px_8px_rgba(0,0,0,0.04),0_20px_50px_rgba(0,0,0,0.12),0_40px_80px_rgba(0,0,0,0.08)]">
          <QRCard
            bg="bg-[#1A5DF7]"
            logo={LOGO_WHITE}
            scanText={SCAN_TEXT_WHITE}
            qr={QR_BLUE}
            qrBg="bg-white"
            textColor="text-white"
            deco={DECO_BLUE}
          />
        </div>
      </motion.div>
    </div>
  )
}

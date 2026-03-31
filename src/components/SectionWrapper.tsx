import { motion } from 'motion/react'

interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export function SectionWrapper({ id, children, className = '', dark }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 md:py-[120px] ${dark ? 'bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] text-white' : 'bg-white'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1280px] mx-auto px-6 lg:px-12"
      >
        {children}
      </motion.div>
    </section>
  )
}

import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

interface FormData {
  storeName: string
  contact: string
  category: string
  message: string
}

export function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-16 sm:py-20 md:py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,93,247,0.15)_0%,_transparent_60%)]" />

      <div className="relative max-w-[1024px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-extrabold text-white leading-[1.1] tracking-[-0.02em]">
              지금 바로
              <br />
              시작하세요
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-white/50 leading-[1.6] max-w-md font-medium">
              망설이는 지금 이 순간에도, 경쟁 매장은 외국인 관광객의 주문을 받고 있습니다.
            </p>

            <div className="flex flex-col gap-4 mt-10">
              {[
                '도입비용 0원 (설치비·기기비 無)',
                '약정 없이 언제든 해지',
                '1~3일 내 세팅 완료',
                '전세계 언어 자동 번역',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={18} className="text-[#1A5DF7] flex-shrink-0" />
                  <span className="text-[17px] text-white/70 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="p-10 md:p-12 rounded-2xl bg-white/[0.06] border border-white/[0.1] text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
                  <Check size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-[24px] font-extrabold text-white mb-3">신청 완료</h3>
                <p className="text-[16px] text-white/50 font-medium">1~3 영업일 이내 담당자가 연락드리겠습니다.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 md:p-10 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex flex-col gap-5"
              >
                <h3 className="text-[22px] font-extrabold text-white mb-1">도입 신청</h3>

                <div>
                  <label className="text-[14px] font-semibold text-white/50 mb-1.5 block">매장명 *</label>
                  <input
                    {...register('storeName', { required: '매장명을 입력해주세요' })}
                    placeholder="예) 명동 불고기집"
                    className="w-full h-12 px-4 bg-white/[0.06] border border-white/[0.1] rounded-xl text-[16px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#1A5DF7] transition-[border-color] duration-150"
                  />
                  {errors.storeName && <span className="text-red-400 text-[13px] mt-1 block">{errors.storeName.message}</span>}
                </div>

                <div>
                  <label className="text-[14px] font-semibold text-white/50 mb-1.5 block">연락처 *</label>
                  <input
                    {...register('contact', { required: '연락처를 입력해주세요' })}
                    placeholder="010-0000-0000"
                    className="w-full h-12 px-4 bg-white/[0.06] border border-white/[0.1] rounded-xl text-[16px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#1A5DF7] transition-[border-color] duration-150"
                  />
                  {errors.contact && <span className="text-red-400 text-[13px] mt-1 block">{errors.contact.message}</span>}
                </div>

                <div>
                  <label className="text-[14px] font-semibold text-white/50 mb-1.5 block">업종</label>
                  <select
                    {...register('category')}
                    className="w-full h-12 px-4 bg-white/[0.06] border border-white/[0.1] rounded-xl text-[16px] text-white focus:outline-none focus:border-[#1A5DF7] transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#1E293B]">업종 선택</option>
                    <option value="korean" className="bg-[#1E293B]">한식</option>
                    <option value="japanese" className="bg-[#1E293B]">일식</option>
                    <option value="chinese" className="bg-[#1E293B]">중식</option>
                    <option value="western" className="bg-[#1E293B]">양식</option>
                    <option value="cafe" className="bg-[#1E293B]">카페·디저트</option>
                    <option value="bar" className="bg-[#1E293B]">주점·바</option>
                    <option value="other" className="bg-[#1E293B]">기타</option>
                  </select>
                </div>

                <div>
                  <label className="text-[14px] font-semibold text-white/50 mb-1.5 block">기타 문의사항</label>
                  <textarea
                    {...register('message')}
                    placeholder="궁금하신 점이 있으면 남겨주세요"
                    rows={3}
                    className="w-full px-4 py-3 bg-white/[0.06] border border-white/[0.1] rounded-xl text-[16px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#1A5DF7] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2.5 h-14 bg-[#1A5DF7] text-white text-[17px] font-bold rounded-xl hover:bg-[#1549D4] active:scale-[0.96] transition-[background-color,transform] duration-200 ease-out mt-1"
                >
                  도입 신청하기
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>

                <p className="text-[13px] text-white/30 text-center font-medium">
                  1~3 영업일 이내 담당자가 연락드립니다
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

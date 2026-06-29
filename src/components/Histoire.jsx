import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

const MILESTONES = [
  { year: '1998', n: 1 },
  { year: '2017', n: 2 },
  { year: '2023', n: 3 },
  { year: '2023', n: 4 },
  { year: '2024', n: 5 },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Histoire() {
  const { t } = useLang()
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-wide">
        {/* Heading */}
        <FadeUp>
          <h2
            className="text-center text-[clamp(42px,7vw,90px)] font-extralight tracking-[0.08em] uppercase mb-16 md:mb-20"
          >
            {t('histoire.title')}
          </h2>
        </FadeUp>

        {/* Timeline */}
        <FadeUp delay={0.1}>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="relative min-w-max mx-auto px-8">

              {/* Ligne horizontale absolue, centrée sur les dots */}
              <div
                className="absolute left-8 right-8 h-[1px] bg-gray-300"
                style={{ top: 'calc(32px + 5px)' }}
              />

              {/* Milestones */}
              <div className="flex justify-center gap-0">
                {MILESTONES.map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center w-[150px] md:w-[180px]"
                  >
                    {/* Année */}
                    <p className="text-[20px] font-bold mb-3 leading-none">{m.year}</p>
                    {/* Dot */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A] flex-shrink-0 relative z-10 mb-3" />
                    {/* Label */}
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-1.5">
                      {t(`histoire.m${m.n}Label`)}
                    </p>
                    {/* Description */}
                    <p className="text-[11px] text-[#666] leading-snug font-light px-2">
                      {t(`histoire.m${m.n}Desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

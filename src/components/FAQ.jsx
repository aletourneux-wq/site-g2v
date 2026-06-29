import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

/* Les questions/réponses sont dans le dictionnaire i18n (faq.q1..q4 / faq.a1..a4) */
const FAQ_KEYS = [1, 2, 3, 4]

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

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const { t } = useLang()

  return (
    <section className="section-pad bg-white">
      {/* Tout le bloc FAQ est centré */}
      <div className="container-wide flex flex-col items-center">
        {/* Titre — centré */}
        <FadeUp>
          <h2
            className="text-[clamp(56px,9vw,110px)] font-extralight tracking-tight mb-12 md:mb-16 text-center"
            style={{ lineHeight: 1 }}
          >
            FAQ
          </h2>
        </FadeUp>

        {/* Accordion — centré, largeur max fixe */}
        <FadeUp delay={0.08}>
          <div className="w-full max-w-[680px]">
            {FAQ_KEYS.map((n, i) => (
              <div key={n} className="border-t border-gray-200 last:border-b">
                <button
                  className="w-full flex items-start justify-between py-5 text-left gap-6 group"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-[14px] font-medium leading-snug flex-1 group-hover:text-[#003DA5] transition-colors">
                    {t(`faq.q${n}`)}
                  </span>
                  <span
                    className="flex-shrink-0 mt-0.5 text-[20px] text-[#003DA5] transition-transform duration-300 select-none"
                    style={{ transform: open === i ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[13px] font-light text-[#555] leading-relaxed">
                        {t(`faq.a${n}`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

const PEOPLE = [
  { img: '/accueil/rencontre-betak.jpg',  name: 'Alexandre de Betak', key: 'betak' },
  { img: '/accueil/rencontre-hamizi.jpg', name: 'Sarah Hamizi',       key: 'hamizi' },
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

export default function Rencontres() {
  const { t } = useLang()
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        {/* Heading */}
        <FadeUp>
          <h2 className="text-display mb-12 md:mb-16">{t('rencontres.title')}</h2>
        </FadeUp>

        {/* Cards */}
        <div className="bg-[#F5F5F3] p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {PEOPLE.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 flex-shrink-0 group cursor-pointer">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.08]"
                    />
                  </div>
                  <h3 className="text-[16px] font-semibold mb-2">{p.name}</h3>
                  <p className="text-[13px] font-light text-[#555] leading-relaxed mb-5 max-w-[280px]">
                    {t(`rencontres.${p.key}`)}
                  </p>
                  <Link
                    to="/temoignages"
                    className="text-[11px] tracking-[0.14em] uppercase font-medium hover:text-[#003DA5] transition-colors inline-flex items-center gap-1"
                  >
                    {t('rencontres.more')}
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <FadeUp delay={0.2}>
            <div className="text-center mt-12">
              <Link to="/temoignages" className="btn-primary">{t('rencontres.cta')}</Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

const DOMAINS = [
  { label: 'RETAIL',             img: "/domaines/retail.jpg", alt: 'Aménagement boutique retail G2V' },
  { label: 'OFFICE',             img: "/domaines/office.jpg", alt: 'Aménagement espace bureau G2V' },
  { label: 'HOME',               img: "/domaines/home.jpg",   alt: 'Rénovation intérieure résidentielle G2V' },
  { label: 'FASHION SHOW',       img: '/domaines/fashion-show.png',  alt: 'Scénographie défilé de mode G2V', slug: 'fashion-show' },
  { label: 'SHOWROOM ET POP UP', img: '/domaines/showroom.jpg',   alt: 'Création showroom et boutique éphémère G2V' },
  { label: 'EXHIBITION',         img: "/domaines/exhibition.webp", alt: 'Aménagement espace exposition G2V' },
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

export default function Domaines() {
  const { t } = useLang()
  return (
    <section id="metiers" className="section-pad bg-white">
      <div className="container-wide">
        {/* Heading */}
        <FadeUp>
          <h2 className="text-display text-center mb-12 md:mb-16">
            {t('domaines.title')}
          </h2>
        </FadeUp>

        {/* 3×2 grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {DOMAINS.map((d, i) => {
            const Wrapper = d.slug ? Link : 'div'
            const wrapperProps = d.slug ? { to: `/domaines/${d.slug}` } : {}
            return (
              <FadeUp key={d.label} delay={i * 0.07}>
                <Wrapper {...wrapperProps} className="relative block overflow-hidden group cursor-pointer aspect-square">
                  <img
                    src={d.img}
                    alt={d.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-0 inset-x-0 flex justify-center pb-4">
                    <span className="text-white text-[10px] tracking-[0.22em] font-medium uppercase">
                      {d.label}
                    </span>
                  </div>
                </Wrapper>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

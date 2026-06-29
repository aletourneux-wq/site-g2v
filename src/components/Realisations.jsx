import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

const PROJECTS = [
  { id: 'celine',   label: 'CÉLINE',         img: "/realisations/home-celine.jpg",        featured: true },
  { id: 'pergolese',label: 'PERGOLESE',       img: "/realisations/home-pergolese.jpg", href: '/realisations/pergolese' },
  { id: 'jpg',      label: 'JPG',             img: "/realisations/home-jpg.jpg" },
  { id: 'soixante', label: 'SOIXAN7E QUIN5E', img: "/realisations/soixante-quinze.jpg" },
  { id: 'lvmh',     label: 'LVMH PRIZE',      img: "/realisations/home-lvmh.jpg" },
]

const STATS = [
  { to: 350, suffix: '',  key: 'statProjects' },
  { to: 100, suffix: '%', key: 'statEngaged' },
]

/* ── Count-up animé au scroll ── */
function CountUp({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] })
    }
  }, [inView]) // eslint-disable-line

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  )
}

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

export default function Realisations() {
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()
  const { t } = useLang()

  const getWidth = (id) => {
    if (hovered === null) return '20%'
    return hovered === id ? '40%' : '15%'
  }

  return (
    <section id="realisations" className="section-pad">

      {/* Heading */}
      <div className="container-wide text-center mb-12">
        <FadeUp>
          <h2 className="text-display mb-4">{t('realisations.title')}</h2>
          <p className="text-[14px] text-[#555] font-light max-w-[480px] mx-auto leading-relaxed">
            {t('realisations.subtitle')}
          </p>
        </FadeUp>
      </div>

      {/* Accordéon horizontal */}
      <FadeUp delay={0.1}>
        <div
          className="flex h-[260px] md:h-[320px] gap-[3px] w-full"
          onMouseLeave={() => setHovered(null)}
        >
          {PROJECTS.map((p) => {
            const isActive = hovered === p.id

            return (
              <motion.div
                key={p.id}
                className="relative overflow-hidden cursor-pointer flex-shrink-0"
                animate={{ width: getWidth(p.id) }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHovered(p.id)}
                onClick={() => p.href && navigate(p.href)}
              >
                <img
                  src={p.img}
                  alt={p.label}
                  className="w-full h-full object-cover"
                  style={{
                    filter: isActive
                      ? p.featured
                        ? 'grayscale(20%) sepia(15%) brightness(0.96)'
                        : 'grayscale(0%) brightness(1.04)'
                      : 'grayscale(100%)',
                    transition: 'filter 0.5s ease',
                    scale: isActive ? 1.03 : 1,
                  }}
                />
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.05) 55%, rgba(0,0,0,0) 100%)'
                      : 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 55%)',
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 overflow-hidden">
                  <p className="text-white text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-medium whitespace-nowrap">
                    {p.label}
                  </p>
                  <motion.p
                    className="text-white/65 text-[10px] mt-1 tracking-wider whitespace-nowrap"
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                    transition={{ duration: 0.28, delay: isActive ? 0.22 : 0 }}
                  >
                    {t('realisations.more')}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </FadeUp>

      {/* CTA */}
      <FadeUp delay={0.15}>
        <div className="text-center mt-10">
          <Link to="/realisations" className="btn-primary">{t('realisations.cta')}</Link>
        </div>
      </FadeUp>

      {/* Stats avec count-up */}
      <div className="container-wide mt-16">
        <div className="flex items-center justify-center gap-16 md:gap-24">
          {STATS.map(({ to, suffix, key }, i) => (
            <div key={key} className="flex items-center gap-16 md:gap-24">
              <FadeUp>
                <div className="text-center">
                  <p className="text-[42px] md:text-[52px] font-bold text-[#003DA5] leading-none">
                    <CountUp to={to} suffix={suffix} />
                  </p>
                  <p className="text-[10px] tracking-[0.22em] uppercase mt-2 text-[#555]">{t(`realisations.${key}`)}</p>
                </div>
              </FadeUp>
              {i < STATS.length - 1 && <div className="w-[1px] h-12 bg-gray-300" />}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

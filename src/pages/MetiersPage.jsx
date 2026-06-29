import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UnProjet from '../components/UnProjet'
import { useLang } from '../i18n/LanguageContext'

const UNIVERS = [
  { id: 'evenements', labelKey: 'nav.evenements', subKey: 'metiersHub.evSubtitle', descKey: 'metiersHub.evDesc', img: "/metiers/hero-evenements.png", href: '/metiers/evenements' },
  { id: 'travaux',    labelKey: 'nav.travaux',    subKey: 'metiersHub.trSubtitle', descKey: 'metiersHub.trDesc', img: "/metiers/hero-travaux.jpg",  href: '/metiers/travaux' },
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

export default function MetiersPage() {
  const { t } = useLang()
  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
          <img
            src="/realisations/g2v-works.jpg"
            alt="G2V Métiers"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative text-center">
            <motion.p
              className="text-[11px] tracking-[0.3em] uppercase text-white/60 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {t('metiersHub.eyebrow')}
            </motion.p>
            <motion.h1
              className="uppercase text-white"
              style={{ fontSize: 'clamp(34px, 7vw, 96px)', fontWeight: 100, letterSpacing: '0.1em', lineHeight: 1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {t('metiersHub.title')}
            </motion.h1>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-20 md:py-28">
          <FadeUp>
            <div className="container-wide max-w-[680px] text-center">
              <h2
                className="mb-6 leading-tight"
                style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 300, letterSpacing: '-0.01em' }}
              >
                {t('metiersHub.introTitle')}
              </h2>
              <p className="text-[14px] text-[#555] font-light leading-relaxed mb-4">
                {t('metiersHub.intro1')}
              </p>
              <p className="text-[14px] text-[#555] font-light leading-relaxed">
                {t('metiersHub.intro2')}
              </p>
            </div>
          </FadeUp>
        </section>

        {/* ── Deux univers (cartes full-image) ── */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {UNIVERS.map((u, i) => (
            <FadeUp key={u.id} delay={i * 0.1}>
              <Link to={u.href} className="block">
                <motion.div
                  className="relative h-[70vh] overflow-hidden cursor-pointer"
                  whileHover="hovered"
                >
                  <motion.img
                    src={u.img}
                    alt={u.label}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'grayscale(100%)' }}
                    variants={{ hovered: { filter: 'grayscale(0%)', scale: 1.04 } }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-white/55 text-[10px] tracking-[0.28em] uppercase mb-3">{t(u.subKey)}</p>
                    <h3
                      className="text-white font-light mb-4"
                      style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', letterSpacing: '0.04em' }}
                    >
                      {t(u.labelKey)}
                    </h3>
                    <p className="text-white/65 text-[13px] font-light leading-relaxed max-w-[300px] mb-6">
                      {t(u.descKey)}
                    </p>
                    <motion.span
                      className="text-[11px] tracking-[0.18em] uppercase text-white/70 border-b border-white/35 pb-0.5"
                      variants={{ hovered: { color: 'rgba(255,255,255,1)', borderColor: 'rgba(255,255,255,0.8)' } }}
                      transition={{ duration: 0.3 }}
                    >
                      {t('common.more')}
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            </FadeUp>
          ))}
        </section>

        {/* ── Contact ── */}
        <UnProjet />

      </main>

      <Footer />
    </div>
  )
}

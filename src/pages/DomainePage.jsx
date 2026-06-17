import { useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UnProjet from '../components/UnProjet'
import { getDomaine } from '../data/domaines'

/* ── FadeUp ── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function DomainePage() {
  const { slug } = useParams()
  const domaine = getDomaine(slug)

  /* Slug inconnu ou non encore rempli → retour accueil */
  if (!domaine) return <Navigate to="/" replace />

  const { metier, heroTitle, hero, title, intro, blocks, realisations } = domaine

  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative h-[58vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
          <img
            src={hero}
            alt={heroTitle}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative text-center px-6">
            {metier && (
              <motion.p
                className="text-[11px] tracking-[0.28em] uppercase text-white/60 mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/metiers" className="hover:text-white transition-colors duration-200">Métiers</Link>
                <span className="mx-2">·</span>
                <Link to={metier.href} className="hover:text-white transition-colors duration-200">{metier.label}</Link>
              </motion.p>
            )}
            <motion.h1
              className="uppercase text-white"
              style={{ fontSize: 'clamp(34px, 7vw, 96px)', fontWeight: 100, letterSpacing: '0.1em', lineHeight: 1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {heroTitle}
            </motion.h1>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-16 md:py-24">
          <FadeUp>
            <div className="container-wide max-w-[760px] text-center">
              <h2
                className="mb-8 whitespace-pre-line"
                style={{ fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 100, letterSpacing: '-0.01em', lineHeight: 1.1 }}
              >
                {title}
              </h2>
              <p className="text-[14px] text-[#555] font-light leading-relaxed">
                {intro}
              </p>
            </div>
          </FadeUp>
        </section>

        {/* ── Blocs alternés image / texte ── */}
        {blocks.map((b, i) => (
          <FadeUp key={i}>
            <section className="container-wide mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Image */}
              <div className={`relative overflow-hidden group ${!b.imgLeft ? 'md:order-2' : ''}`}>
                <motion.img
                  src={b.img}
                  alt={b.caption}
                  className="w-full h-[320px] md:h-[460px] object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                {b.caption && (
                  <span className="absolute bottom-4 left-4 text-white text-[10px] tracking-[0.22em] uppercase font-medium drop-shadow">
                    {b.caption}
                  </span>
                )}
              </div>
              {/* Texte */}
              <div className={`${!b.imgLeft ? 'md:order-1 md:pr-8' : 'md:pl-8'}`}>
                <p className="text-[14px] text-[#555] font-light leading-relaxed">
                  {b.text}
                </p>
              </div>
            </section>
          </FadeUp>
        ))}

        {/* ── Explorez nos réalisations ── */}
        <section className="container-wide py-10 md:py-16">
          <FadeUp>
            <h2 className="text-display text-center mb-12 md:mb-16">
              Explorez nos réalisations
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto">
            {realisations.map((r, i) => (
              <FadeUp key={r.label} delay={i * 0.08}>
                <Link to="/realisations" className="block group text-center">
                  <div className="relative overflow-hidden aspect-[4/5] mb-4">
                    <img
                      src={r.img}
                      alt={r.label}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500"
                    />
                  </div>
                  <p className="text-[11px] tracking-[0.22em] uppercase font-medium group-hover:text-[#003DA5] transition-colors">
                    {r.label}
                  </p>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="text-center mt-12 md:mt-14">
              <Link to="/realisations" className="btn-primary">En voir plus</Link>
            </div>
          </FadeUp>
        </section>

        {/* ── Contact ── */}
        <UnProjet />

      </main>

      <Footer />
    </div>
  )
}

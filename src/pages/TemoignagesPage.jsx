import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UnProjet from '../components/UnProjet'
import { RENCONTRES } from '../data/rencontres'

/* ── FadeUp ── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Carte rencontre ── */
function RencontreCard({ rencontre, index }) {
  return (
    <FadeUp delay={(index % 3) * 0.08}>
      <Link to={`/temoignages/${rencontre.slug}`} className="block w-full">
        <motion.div
          whileHover="hovered"
          className="relative overflow-hidden aspect-[4/5] cursor-pointer"
        >
          {/* Image — zoom léger au survol (desktop) */}
          <motion.img
            src={rencontre.img}
            alt={rencontre.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
            variants={{ hovered: { filter: 'grayscale(0%)', scale: 1.05 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            style={{ opacity: 0.85 }}
            variants={{ hovered: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
          />

          {/* Texte */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white/70 text-[10px] tracking-[0.22em] uppercase mb-1.5">
              {rencontre.role}
            </p>
            <p className="text-white text-[18px] font-medium leading-tight">
              {rencontre.name}
            </p>
            {/* En savoir plus — visible mobile, apparaît au survol desktop */}
            <motion.span
              className="inline-flex items-center gap-1.5 text-white text-[11px] tracking-[0.16em] uppercase mt-3 md:opacity-0 md:translate-y-1"
              variants={{ hovered: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              En savoir plus <span aria-hidden="true">→</span>
            </motion.span>
          </div>
        </motion.div>
      </Link>
    </FadeUp>
  )
}

export default function TemoignagesPage() {
  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="py-20 md:py-28">
          <div className="container-wide text-center">
            <FadeUp>
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#999] mb-5">
                G2V — Témoignages
              </p>
              <h1
                className="uppercase text-center mb-8"
                style={{ fontSize: 'clamp(32px, 7vw, 96px)', fontWeight: 100, letterSpacing: '0.08em', lineHeight: 1 }}
              >
                Rencontres
              </h1>
              <p className="text-[14px] text-[#555] font-light max-w-[600px] mx-auto leading-relaxed">
                Derrière chaque projet, il y a une rencontre. Des femmes et des hommes qui nous ont
                confié leurs espaces, leurs envies, leurs rêves. À travers ces témoignages, découvrez
                celles et ceux qui font confiance à G2V — et ce qu'ils retiennent de l'aventure.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Grille des rencontres ── */}
        <section className="container-wide pb-24 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {RENCONTRES.map((r, i) => (
              <RencontreCard key={r.slug} rencontre={r} index={i} />
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <UnProjet />

      </main>

      <Footer />
    </div>
  )
}

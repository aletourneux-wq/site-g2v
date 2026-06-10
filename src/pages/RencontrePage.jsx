import { useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UnProjet from '../components/UnProjet'
import { getRencontre } from '../data/rencontres'

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

export default function RencontrePage() {
  const { slug } = useParams()
  const rencontre = getRencontre(slug)

  /* Slug inconnu → retour à la liste */
  if (!rencontre) return <Navigate to="/temoignages" replace />

  const { name, role, img, bio, quote, project, cta } = rencontre

  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Fil d'ariane ── */}
        <section className="container-wide pt-12 md:pt-16">
          <FadeUp>
            <Link
              to="/temoignages"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#999] hover:text-[#003DA5] transition-colors"
            >
              <span aria-hidden="true">←</span> Toutes les rencontres
            </Link>
          </FadeUp>
        </section>

        {/* ── Rencontre ── */}
        <section className="container-wide pt-10 md:pt-14 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">

            {/* Photo */}
            <FadeUp>
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={img}
                  alt={`${name} — ${role}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </FadeUp>

            {/* Contenu */}
            <FadeUp delay={0.12}>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#003DA5] mb-4">
                {role}
              </p>
              <h1
                className="mb-6"
                style={{ fontSize: 'clamp(30px, 4.5vw, 56px)', fontWeight: 200, letterSpacing: '-0.01em', lineHeight: 1.05 }}
              >
                {name}
              </h1>
              <p className="text-[14px] text-[#555] font-light leading-relaxed">
                {bio}
              </p>
            </FadeUp>
          </div>

          {/* Citation / Témoignage */}
          <FadeUp delay={0.1}>
            <blockquote className="max-w-[860px] mx-auto mt-16 md:mt-24 text-center">
              <span className="block text-[#003DA5] text-[64px] leading-none mb-4 font-serif">“</span>
              <p
                className="font-light italic text-[#2A2A2A] leading-relaxed"
                style={{ fontSize: 'clamp(18px, 2.4vw, 28px)' }}
              >
                {quote}
              </p>
              <footer className="mt-8 text-[11px] tracking-[0.18em] uppercase text-[#999]">
                {name} — {role}
              </footer>
            </blockquote>
          </FadeUp>

          {/* Projet associé — mise en avant avec visuel */}
          {project && (
            <FadeUp delay={0.15}>
              <div className="mt-16 md:mt-24">
                <p className="text-center text-[11px] tracking-[0.24em] uppercase text-[#999] mb-8">
                  Le projet réalisé par G2V
                </p>
                <Link
                  to={project.href}
                  className="group block relative overflow-hidden aspect-[16/9] max-w-[1000px] mx-auto"
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  {/* Légende */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    {project.desc && (
                      <p className="text-white/70 text-[10px] tracking-[0.22em] uppercase mb-2">
                        {project.desc}
                      </p>
                    )}
                    <p
                      className="text-white leading-tight mb-3"
                      style={{ fontSize: 'clamp(22px, 3vw, 38px)', fontWeight: 300 }}
                    >
                      {project.name}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-white text-[11px] tracking-[0.18em] uppercase border-b border-white/60 pb-0.5 group-hover:border-white transition-colors">
                      Découvrir le projet <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </div>
            </FadeUp>
          )}

          {/* CTA générique (rencontres sans projet associé) */}
          {!project && cta && (
            <FadeUp delay={0.15}>
              <div className="text-center mt-14 md:mt-16">
                <Link to={cta.href} className="btn-primary">
                  {cta.label}
                </Link>
              </div>
            </FadeUp>
          )}
        </section>

        {/* ── Contact ── */}
        <UnProjet />

      </main>

      <Footer />
    </div>
  )
}

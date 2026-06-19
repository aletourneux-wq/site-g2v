import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UnProjet from '../components/UnProjet'

const EXPERTISES = [
  { label: 'Retail', img: "/domaines/retail.jpg",  alt: 'Aménagement boutique retail G2V' },
  { label: 'Office', img: "/domaines/office.jpg",  alt: 'Aménagement espace bureau G2V' },
  { label: 'Home',   img: "/domaines/home.jpg",    alt: 'Rénovation résidentielle G2V' },
]

const SPLIT = [
  {
    img: "/realisations/paul-les-tortues/1.jpg",
    alt: 'Paul, les Tortues — aménagement retail',
    href: '/realisations/paul-les-tortues',
    projectName: 'Paul, les Tortues',
    tag: 'RETAIL & OFFICE',
    title: 'Des travaux façonnés selon votre cahier des charges',
    body: [
      "Nous proposons de nombreuses gammes de matières, renouvelées dans le respect des normes de sécurité et des exigences esthétiques de chaque projet.",
      "Chaque chantier est géré avec la même rigueur, qu'il s'agisse d'une boutique de luxe, d'un espace de bureaux ou d'un aménagement résidentiel.",
    ],
    imgLeft: true,
  },
  {
    img: '/realisations/pergolese.jpg',
    alt: 'Pergolèse — rénovation résidentielle',
    href: '/realisations/pergolese',
    projectName: 'Pergolèse',
    tag: 'HOME',
    title: 'Des espaces pensés pour durer',
    body: [
      "De la rénovation complète à l'aménagement sur mesure, G2V intervient sur tous types de chantiers avec la même exigence de qualité et le même respect des délais.",
    ],
    imgLeft: false,
  },
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

export default function TravauxPage() {
  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
          <img
            src="/metiers/header-travaux.png"
            alt="Travaux G2V"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-center">
            <motion.p
              className="text-[11px] tracking-[0.28em] uppercase text-white/60 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/metiers" className="hover:text-white transition-colors duration-200">Métiers</Link>
              <span className="mx-2">·</span>Travaux
            </motion.p>
            <motion.h1
              className="uppercase text-white"
              style={{ fontSize: 'clamp(34px, 7vw, 96px)', fontWeight: 100, letterSpacing: '0.1em', lineHeight: 1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Travaux
            </motion.h1>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-16 md:py-24">
          <FadeUp>
            <div className="container-wide max-w-[680px] text-center">
              <p className="text-[14px] text-[#555] font-light leading-relaxed mb-4">
                Nous travaillons sur des projets et réalisons des chantiers permanents en respectant
                les contraintes techniques et spécificités de chaque lieu où nous intervenons.
              </p>
              <p className="text-[14px] text-[#555] font-light leading-relaxed">
                Nos travaux sont faits selon votre cahier des charges — nous proposons de nombreuses
                gammes de matières dans le respect des normes de sécurité.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* ── Sections alternées ── */}
        {SPLIT.map((s, i) => (
          <FadeUp key={i}>
            <section className="container-wide mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Image — cliquable vers le projet si href */}
              {s.href ? (
                <Link
                  to={s.href}
                  className={`relative block overflow-hidden group ${!s.imgLeft ? 'md:order-2' : ''}`}
                >
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="w-full h-[320px] md:h-[460px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                  />
                  {/* Dégradé + nom projet + En savoir plus (laisse passer le survol) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                    <p className="text-white text-[12px] tracking-[0.22em] uppercase font-medium">
                      {s.projectName}
                    </p>
                    <span className="block text-white/0 group-hover:text-white/80 text-[10px] tracking-[0.16em] uppercase mt-1.5 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      En savoir plus →
                    </span>
                  </div>
                </Link>
              ) : (
                <div className={`overflow-hidden ${!s.imgLeft ? 'md:order-2' : ''}`}>
                  <motion.img
                    src={s.img}
                    alt={s.alt}
                    className="w-full h-[320px] md:h-[460px] object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              )}
              {/* Texte */}
              <div className={`${!s.imgLeft ? 'md:order-1 md:pr-8' : 'md:pl-8'}`}>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#003DA5] mb-5">{s.tag}</p>
                <h3
                  className="leading-tight mb-6"
                  style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 300, letterSpacing: '-0.01em' }}
                >
                  {s.title}
                </h3>
                {s.body.map((p, j) => (
                  <p key={j} className="text-[14px] text-[#555] font-light leading-relaxed mb-3">{p}</p>
                ))}
              </div>
            </section>
          </FadeUp>
        ))}

        {/* ── Sous-domaines ── */}
        <section className="container-wide mb-20 md:mb-28">
          <FadeUp>
            <p className="text-center text-[10px] tracking-[0.28em] uppercase text-[#999] mb-10">
              Explorez nos domaines d'expertise
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {EXPERTISES.map((e, i) => (
              <FadeUp key={e.label} delay={i * 0.08}>
                <div className="relative overflow-hidden group cursor-pointer aspect-[4/3]">
                  <img
                    src={e.img}
                    alt={e.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-5 inset-x-0 text-center">
                    <span className="text-white text-[10px] tracking-[0.22em] font-medium uppercase">
                      {e.label}
                    </span>
                  </div>
                </div>
              </FadeUp>
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

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

/* ── Projets ── */
const PROJECTS = [
  /* Événementiel */
  { id: 'dior',       label: 'DÉFILÉ DIOR',          category: 'Événementiel', img: '/realisations/dior.jpg'   },
  { id: 'celine',     label: 'CÉLINE',               category: 'Événementiel', img: '/realisations/celine.jpg'   },
  { id: 'tommy-now',  label: 'TOMMY NOW',            category: 'Événementiel', img: '/realisations/tommy-now.jpg'},
  { id: 'jpg',        label: 'JEAN PAUL GAULTIER',   category: 'Événementiel', img: '/realisations/jpg-fw26.jpg' },
  { id: 'chaumet',    label: 'LES MONDES DE CHAUMET', category: 'Événementiel', img: '/realisations/chaumet.jpg'},
  { id: 'lvmh',       label: 'LVMH PRIZE',           category: 'Événementiel', img: '/realisations/lvmh.jpg'  },
  { id: 'g2v',        label: 'G2V',                  category: 'Événementiel', img: '/realisations/g2v-works.jpg'},
  { id: 'acne',       label: 'ACNE STUDIO',          category: 'Événementiel', img: '/realisations/acne.png'    },
  { id: 'offwhite',   label: 'OFF WHITE',            category: 'Événementiel', img: '/realisations/offwhite.jpg'},
  /* Travaux */
  { id: 'pergolese',  label: 'PERGOLESE',            category: 'Travaux',      img: '/realisations/pergolese.jpg',  href: '/realisations/pergolese' },
  { id: 'le-marais',  label: 'LE MARAIS',            category: 'Travaux',      img: '/realisations/le-marais.jpg' },
  { id: 'montfort',   label: 'MONTFORT',             category: 'Travaux',      img: '/realisations/montfort.jpg'},
  { id: 'carven',     label: 'CARVEN',               category: 'Travaux',      img: '/realisations/carven.jpg'    },
  { id: 'messika',    label: 'MESSIKA',              category: 'Travaux',      img: '/realisations/messika.png'   },
  { id: 'cartier',    label: 'CARTIER',              category: 'Travaux',      img: '/realisations/cartier.jpg'   },
  { id: 'paul',       label: 'PAUL',                 category: 'Travaux',      img: '/realisations/paul.jpg'      },
  { id: 'soixante',   label: 'SOIXAN7E QUIN5E',      category: 'Travaux',      img: "/realisations/soixante-quinze.jpg" },
]

const FILTERS = [
  { key: 'TOUS',          label: 'Tous' },
  { key: 'Événementiel',  label: 'Événementiel' },
  { key: 'Travaux',       label: 'Travaux' },
]

/* ── FadeUp ── */
function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Card ── */
function ProjectCard({ project, index }) {
  const Wrapper = project.href ? Link : 'div'
  return (
    <Wrapper to={project.href || undefined}>
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hovered"
      className="relative overflow-hidden cursor-pointer aspect-[4/3]"
    >
      {/* Image — noir/blanc → couleur */}
      <motion.img
        src={project.img}
        alt={project.label}
        className="w-full h-full object-cover"
        style={{ filter: 'grayscale(100%)' }}
        variants={{ hovered: { filter: 'grayscale(0%)', scale: 1.05 } }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
        style={{ opacity: 0.72 }}
        variants={{ hovered: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
      />

      {/* Labels */}
      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-white text-[11px] tracking-[0.22em] uppercase font-medium">
          {project.label}
        </p>
        <motion.p
          className="text-white/70 text-[10px] mt-1.5 tracking-[0.12em]"
          style={{ opacity: 0, y: 6 }}
          variants={{ hovered: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.25, delay: 0.12 }}
        >
          Voir le projet →
        </motion.p>
      </div>
    </motion.div>
    </Wrapper>
  )
}

const BATCH = 9

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState('TOUS')
  const [displayedItems, setDisplayedItems] = useState([])
  const sentinelRef = useRef(null)
  const loadCountRef = useRef(0)

  /* Projets filtrés */
  const filtered = useMemo(() =>
    activeFilter === 'TOUS'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter),
    [activeFilter]
  )

  /* Génère un batch cyclique à partir d'un index global */
  const makeBatch = useCallback((start, pool) =>
    Array.from({ length: BATCH }, (_, i) => {
      const globalIdx = start + i
      return { ...pool[globalIdx % pool.length], _uid: globalIdx }
    }),
    []
  )

  /* Réinitialise quand le filtre change */
  useEffect(() => {
    loadCountRef.current = BATCH
    setDisplayedItems(makeBatch(0, filtered))
  }, [filtered, makeBatch])

  /* Charge le prochain batch (boucle infinie) */
  const loadMore = useCallback(() => {
    const start = loadCountRef.current
    loadCountRef.current = start + BATCH
    setDisplayedItems((prev) => [...prev, ...makeBatch(start, filtered)])
  }, [filtered, makeBatch])

  /* IntersectionObserver sur le sentinel */
  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) loadMore() },
      { threshold: 0.1 }
    )
    const timer = setTimeout(() => observer.observe(el), 400)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [loadMore])

  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="py-20 md:py-28">
          <div className="container-wide text-center">
            <FadeUp>
              <h1
                className="uppercase text-center mb-8"
                style={{ fontSize: 'clamp(34px, 7vw, 96px)', fontWeight: 100, letterSpacing: '0.1em', lineHeight: 1 }}
              >
                Réalisations
              </h1>
              <p className="text-[14px] text-[#555] font-light max-w-[540px] mx-auto leading-relaxed">
                G2V transforme vos espaces en expériences. De la scénographie événementielle
                (fashion show, pop-up, exhibition) à l'aménagement de vos lieux de vie et de
                travail (retail, office, home), explorez l'ensemble de nos réalisations.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Filtres ── */}
        <section className="container-wide mb-10">
          <div className="flex items-end gap-8 border-b border-[#E0E0E0]">
            {FILTERS.map(({ key, label }) => {
              const isActive = activeFilter === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`pb-4 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-200 border-b-2 -mb-[2px] ${
                    isActive
                      ? 'text-[#0A0A0A] border-[#0A0A0A]'
                      : 'text-[#999] border-transparent hover:text-[#0A0A0A]'
                  }`}
                >
                  {label}
                </button>
              )
            })}
            <span className="ml-auto pb-4 text-[11px] tracking-[0.12em] text-[#AAAAAA]">
              {filtered.length} projet{filtered.length > 1 ? 's' : ''}
            </span>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="container-wide pb-24 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px] md:gap-1">
            {displayedItems.map((project) => (
              <ProjectCard key={project._uid} project={project} index={project._uid % 3} />
            ))}
          </div>

          {/* Sentinel toujours présent — déclenche le prochain batch */}
          <div ref={sentinelRef} className="flex justify-center items-center py-10">
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#CCCCCC]"
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.22 }}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLang } from '../i18n/LanguageContext'

/* ── Projets ── */
const PROJECTS = [
  /* Événementiel */
  { id: 'tommy-now',  label: 'TOMMY NOW',                   category: 'Événementiel', img: '/realisations/tommy-now.jpg' },
  { id: 'lancome',    label: 'LANCÔME x PROENZA SCHOULER',  category: 'Événementiel', img: '/realisations/lancome-proenza/1.jpg' },
  { id: 'chaumet',    label: 'LES MONDES DE CHAUMET',       category: 'Événementiel', img: '/realisations/chaumet.jpg' },
  { id: 'dior',       label: 'DÉFILÉ DIOR',                 category: 'Événementiel', img: '/realisations/defile-dior/1.jpg', href: '/realisations/defile-dior' },
  { id: 'louboutin',  label: "LOUBOUTIN : L'EXHIBITION[NISTE]", category: 'Événementiel', img: '/realisations/louboutin/1.jpg' },
  { id: 'cartier',    label: 'CLASH DE CARTIER',            category: 'Événementiel', img: '/realisations/clash-de-cartier/5.jpg', href: '/realisations/clash-de-cartier' },
  /* Travaux */
  { id: 'paul',       label: 'PAUL, LES TORTUES',           category: 'Travaux',      img: '/realisations/paul-les-tortues/1.jpg', href: '/realisations/paul-les-tortues' },
  { id: 'le-marais',  label: 'LE MARAIS',                   category: 'Travaux',      img: '/realisations/le-marais.jpg' },
  { id: 'pergolese',  label: 'PERGOLÈSE',                   category: 'Travaux',      img: '/realisations/pergolese.jpg',  href: '/realisations/pergolese' },
  { id: 'montfort',   label: 'MONTFORT',                    category: 'Travaux',      img: '/realisations/montfort.jpg' },
  { id: 'saint-germain', label: 'SAINT-GERMAIN',           category: 'Travaux',      img: '/realisations/saint-germain/1.jpg' },
]

const FILTERS = [
  { key: 'TOUS',          labelKey: 'realisationsPage.filterAll' },
  { key: 'Événementiel',  labelKey: 'realisationsPage.filterEvent' },
  { key: 'Travaux',       labelKey: 'realisationsPage.filterTravaux' },
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
function ProjectCard({ project, index, t }) {
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
          {t('realisationsPage.seeProject')}
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
  const { t } = useLang()

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
                {t('realisationsPage.title')}
              </h1>
              <p className="text-[14px] text-[#555] font-light max-w-[540px] mx-auto leading-relaxed">
                {t('realisationsPage.subtitle')}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Filtres ── */}
        <section className="container-wide mb-10">
          <div className="flex items-end gap-8 border-b border-[#E0E0E0]">
            {FILTERS.map(({ key, labelKey }) => {
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
                  {t(labelKey)}
                </button>
              )
            })}
            <span className="ml-auto pb-4 text-[11px] tracking-[0.12em] text-[#AAAAAA]">
              {filtered.length} {filtered.length > 1 ? t('realisationsPage.projects') : t('realisationsPage.project')}
            </span>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="container-wide pb-24 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px] md:gap-1">
            {displayedItems.map((project) => (
              <ProjectCard key={project._uid} project={project} index={project._uid % 3} t={t} />
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

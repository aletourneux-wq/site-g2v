import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

/* ── 1 à 2 actualités mises en avant ── */
const HIGHLIGHTS = [
  {
    category: 'Événementiel',
    title: 'Les tissus qui font les grands défilés',
    excerpt:
      "Velours, organza, lin technique… Derrière chaque show de mode se cache une science textile méconnue. Découvrez comment le choix des matières transforme un espace vide en scénographie mémorable.",
    img: '/articles/tissus-hero.avif',
    date: '12 Mai 2026',
    readTime: '5 min',
    href: '/actualites/tissus-grand-defile',
  },
  {
    category: 'Coulisses',
    title: 'JPG FW26 : une nuit pour tout monter',
    excerpt:
      "Retour sur les coulisses du défilé Jean Paul Gaultier Fall/Winter 2026 — 8h de montage, 40 artisans, et un résultat à couper le souffle.",
    img: '/realisations/jpg-fw26.jpg',
    date: '3 Avril 2026',
    readTime: '4 min',
    href: '/actualites',
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

function ActualiteCard({ article, index }) {
  return (
    <FadeUp delay={index * 0.12}>
      <Link to={article.href} className="block group">
        <div className="relative overflow-hidden aspect-[16/10] mb-6">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
          />
        </div>
        <p className="text-[10px] tracking-[0.22em] uppercase text-[#003DA5] mb-3">
          {article.category}
        </p>
        <h3
          className="leading-tight mb-4 group-hover:text-[#003DA5] transition-colors duration-200"
          style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 300, letterSpacing: '-0.01em' }}
        >
          {article.title}
        </h3>
        <p className="text-[14px] text-[#555] font-light leading-relaxed mb-5">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4 mb-6 text-[10px] tracking-[0.15em] uppercase text-[#999]">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime} de lecture</span>
        </div>
        <span className="text-[11px] tracking-[0.18em] uppercase border-b border-[#0A0A0A] pb-0.5 group-hover:text-[#003DA5] group-hover:border-[#003DA5] transition-colors duration-200">
          Lire l'article →
        </span>
      </Link>
    </FadeUp>
  )
}

export default function ActualitesHighlight() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">

        {/* Titre */}
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#999] mb-4">
              G2V — Journal
            </p>
            <h2 className="text-display">Actualités</h2>
          </div>
        </FadeUp>

        {/* Bloc 2 sections (gauche / droite) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {HIGHLIGHTS.map((article, i) => (
            <ActualiteCard key={article.title} article={article} index={i} />
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.2}>
          <div className="text-center mt-14 md:mt-16">
            <Link to="/actualites" className="btn-primary">
              Toutes les actualités
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}

import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ARTICLES = [
  {
    id: 'tissus-grand-defile',
    category: 'Événementiel',
    title: 'Les tissus qui font les grands défilés',
    excerpt: 'Velours, organza, lin technique… Derrière chaque show de mode se cache une science textile méconnue. Découvrez comment le choix des matières transforme un espace vide en scénographie mémorable.',
    img: '/articles/tissus-hero.avif',
    date: '12 Mai 2026',
    readTime: '5 min',
    featured: true,
    href: '/actualites/tissus-grand-defile',
  },
  {
    id: 'jpg-fw26-coulisses',
    category: 'Coulisses',
    title: 'JPG FW26 : une nuit pour tout monter',
    excerpt: 'Retour sur les coulisses du défilé Jean Paul Gaultier Fall/Winter 2026 — 8h de montage, 40 artisans, et un résultat à couper le souffle.',
    img: '/Photo Realisations/JPG FW26 SHOW Photo.jpg',
    date: '3 Avril 2026',
    readTime: '4 min',
    href: '/actualites',
  },
  {
    id: 'renovation-pergolese',
    category: 'Travaux',
    title: 'Pergolèse : transformer un duplex en 6 semaines',
    excerpt: 'Retour sur la rénovation complète d\'un duplex de 100m² rue Pergolèse à Paris. Vintage, lumineux et entièrement sur mesure.',
    img: '/Photo Realisations/pergolese.jpg',
    date: '18 Mars 2026',
    readTime: '6 min',
    href: '/realisations/pergolese',
  },
  {
    id: 'materiaux-retail',
    category: 'Travaux',
    title: 'Aménagement retail : comment choisir ses matériaux',
    excerpt: 'Marbre, bois, métal — chaque matière raconte une histoire de marque. Guide pour des aménagements de boutiques haut de gamme.',
    img: '/Photo Realisations/montfort-3.jpg',
    date: '5 Février 2026',
    readTime: '7 min',
    href: '/actualites',
  },
  {
    id: 'lvmh-prize',
    category: 'Événementiel',
    title: 'LVMH Prize 2025 : notre implication dans l\'événement',
    excerpt: 'Structures, podiums, habillages textiles — G2V a participé à la mise en scène du LVMH Prize au siège du groupe à Paris.',
    img: '/Photo Realisations/lvmh-1.jpg',
    date: '20 Janvier 2026',
    readTime: '3 min',
    href: '/actualites',
  },
]

const FILTERS = ['Tous', 'Événementiel', 'Travaux', 'Coulisses']

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Carte article standard ── */
function ArticleCard({ article, index }) {
  return (
    <FadeUp delay={index * 0.07}>
      <Link to={article.href} className="block group">
        <div className="relative overflow-hidden aspect-[4/3] mb-4">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-600"
          />
        </div>
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#003DA5] mb-2">{article.category}</p>
          <h3 className="text-[16px] font-medium leading-snug mb-2 group-hover:text-[#003DA5] transition-colors duration-200">
            {article.title}
          </h3>
          <p className="text-[13px] text-[#777] font-light leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.15em] uppercase text-[#999]">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} de lecture</span>
          </div>
        </div>
      </Link>
    </FadeUp>
  )
}

export default function ActualitesPage() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const featured = ARTICLES.find(a => a.featured)
  const rest = ARTICLES.filter(a => !a.featured)
  const filtered = activeFilter === 'Tous'
    ? rest
    : rest.filter(a => a.category === activeFilter)

  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero titre ── */}
        <section className="py-20 md:py-28 border-b border-[#EBEBEB]">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#999] mb-5 text-center">G2V — Journal</p>
              <h1
                className="mb-6 text-center"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 200, letterSpacing: '-0.02em', lineHeight: 1.05 }}
              >
                Actualités
              </h1>
              <p className="text-[14px] text-[#555] font-light max-w-[480px] leading-relaxed text-center mx-auto">
                Coulisses de nos projets, tendances du secteur et réflexions sur l'art de construire des espaces d'exception.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Article à la une ── */}
        {featured && (
          <section className="container-wide py-14 md:py-20 border-b border-[#EBEBEB]">
            <FadeUp>
              <Link to={featured.href} className="block group">
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-14 items-center">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={featured.img}
                      alt={featured.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                    />
                    </div>
                  {/* Contenu */}
                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-[#003DA5] mb-4">{featured.category}</p>
                    <h2
                      className="leading-tight mb-5 group-hover:text-[#003DA5] transition-colors duration-200"
                      style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 400, letterSpacing: '-0.01em' }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-[14px] text-[#555] font-light leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-8 text-[10px] tracking-[0.15em] uppercase text-[#999]">
                      <span>{featured.date}</span>
                      <span>·</span>
                      <span>{featured.readTime} de lecture</span>
                    </div>
                    <span className="text-[11px] tracking-[0.18em] uppercase border-b border-[#0A0A0A] pb-0.5 group-hover:text-[#003DA5] group-hover:border-[#003DA5] transition-colors duration-200">
                      Lire l'article →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>
          </section>
        )}

        {/* ── Filtres ── */}
        <section className="container-wide pt-10 mb-10">
          <div className="flex items-end gap-6 border-b border-[#EBEBEB]">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`pb-4 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-200 border-b-2 -mb-[2px] ${
                  activeFilter === f
                    ? 'text-[#0A0A0A] border-[#0A0A0A]'
                    : 'text-[#AAAAAA] border-transparent hover:text-[#0A0A0A]'
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto pb-4 text-[11px] text-[#BBBBBB] tracking-[0.1em]">
              {filtered.length} article{filtered.length > 1 ? 's' : ''}
            </span>
          </div>
        </section>

        {/* ── Grille articles ── */}
        <section className="container-wide pb-24 md:pb-32">
          <div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            {filtered.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

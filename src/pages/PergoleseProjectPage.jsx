import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

/* ── Photos du projet ── */
const ALL_PHOTOS = [
  { src: '/realisations/pergolese/1.jpg',     alt: 'Pergolèse — chambre' },
  { src: '/realisations/pergolese/2.jpg', alt: 'Pergolèse — dressing bois' },
  { src: '/realisations/pergolese/3.jpg',      alt: 'Pergolèse — cuisine' },
  { src: '/realisations/pergolese/4.jpg',      alt: 'Pergolèse — salle de bain' },
  { src: '/realisations/pergolese/5.jpg',      alt: 'Pergolèse — séjour' },
]

/* ── Autres projets ── */
const RELATED = [
  { id: 'montfort', label: 'MONTFORT',  img: '/realisations/montfort.jpg', href: '/realisations' },
  { id: 'carven',   label: 'CARVEN',    img: '/realisations/carven.jpg',      href: '/realisations' },
  { id: 'offwhite', label: 'OFF WHITE', img: '/realisations/offwhite.jpg',    href: '/realisations' },
]

/* ══════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════ */
function Lightbox({ photos, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(() => setCurrent(i => (i - 1 + photos.length) % photos.length), [photos.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % photos.length), [photos.length])

  /* Clavier */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  /* Scroll lock */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Fond */}
      <div
        className="absolute inset-0 bg-black/92 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 z-10 text-white/70 hover:text-white transition-colors text-3xl leading-none"
        aria-label="Fermer"
      >
        ×
      </button>

      {/* Compteur */}
      <p className="absolute top-5 left-6 z-10 text-white/50 text-[11px] tracking-[0.18em]">
        {current + 1} / {photos.length}
      </p>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={photos[current].src}
          alt={photos[current].alt}
          className="relative z-10 max-h-[88vh] max-w-[88vw] object-contain shadow-2xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={e => e.stopPropagation()}
        />
      </AnimatePresence>

      {/* Flèche précédente */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 z-10 w-11 h-11 flex items-center justify-center border border-white/30 text-white/70 hover:border-white hover:text-white transition-all"
        aria-label="Précédent"
      >
        ‹
      </button>

      {/* Flèche suivante */}
      <button
        onClick={next}
        className="absolute right-4 md:right-8 z-10 w-11 h-11 flex items-center justify-center border border-white/30 text-white/70 hover:border-white hover:text-white transition-all"
        aria-label="Suivant"
      >
        ›
      </button>

      {/* Miniatures */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? 'bg-white scale-125' : 'bg-white/35 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════
   PHOTO CLIQUABLE avec loupe
══════════════════════════════════════════ */
function ZoomablePhoto({ photo, photoIndex, onClick, className, imgClassName }) {
  return (
    <motion.div
      className={`relative overflow-hidden cursor-zoom-in group ${className}`}
      onClick={() => onClick(photoIndex)}
      whileHover="hovered"
    >
      <motion.img
        src={photo.src}
        alt={photo.alt}
        className={imgClassName}
        variants={{ hovered: { scale: 1.04 } }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Overlay subtil au survol */}
      <motion.div
        className="absolute inset-0 bg-black/0"
        variants={{ hovered: { backgroundColor: 'rgba(0,0,0,0.12)' } }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

/* ── FadeUp ── */
function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Carte projet related ── */
function RelatedCard({ project }) {
  return (
    <Link to={project.href} className="block">
      <motion.div className="relative overflow-hidden cursor-pointer aspect-square" whileHover="hovered">
        <motion.img
          src={project.img}
          alt={project.label}
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)' }}
          variants={{ hovered: { filter: 'grayscale(0%)', scale: 1.06 } }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
          style={{ opacity: 0.7 }}
          variants={{ hovered: { opacity: 1 } }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-white text-[11px] tracking-[0.22em] uppercase font-medium">{project.label}</p>
          <motion.p
            className="text-white/70 text-[10px] mt-1.5 tracking-[0.14em]"
            style={{ opacity: 0, y: 6 }}
            variants={{ hovered: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.25, delay: 0.1 }}
          >
            En savoir plus →
          </motion.p>
        </div>
      </motion.div>
      <p className="text-[11px] tracking-[0.18em] uppercase font-medium text-[#0A0A0A] mt-3 text-center">
        {project.label}
      </p>
    </Link>
  )
}

/* ══════════════════════════════════════════
   PAGE PRINCIPALE
══════════════════════════════════════════ */
export default function PergoleseProjectPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={ALL_PHOTOS}
            startIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>

      <main className="pt-16">

        {/* ── Hero titre ── */}
        <section className="py-16 md:py-24 text-center container-wide">
          <motion.p
            className="text-[11px] tracking-[0.22em] uppercase text-[#999] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/realisations" className="hover:text-[#003DA5] transition-colors">Réalisations</Link>
            <span className="mx-2">·</span>Pergolèse
          </motion.p>

          <motion.h1
            className="uppercase text-center mb-8"
            style={{ fontSize: 'clamp(42px, 6vw, 82px)', fontWeight: 100, letterSpacing: '0.08em', lineHeight: 1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Pergolèse
          </motion.h1>

          <motion.div
            className="max-w-[560px] mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[14px] text-[#444] font-light leading-relaxed text-center">
              Rénovation complète d'un duplex de 100m² rue Pergolèse à Paris. Urbain et lumineux,
              ses décors marient les codes du vintage et des dernières tendances.
            </p>
            <p className="text-[12px] text-[#888] mt-3 tracking-[0.1em] text-center">
              Design : Studio Eit Hem · 2016
            </p>
          </motion.div>
        </section>

        {/* ── Grille 2×2 ── */}
        <section className="container-wide mb-2">
          <div className="grid grid-cols-2 gap-2">
            {ALL_PHOTOS.slice(0, 4).map((photo, i) => (
              <FadeUp key={photo.src} delay={i * 0.07}>
                <ZoomablePhoto
                  photo={photo}
                  photoIndex={i}
                  onClick={openLightbox}
                  className="w-full"
                  imgClassName="w-full h-[280px] md:h-[380px] object-cover"
                />
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── Photo feature (large) ── */}
        <FadeUp>
          <section className="container-wide mb-20 md:mb-28">
            <ZoomablePhoto
              photo={ALL_PHOTOS[4]}
              photoIndex={4}
              onClick={openLightbox}
              className="w-full mt-2"
              imgClassName="w-full h-[300px] md:h-[500px] object-cover"
            />
          </section>
        </FadeUp>

        {/* ── Explorez nos réalisations ── */}
        <section className="section-pad border-t border-[#E8E8E8]">
          <div className="container-wide">
            <FadeUp>
              <h2
                className="text-center mb-12 md:mb-16"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 200, letterSpacing: '-0.01em' }}
              >
                Explorez nos réalisations
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {RELATED.map((p, i) => (
                <FadeUp key={p.id} delay={i * 0.1}>
                  <RelatedCard project={p} />
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.2}>
              <div className="text-center mt-12">
                <Link to="/realisations" className="btn-primary">En voir plus</Link>
              </div>
            </FadeUp>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

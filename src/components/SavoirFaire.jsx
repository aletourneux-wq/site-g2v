import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PANELS = [
  { img: "/Photo Page d'accueil/Bloc G2V/photo savoir faire.png",  label: 'SAVOIR-FAIRE', alt: 'Savoir-faire G2V' },
  { img: "/Photo Page d'accueil/Bloc G2V/photo ADN.png",           label: 'ADN',           alt: 'ADN G2V' },
  { img: "/Photo Page d'accueil/Bloc G2V/Photo actualités.jpg",    label: 'ACTUALITÉS',    alt: 'Actualités G2V' },
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

export default function SavoirFaire() {
  const scrollRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  /* ── Drag-to-scroll ── */
  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = 'grabbing'
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const stopDragging = () => {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }

  /* ── Arrow buttons ── */
  const scrollBy = (dir) => {
    if (!scrollRef.current) return
    const panelW = scrollRef.current.clientWidth / 2
    scrollRef.current.scrollBy({ left: dir * panelW, behavior: 'smooth' })
  }

  return (
    <section id="savoirfaire" className="section-pad">

      {/* Titre + flèches */}
      <FadeUp>
        <div className="container-wide flex items-center justify-between mb-10 md:mb-14">
          <div className="flex-1" />
          <h2 className="text-display text-center flex-1">G2V</h2>
          <div className="flex-1 flex justify-end items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              className="w-9 h-9 border border-[#0A0A0A] flex items-center justify-center hover:bg-[#003DA5] hover:border-[#003DA5] hover:text-white transition-colors text-sm"
              aria-label="Précédent"
            >
              ‹
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="w-9 h-9 border border-[#0A0A0A] flex items-center justify-center hover:bg-[#003DA5] hover:border-[#003DA5] hover:text-white transition-colors text-sm"
              aria-label="Suivant"
            >
              ›
            </button>
          </div>
        </div>
      </FadeUp>

      {/* Carrousel draggable */}
      <FadeUp delay={0.1}>
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide cursor-grab select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >
          {PANELS.map((p) => (
            <div
              key={p.label}
              className="flex-shrink-0 w-full md:w-1/2 relative h-[360px] md:h-[520px] overflow-hidden group"
            >
              <img
                src={p.img}
                alt={p.alt}
                draggable="false"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-6 left-8">
                <span className="text-white text-[11px] tracking-[0.22em] font-medium uppercase">
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

    </section>
  )
}

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'


const ITEMS = [
  { img: "/competences/entreprise-generale.jpg", label: 'Entreprise Générale',   alt: 'G2V entreprise générale du bâtiment' },
  { img: "/competences/menuiserie.jpg",                                label: 'Menuiserie',            alt: 'Menuiserie haut de gamme G2V' },
  { img: "/competences/marbrerie.jpg",                                 label: 'Marbrerie',             alt: 'Marbrerie et pierre naturelle G2V' },
  { img: "/competences/miroiterie.jpg",                                label: 'Miroiterie',            alt: 'Miroiterie et verre sur mesure G2V' },
  { img: "/competences/serrurerie.jpg",                                label: 'Serrurerie & Métal',    alt: 'Serrurerie et métallerie G2V' },
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

export default function Competences() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })
    }
  }

  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        {/* Heading — centré */}
        <FadeUp>
          <div className="flex items-center justify-center mb-10 md:mb-14">
            <h2 className="text-display text-center">Nos 5 compétences</h2>
          </div>
        </FadeUp>

        {/* Carousel — centré */}
        <FadeUp delay={0.1}>
          <div className="overflow-x-auto scrollbar-hide pb-2">
            <div
              ref={scrollRef}
              className="flex gap-4 w-fit mx-auto"
            >
              {ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex-shrink-0 w-[180px] md:w-[200px] group cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-square mb-3">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <p className="text-[11px] tracking-[0.12em] uppercase text-center font-medium text-[#0A0A0A]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* CTA — centré */}
        <FadeUp delay={0.15}>
          <div className="text-center mt-10">
            <Link to="/savoir-faire" className="btn-primary">En savoir plus</Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

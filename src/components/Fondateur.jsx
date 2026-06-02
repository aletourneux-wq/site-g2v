import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

export default function Fondateur() {
  return (
    <section id="adn" className="section-pad bg-white">
      <div className="container-wide">
        <FadeUp>
          <div className="border border-[#003DA5] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo */}
            <div className="flex-shrink-0 w-[200px] h-[240px] md:w-[240px] md:h-[280px] overflow-hidden group cursor-pointer">
              <img
                src="/Photo Page d'accueil/Photo Vincent bloc equipe.jpg"
                alt="Vincent Gérard — Fondateur de G2V"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[22px] font-semibold tracking-tight mb-1">Vincent Gérard</h3>
              <p className="text-[14px] italic text-[#555] mb-6 font-light">Fondateur de G2V</p>
              <p className="text-[15px] font-light leading-relaxed text-[#333] mb-8 max-w-[460px]">
                "Dès mon plus jeune âge, j'ai toujours fait preuve d'une curiosité insatiable."
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase font-medium hover:text-[#003DA5] transition-colors"
              >
                Voir l'équipe
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

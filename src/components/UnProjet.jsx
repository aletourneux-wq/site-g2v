import { useRef } from 'react'
import { Link } from 'react-router-dom'
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

export default function UnProjet() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left — Team image */}
        <FadeUp>
          <div className="relative h-[400px] md:h-[520px] overflow-hidden group cursor-pointer">
            <img
              src="/Photo Page d'accueil/photo bloc Nous contacter.png"
              alt="Équipe G2V — artisans bâtisseurs"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </FadeUp>

        {/* Right — Contact CTA */}
        <FadeUp delay={0.15}>
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 bg-white">
            <h2 className="text-display mb-3 leading-tight">
              Un Projet ?
            </h2>
            <p className="text-[22px] md:text-[28px] italic font-light text-[#555] mb-6">
              Contactez-nous
            </p>
            <p className="text-[14px] font-light text-[#555] leading-relaxed mb-10 max-w-[360px]">
              Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos demandes de devis.
            </p>
            <div>
              <Link to="/contact" className="btn-primary">Contact</Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

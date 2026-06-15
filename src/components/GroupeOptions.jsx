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

export default function GroupeOptions() {
  return (
    <section className="section-pad bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left — text */}
        <FadeUp>
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 md:py-0">
            <h2 className="text-[clamp(22px,3vw,32px)] font-light italic leading-snug mb-5">
              G2V fait partie du groupe<br />
              <span className="font-medium not-italic">Options.</span>
            </h2>
            <p className="text-[14px] font-light text-[#555] leading-relaxed mb-8 max-w-[380px]">
              Ce partenariat étend le savoir-faire de G2V partout en France et en Europe.
              Une alliance solide entre l'excellence artisanale et un réseau d'envergure,
              pour concrétiser vos projets professionnels et privés, sans frontières.
            </p>
            <a
              href="#"
              className="text-[12px] tracking-[0.14em] uppercase font-medium hover:text-[#003DA5] transition-colors inline-flex items-center gap-2"
            >
              Découvrir <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeUp>

        {/* Right — image */}
        <FadeUp delay={0.15}>
          <div className="relative h-[340px] md:h-[460px] overflow-hidden group">
            <img
              src="/accueil/groupe-options.jpg"
              alt="Groupe Options — partenaire de G2V"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/10" />
            {/* Options label overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-6 py-4">
              <p className="text-white text-[11px] tracking-[0.2em] uppercase font-medium mb-1">
                Maison Options
              </p>
              <a href="#" className="text-white/70 text-[10px] tracking-[0.14em] uppercase hover:text-white transition-colors">
                Découvrir →
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: "Comment vos décors intègrent-ils l'expérience, la personnalisation, le sens, la technologie et l'impact humain ?",
    a: "Aujourd'hui, nos événements évoluent autour de cinq piliers essentiels : l'expérience immersive pour marquer les esprits, la personnalisation pour répondre aux attentes de chaque participant, le sens pour donner une vraie valeur à l'événement, la technologie pour améliorer et fluidifier l'organisation, et enfin l'impact humain pour créer du lien et de l'émotion entre les participants.",
  },
  {
    q: "Comment puis-je suivre l'avancement de mon projet ?",
    a: "Un interlocuteur dédié vous est assigné dès le début du projet. Des points réguliers sont planifiés pour vous tenir informé de l'avancement des travaux, des étapes clés et des délais. Notre équipe reste disponible par téléphone ou email pour toute question.",
  },
  {
    q: "Réalisez-vous des aménagements pour des boutiques éphémères (pop-up) ?",
    a: "Oui, G2V accompagne de nombreuses marques dans la conception et la réalisation de boutiques éphémères. De la scénographie à l'installation, nos équipes interviennent sur l'ensemble du projet dans des délais souvent très courts, tout en garantissant un résultat d'exception.",
  },
  {
    q: "Comment se passe la procédure de travaux pour un appartement ?",
    a: "Notre processus commence par une visite sur site pour évaluer votre projet et vos besoins. Nous établissons ensuite un devis détaillé avant de vous proposer un planning d'intervention précis. Nos artisans qualifiés prennent en charge l'ensemble des corps de métier pour une coordination optimale.",
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

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section-pad bg-white">
      {/* Tout le bloc FAQ est centré */}
      <div className="container-wide flex flex-col items-center">
        {/* Titre — centré */}
        <FadeUp>
          <h2
            className="text-[clamp(56px,9vw,110px)] font-extralight tracking-tight mb-12 md:mb-16 text-center"
            style={{ lineHeight: 1 }}
          >
            FAQ
          </h2>
        </FadeUp>

        {/* Accordion — centré, largeur max fixe */}
        <FadeUp delay={0.08}>
          <div className="w-full max-w-[680px]">
            {FAQS.map((item, i) => (
              <div key={i} className="border-t border-gray-200 last:border-b">
                <button
                  className="w-full flex items-start justify-between py-5 text-left gap-6 group"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-[14px] font-medium leading-snug flex-1 group-hover:text-[#003DA5] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 mt-0.5 text-[20px] text-[#003DA5] transition-transform duration-300 select-none"
                    style={{ transform: open === i ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[13px] font-light text-[#555] leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

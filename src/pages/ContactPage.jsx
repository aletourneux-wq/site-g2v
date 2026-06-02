import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

/* ── FadeUp ── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Champ de formulaire ── */
function Field({ label, type = 'text', name, textarea = false }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className="w-full bg-[#F5F3EF] border-b border-[#D8D4CC] px-4 py-3 text-[13px] text-[#0A0A0A] placeholder:text-[#BBB] focus:outline-none focus:border-[#003DA5] transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="w-full bg-[#F5F3EF] border-b border-[#D8D4CC] px-4 py-3 text-[13px] text-[#0A0A0A] placeholder:text-[#BBB] focus:outline-none focus:border-[#003DA5] transition-colors"
        />
      )}
    </label>
  )
}

/* ── Localisation — lien vers Google Maps (sans iframe) ── */
function MapSection() {
  return (
    <section className="w-full bg-[#F5F3EF] py-16 md:py-20 border-t border-[#EBEBEB]">
      <div className="container-wide text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-4">Nous trouver</p>
        <p className="text-[13px] leading-[1.9] text-[#555] uppercase tracking-[0.06em] mb-7">
          57 Boulevard de la République<br />
          Espace Lumière — Bâtiment 3 · 78400 Chatou
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=57+Boulevard+de+la+R%C3%A9publique%2C+78400+Chatou"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Voir sur Google Maps
        </a>
      </div>
    </section>
  )
}

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="py-16 md:py-24">
          <div className="container-wide text-center">
            <FadeUp>
              <h1
                className="uppercase text-center mb-8"
                style={{ fontSize: 'clamp(34px, 7vw, 96px)', fontWeight: 100, letterSpacing: '0.1em', lineHeight: 1 }}
              >
                Nous Contacter
              </h1>
              <p className="text-[14px] text-[#555] font-light max-w-[540px] mx-auto leading-relaxed">
                Nous sommes là pour répondre à toutes vos questions et vous accompagner
                dans vos demandes de devis.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Coordonnées + Formulaire ── */}
        <section className="container-wide pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">

            {/* Coordonnées */}
            <FadeUp>
              <h2
                className="mb-6"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 200, letterSpacing: '-0.01em' }}
              >
                Paris
              </h2>
              <address className="not-italic text-[12px] leading-[2] text-[#555] uppercase tracking-[0.06em] mb-8">
                G2V<br />
                57 Boulevard de la République<br />
                Espace Lumière — Bâtiment 3<br />
                78400 Chatou
              </address>

              <div className="space-y-2">
                <p className="text-[12px] tracking-[0.06em] text-[#555]">
                  <span className="text-[#999] uppercase tracking-[0.16em] mr-2">Tél.</span>
                  <a href="tel:+33124608880" className="hover:text-[#003DA5] transition-colors">
                    01 24 60 88 80
                  </a>
                </p>
                <p className="text-[12px] tracking-[0.06em] text-[#555]">
                  <span className="text-[#999] uppercase tracking-[0.16em] mr-2">Email</span>
                  <a href="mailto:info@g2v.fr" className="hover:text-[#003DA5] transition-colors">
                    info@g2v.fr
                  </a>
                </p>
              </div>
            </FadeUp>

            {/* Formulaire */}
            <FadeUp delay={0.1}>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <Field label="Nom" name="nom" />
                  <Field label="Prénom" name="prenom" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <Field label="E-mail" type="email" name="email" />
                  <Field label="Téléphone" type="tel" name="telephone" />
                </div>
                <div className="mb-8">
                  <Field label="Message" name="message" textarea />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    {sent ? 'Message envoyé ✓' : 'Envoyez'}
                  </button>
                  {sent && (
                    <p className="text-[11px] text-[#888] mt-4 tracking-[0.04em]">
                      Merci, nous revenons vers vous très rapidement.
                    </p>
                  )}
                </div>
              </form>
            </FadeUp>

          </div>
        </section>

        {/* ── Carte Google Maps (montée à l'apparition) ── */}
        <MapSection />

      </main>

      <Footer />
    </div>
  )
}

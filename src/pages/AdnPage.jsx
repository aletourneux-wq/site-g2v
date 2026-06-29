import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Histoire from '../components/Histoire'
import UnProjet from '../components/UnProjet'
import { useLang } from '../i18n/LanguageContext'

/* ── Plateforme de marque (textes via i18n) ── */
const PILIERS = ['ambition', 'vision', 'mission', 'promesse']

/* ── Réalisations mises en avant ── */
const RELATED = [
  { id: 'dior',      label: 'Défilé Dior',      img: '/realisations/defile-dior/1.jpg',        href: '/realisations/defile-dior' },
  { id: 'pergolese', label: 'Pergolèse',        img: '/realisations/pergolese.jpg',            href: '/realisations/pergolese' },
  { id: 'paul',      label: 'Paul, les Tortues', img: '/realisations/paul-les-tortues/1.jpg',   href: '/realisations/paul-les-tortues' },
]

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

/* ── Carte réalisation ── */
function RelatedCard({ project }) {
  return (
    <FadeUp>
      <Link to={project.href} className="block group text-center">
        <div className="relative overflow-hidden aspect-[4/5] mb-4">
          <img
            src={project.img}
            alt={project.label}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500"
          />
        </div>
        <p className="text-[11px] tracking-[0.22em] uppercase font-medium group-hover:text-[#003DA5] transition-colors">
          {project.label}
        </p>
      </Link>
    </FadeUp>
  )
}

export default function AdnPage() {
  const { t } = useLang()
  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative h-[52vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="/accueil/bloc-g2v-adn.png"
            alt="ADN G2V"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <motion.h1
            className="relative uppercase text-white text-center"
            style={{ fontSize: 'clamp(48px, 8vw, 110px)', fontWeight: 100, letterSpacing: '0.14em', lineHeight: 1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('adnPage.title')}
          </motion.h1>
        </section>

        {/* ── L'Entreprise ── */}
        <section className="section-pad">
          <div className="container-wide max-w-[820px]">
            <FadeUp>
              <p className="text-center text-[11px] tracking-[0.28em] uppercase text-[#999] mb-4">
                {t('adnPage.eyebrow')}
              </p>
              <h2
                className="text-center mb-10"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 200, letterSpacing: '-0.01em' }}
              >
                {t('adnPage.entrepriseTitle')}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[18px] md:text-[22px] font-light italic text-[#0A0A0A] text-center leading-snug mb-10">
                {t('adnPage.entrepriseLead')}
              </p>
              <div className="space-y-5 text-[14px] text-[#555] font-light leading-relaxed text-center">
                <p>{t('adnPage.entreprise1')}</p>
                <p>{t('adnPage.entreprise2')}</p>
                <p>{t('adnPage.entreprise3')}</p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── L'Histoire (composant réutilisé) ── */}
        <Histoire />

        {/* ── Plateforme de marque ── */}
        <section className="section-pad bg-[#F7F6F3]">
          <div className="container-wide max-w-[1000px]">
            <FadeUp>
              <h2
                className="text-center mb-14 md:mb-20"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 200, letterSpacing: '-0.01em' }}
              >
                {t('adnPage.platformTitle')}
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
              {PILIERS.map((p, i) => (
                <FadeUp key={p} delay={(i % 2) * 0.1}>
                  <div>
                    <h3 className="text-[#003DA5] uppercase font-bold tracking-[0.04em] mb-1" style={{ fontSize: '20px' }}>
                      {t(`adnPage.${p}`)}
                    </h3>
                    <p className="text-[13px] italic text-[#888] mb-5">{t(`adnPage.${p}Sub`)}</p>
                    <p className="text-[14px] text-[#444] font-light leading-relaxed">{t(`adnPage.${p}Text`)}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Manifeste ── */}
        <section className="section-pad">
          <div className="container-wide max-w-[760px] text-center">
            <FadeUp>
              <h2
                className="mb-12"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 200, letterSpacing: '-0.01em' }}
              >
                {t('adnPage.manifestTitle')}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-5 text-[15px] text-[#444] font-light leading-relaxed">
                <p className="text-[#0A0A0A] font-normal text-[18px]">{t('adnPage.manifestLead')}</p>
                <p>{t('adnPage.manifest1')}</p>
                <p>{t('adnPage.manifest2')}</p>
                <p>{t('adnPage.manifest3')}</p>
                <p>{t('adnPage.manifest4')}</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p
                className="mt-12 italic text-[#0A0A0A]"
                style={{ fontSize: 'clamp(18px, 2.4vw, 26px)', fontWeight: 300 }}
              >
                {t('adnPage.manifestSignature')}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Explorez nos réalisations ── */}
        <section className="section-pad border-t border-[#EBEBEB]">
          <div className="container-wide">
            <FadeUp>
              <h2 className="text-display text-center mb-12 md:mb-16">
                {t('adnPage.realisationsTitle')}
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto">
              {RELATED.map((p) => (
                <RelatedCard key={p.id} project={p} />
              ))}
            </div>
            <FadeUp delay={0.2}>
              <div className="text-center mt-12 md:mt-14">
                <Link to="/realisations" className="btn-primary">{t('common.allProjects')}</Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Contact ── */}
        <UnProjet />

      </main>

      <Footer />
    </div>
  )
}

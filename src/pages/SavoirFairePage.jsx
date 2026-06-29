import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UnProjet from '../components/UnProjet'
import { useLang } from '../i18n/LanguageContext'

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

/* ── Notre rôle — 6 univers (labels identiques FR/EN sauf Showroom) ── */
const UNIVERS = [
  { label: 'Retail',       img: "/domaines/retail.jpg" },
  { label: 'Office',       img: "/domaines/office.jpg" },
  { label: 'Home',         img: "/domaines/home.jpg" },
  { label: 'Fashion Show', img: '/domaines/fashion-show.png' },
  { labelKey: 'savoirFairePage.showroom', img: '/domaines/showroom.jpg' },
  { label: 'Exhibition',   img: "/domaines/exhibition.webp" },
]

/* ── Photos mosaïque compétences ── */
const MOSAIC_IMGS = [
  '/competences/entreprise/g2v-2.jpg',
  '/competences/entreprise/g2v-5.jpg',
  '/competences/entreprise/g2v-6.jpg',
  '/competences/entreprise/g2v-8.jpg',
]

/* ── Compétences détail (titres/textes via i18n) ── */
const COMPETENCES = [
  { id: 'miroiterie', img: "/competences/miroiterie.jpg" },
  { id: 'menuiserie', img: "/competences/menuiserie.jpg" },
  { id: 'marbrerie',  img: "/competences/marbrerie.jpg" },
  { id: 'serrurerie', img: "/competences/serrurerie.jpg" },
]

export default function SavoirFairePage() {
  const { t } = useLang()
  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ height: 'clamp(380px, 55vh, 620px)' }}>
          <img
            src="/competences/entreprise-generale.jpg"
            alt="G2V — Savoir-Faire"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-white uppercase text-center"
              style={{ fontSize: 'clamp(34px, 7vw, 96px)', fontWeight: 100, letterSpacing: '0.1em', lineHeight: 1 }}
            >
              {t('savoirFairePage.title')}
            </h1>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-20 md:py-28 text-center px-6">
          <FadeUp>
            <h2
              className="mb-8 mx-auto whitespace-pre-line"
              style={{
                fontSize: 'clamp(30px, 5vw, 64px)',
                fontWeight: 100,
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                maxWidth: '860px',
              }}
            >
              {t('savoirFairePage.introTitle')}
            </h2>
            <p
              className="text-[#555] font-light leading-relaxed mx-auto"
              style={{ fontSize: '15px', maxWidth: '620px' }}
            >
              {t('savoirFairePage.intro')}
            </p>
          </FadeUp>
        </section>

        {/* ── Notre rôle ── */}
        <section className="pb-24 md:pb-32 border-t border-[#EBEBEB] pt-16 md:pt-20">
          <div className="container-wide">
            <FadeUp>
              <h2
                className="text-center mb-4"
                style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 200 }}
              >
                {t('savoirFairePage.roleTitle')}
              </h2>
              <p
                className="text-center text-[#666] font-light mb-14 mx-auto"
                style={{ fontSize: '14px', maxWidth: '500px' }}
              >
                {t('savoirFairePage.roleSub')}
              </p>
            </FadeUp>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {UNIVERS.map((u, i) => {
                const label = u.labelKey ? t(u.labelKey) : u.label
                return (
                <FadeUp key={label} delay={(i % 3) * 0.08}>
                  <motion.div
                    whileHover="hovered"
                    className="relative overflow-hidden aspect-square cursor-default"
                  >
                    <motion.img
                      src={u.img}
                      alt={label}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: 'grayscale(100%)' }}
                      variants={{ hovered: { filter: 'grayscale(0%)', scale: 1.04 } }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    {/* label centré */}
                    <div className="absolute inset-0 flex items-end justify-center pb-5">
                      <p className="text-white text-[11px] tracking-[0.22em] uppercase font-medium">
                        {label}
                      </p>
                    </div>
                  </motion.div>
                </FadeUp>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Les compétences ── */}
        <section className="py-20 md:py-28 border-t border-[#EBEBEB]">
          <div className="container-wide">

            {/* Titres */}
            <FadeUp>
              <h2
                className="text-center mb-3"
                style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 200 }}
              >
                {t('savoirFairePage.skillsTitle')}
              </h2>
              <h3
                className="text-center mb-14 text-[#888]"
                style={{ fontSize: 'clamp(16px, 2.2vw, 28px)', fontWeight: 200 }}
              >
                {t('savoirFairePage.skillsSub')}
              </h3>
            </FadeUp>

            {/* Mosaïque photos + boîte bleue */}
            <FadeUp>
              <div className="flex flex-col md:flex-row mb-14">
                {/* 4 photos mosaïque */}
                <div className="grid grid-cols-2 gap-[3px] md:w-[42%] flex-shrink-0">
                  {MOSAIC_IMGS.map((src, i) => (
                    <div key={i} className="aspect-square overflow-hidden">
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                  ))}
                </div>
                {/* Boîte texte bleu/lavande */}
                <div
                  className="flex items-center justify-center px-8 py-10 md:px-12 md:w-[58%]"
                  style={{ backgroundColor: '#D0DCF0' }}
                >
                  <p
                    className="text-center leading-relaxed"
                    style={{ color: '#2A3B60', fontSize: '13px', maxWidth: '440px' }}
                  >
                    {t('savoirFairePage.egBox')}
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* H4 + grille photos détail */}
            <FadeUp>
              <p
                className="text-center mb-10 uppercase tracking-[0.18em] text-[#555]"
                style={{ fontSize: '11px' }}
              >
                {t('savoirFairePage.excellenceLabel')}
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px] md:gap-1 max-w-[760px] mx-auto">
              {COMPETENCES.map((c, i) => (
                <FadeUp key={c.id} delay={(i % 2) * 0.1}>
                  <motion.div
                    whileHover="hovered"
                    className="relative overflow-hidden aspect-square cursor-default"
                  >
                    {/* Image N&B → couleur */}
                    <motion.img
                      src={c.img}
                      alt={t(`savoirFairePage.${c.id}`)}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: 'grayscale(100%)' }}
                      variants={{ hovered: { filter: 'grayscale(0%)', scale: 1.04 } }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {/* Gradient overlay permanent — plus fort sur mobile pour lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent md:from-black/70 md:via-black/20" />
                    {/* Fond sombre supplémentaire au survol (desktop uniquement) */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 hidden md:block"
                      style={{ height: '60%', opacity: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }}
                      variants={{ hovered: { opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Titre + texte */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p
                        className="text-white uppercase font-semibold mb-2"
                        style={{ fontSize: '12px', letterSpacing: '0.14em' }}
                      >
                        {t(`savoirFairePage.${c.id}`)}
                      </p>
                      {/* Texte toujours visible sur mobile */}
                      <p
                        className="text-white/80 font-light leading-relaxed md:hidden"
                        style={{ fontSize: '11px' }}
                      >
                        {t(`savoirFairePage.${c.id}Text`)}
                      </p>
                      {/* Texte au survol sur desktop */}
                      <motion.p
                        className="text-white/75 font-light leading-relaxed hidden md:block"
                        style={{ opacity: 0, y: 8, fontSize: '11px' }}
                        variants={{ hovered: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.3, delay: 0.08 }}
                      >
                        {t(`savoirFairePage.${c.id}Text`)}
                      </motion.p>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>

          </div>
        </section>

        {/* ── Expertises ── */}
        <section className="py-20 md:py-28 border-t border-[#EBEBEB]">
          <div className="container-wide">

            <FadeUp>
              <h2
                className="text-center mb-16 md:mb-20 uppercase"
                style={{
                  fontSize: 'clamp(26px, 4vw, 52px)',
                  fontWeight: 100,
                  letterSpacing: '0.14em',
                }}
              >
                {t('savoirFairePage.expertisesTitle')}
              </h2>
            </FadeUp>

            {/* Bureau d'études & Architectes — image gauche */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">
              <FadeUp>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/savoir-faire/bureau-etudes.jpg"
                    alt="Bureau d'études & Architectes"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </FadeUp>
              <FadeUp delay={0.12}>
                <h3
                  className="font-medium mb-5"
                  style={{ fontSize: 'clamp(16px, 2vw, 26px)', fontWeight: 400 }}
                >
                  {t('savoirFairePage.bureauTitle')}
                </h3>
                <p className="text-[#444] leading-relaxed mb-4" style={{ fontSize: '13px' }}>
                  {t('savoirFairePage.bureau1')}
                </p>
                <p className="text-[#444] leading-relaxed" style={{ fontSize: '13px' }}>
                  {t('savoirFairePage.bureau2')}
                </p>
              </FadeUp>
            </div>

            {/* Modélisation 3D & Maquette — image droite */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">
              <FadeUp delay={0.12} className="md:order-1 order-2">
                <h3
                  className="font-medium mb-5"
                  style={{ fontSize: 'clamp(16px, 2vw, 26px)', fontWeight: 400 }}
                >
                  {t('savoirFairePage.modelTitle')}
                </h3>
                <p className="text-[#444] leading-relaxed" style={{ fontSize: '13px' }}>
                  {t('savoirFairePage.modelText')}
                </p>
              </FadeUp>
              <FadeUp className="md:order-2 order-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/savoir-faire/modelisation-3d.png"
                    alt="Modélisation 3D & Maquette"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </FadeUp>
            </div>

            {/* Usines & Terrains — image gauche */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <FadeUp>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/savoir-faire/usines-terrains.jpg"
                    alt="Usines & Terrains"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </FadeUp>
              <FadeUp delay={0.12}>
                <h3
                  className="font-medium mb-5"
                  style={{ fontSize: 'clamp(16px, 2vw, 26px)', fontWeight: 400 }}
                >
                  {t('savoirFairePage.usinesTitle')}
                </h3>
                <p className="text-[#444] leading-relaxed" style={{ fontSize: '13px' }}>
                  {t('savoirFairePage.usinesText')}
                </p>
              </FadeUp>
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <UnProjet />

      </main>

      <Footer />
    </div>
  )
}

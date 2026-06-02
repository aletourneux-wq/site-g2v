import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UnProjet from '../components/UnProjet'

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

/* ── Notre rôle — 6 univers ── */
const UNIVERS = [
  { label: 'Retail',             img: "/Photo Page d'accueil/Bloc domaines d'expertise/photo RETAIL.jpg" },
  { label: 'Office',             img: "/Photo Page d'accueil/Bloc domaines d'expertise/Photo OFFICE.jpg" },
  { label: 'Home',               img: "/Photo Page d'accueil/Bloc domaines d'expertise/photo HOME.jpg" },
  { label: 'Fashion Show',       img: '/real-defile.png' },
  { label: 'Showroom et Pop Up', img: '/real-popup.jpg' },
  { label: 'Exhibition',         img: "/Photo Page d'accueil/Bloc domaines d'expertise/exhibition.webp" },
]

/* ── Photos mosaïque compétences ── */
const MOSAIC_IMGS = [
  '/entreprise-generale/g2v-2.jpg',
  '/entreprise-generale/g2v-5.jpg',
  '/entreprise-generale/g2v-6.jpg',
  '/entreprise-generale/g2v-8.jpg',
]

/* ── Compétences détail ── */
const COMPETENCES = [
  {
    id: 'miroiterie',
    title: 'Miroiterie',
    img: "/Photo Page d'accueil/Nos 5 competences/miroiterie.jpg",
    text: "Aussi ancien qu'exigeant, le verre reste la matière la plus complexe à façonner. Sa fragilité et sa rigidité à la fois demandent une maîtrise rare que nos équipes maîtrisent pour mener à bien chaque projet. Son veinage préserve l'authenticité de notre travail pour toujours.",
  },
  {
    id: 'menuiserie',
    title: 'Menuiserie',
    img: "/Photo Page d'accueil/Nos 5 competences/menuiserie.jpg",
    text: "Polir, découper, teindre… le bois offre mille façons d'être sublime. Alliant machines performantes et gestes artisanaux, nos équipes explorent à chaque projet toutes les possibilités de cette matière. Son veinage unique reste une signature naturelle qui ne cesse de nous inspirer.",
  },
  {
    id: 'marbrerie',
    title: 'Marbrerie',
    img: "/Photo Page d'accueil/Nos 5 competences/marbrerie.jpg",
    text: "Pierre naturelle d'exception, le marbre incarne à lui seul le luxe intemporel. Chaque veine, chaque teinte raconte une histoire unique. Nos marbriers sélectionnent et travaillent chaque dalle avec une précision chirurgicale pour sublimer vos espaces.",
  },
  {
    id: 'serrurerie',
    title: 'Serrurerie',
    img: "/Photo Page d'accueil/Nos 5 competences/serrurerie.jpg",
    text: "Du garde-corps sur mesure à la ferronnerie d'art, le métal prend entre nos mains toutes les formes que vous imaginez. Nos serruriers allient techniques ancestrales et outils contemporains pour concevoir des pièces uniques, robustes et esthétiques.",
  },
]

export default function SavoirFairePage() {
  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ height: 'clamp(380px, 55vh, 620px)' }}>
          <img
            src="/Photo Page d'accueil/Nos 5 competences/entreprise general premiere photo du bloc.jpg"
            alt="G2V — Savoir-Faire"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-white uppercase text-center"
              style={{ fontSize: 'clamp(34px, 7vw, 96px)', fontWeight: 100, letterSpacing: '0.1em', lineHeight: 1 }}
            >
              Savoir-Faire
            </h1>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-20 md:py-28 text-center px-6">
          <FadeUp>
            <h2
              className="mb-8 mx-auto"
              style={{
                fontSize: 'clamp(30px, 5vw, 64px)',
                fontWeight: 100,
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                maxWidth: '860px',
              }}
            >
              Bâtisseurs de rêves,<br />artisans d'excellence.
            </h2>
            <p
              className="text-[#555] font-light leading-relaxed mx-auto"
              style={{ fontSize: '15px', maxWidth: '620px' }}
            >
              Qu'ils soient architectes, décorateurs, directeurs artistiques, stylistes, créateurs,
              hommes ou femmes d'affaires, particuliers avertis… toutes et tous ont des envies,
              des rêves, des besoins à assouvir, à partager, à offrir.
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
                Notre rôle
              </h2>
              <p
                className="text-center text-[#666] font-light mb-14 mx-auto"
                style={{ fontSize: '14px', maxWidth: '500px' }}
              >
                Les accompagner dans cette aventure. Notre savoir-faire s'exprime au sein de six univers différents :
              </p>
            </FadeUp>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {UNIVERS.map(({ label, img }, i) => (
                <FadeUp key={label} delay={(i % 3) * 0.08}>
                  <motion.div
                    whileHover="hovered"
                    className="relative overflow-hidden aspect-square cursor-default"
                  >
                    <motion.img
                      src={img}
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
              ))}
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
                Les compétences
              </h2>
              <h3
                className="text-center mb-14 text-[#888]"
                style={{ fontSize: 'clamp(16px, 2.2vw, 28px)', fontWeight: 200 }}
              >
                Entreprise générale
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
                    Faire évoluer l'ensemble des métiers de la construction et (ou) de l'agencement
                    confère à l'entreprise générale une caractéristique unique. Plomberie, climatisation,
                    peinture, plâtrerie, menuiserie, électricité, serrurerie, miroiterie, revêtement de
                    sols, autant de spécialités maîtrisées en interne pour vous garantir une cohérence
                    et une qualité irréprochable, du premier coup de pinceau à la livraison finale.
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
                L'excellence artisanale dans chaque détail
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
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: 'grayscale(100%)' }}
                      variants={{ hovered: { filter: 'grayscale(0%)', scale: 1.04 } }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {/* Gradient overlay permanent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Fond sombre supplémentaire au survol */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0"
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
                        {c.title}
                      </p>
                      <motion.p
                        className="text-white/75 font-light leading-relaxed"
                        style={{ opacity: 0, y: 8, fontSize: '11px' }}
                        variants={{ hovered: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.3, delay: 0.08 }}
                      >
                        {c.text}
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
                Expertises
              </h2>
            </FadeUp>

            {/* Bureau d'études & Architectes — image gauche */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">
              <FadeUp>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/modelisation bloc.png"
                    alt="Bureau d'études & Architectes"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </FadeUp>
              <FadeUp delay={0.12}>
                <h3
                  className="uppercase font-bold mb-5"
                  style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', letterSpacing: '0.1em' }}
                >
                  Bureau d'études & Architectes
                </h3>
                <p className="text-[#444] leading-relaxed mb-4" style={{ fontSize: '13px' }}>
                  Au sein de notre entreprise, notre <strong>bureau d'études</strong> incarne l'alliance
                  parfaite entre <strong>créativité et ingénierie</strong>. Composé d'une équipe{' '}
                  <strong>pluridisciplinaire</strong>, il constitue le pilier stratégique de la conception
                  et du développement de vos projets.
                </p>
                <p className="text-[#444] leading-relaxed" style={{ fontSize: '13px' }}>
                  Dirigé par un responsable de département, notre bureau rassemble l'expertise d'un{' '}
                  <strong>architecte</strong>, de deux <strong>scénographes</strong> et d'un{' '}
                  <strong>dessinateur industriel</strong>. Ensemble, nous concevons des espaces et des
                  solutions sur mesure, en intégrant une approche à la fois artistique et technique
                  adaptée à chaque besoin spécifique. Afin de garantir la qualité et la faisabilité
                  de chaque création, nous effectuons un suivi rigoureux de la production dans nos
                  ateliers, du prototypage à la fabrication finale.
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
                  Modélisation 3D & Maquette
                </h3>
                <p className="text-[#444] leading-relaxed" style={{ fontSize: '13px' }}>
                  Notre atelier de modélisation 3D transforme vos idées en rendus photoréalistes précis,
                  vous permettant de visualiser chaque espace avant sa réalisation. Complétée par la
                  confection de maquettes physiques, cette phase de conception garantit des décisions
                  éclairées, une communication fluide avec vos équipes et l'absence de mauvaises
                  surprises sur chantier.
                </p>
              </FadeUp>
              <FadeUp className="md:order-2 order-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/Photo Realisations/chaumet-1.jpg"
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
                    src="/Photo Realisations/g2v-works-1.jpg"
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
                  Usines & Terrains
                </h3>
                <p className="text-[#444] leading-relaxed" style={{ fontSize: '13px' }}>
                  G2V dispose de ses propres ateliers de fabrication et d'espaces de stockage,
                  lui permettant de concevoir et produire en interne l'ensemble des éléments
                  nécessaires à vos projets. De la découpe à la finition, nos usines sont équipées
                  pour répondre aux exigences du luxe et de l'événementiel à grande échelle —
                  avec la réactivité et la flexibilité que demandent les projets d'exception.
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

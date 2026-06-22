import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Histoire from '../components/Histoire'
import UnProjet from '../components/UnProjet'

/* ── Plateforme de marque ── */
const PILIERS = [
  {
    title: 'Ambition',
    subtitle: 'ce que nous voulons être',
    text: "G2V entend compter parmi les meilleures références de l'aménagement d'espaces et de mobilier d'exception dans le monde, être associé à une qualité irréprochable, rester à la pointe des matériaux, des expertises et des techniques durables.",
  },
  {
    title: 'Vision',
    subtitle: 'ce en quoi nous croyons',
    text: "Dans un monde en quête d'émotions et un secteur qui n'accepte pas l'à peu près, innover et créer la surprise devient un défi que seule la parfaite maîtrise technique peut permettre de relever.",
  },
  {
    title: 'Mission',
    subtitle: 'notre ligne de conduite',
    text: "Aménager des espaces et du mobilier sur-mesure uniques et exceptionnels, publics et professionnels, pérennes comme éphémères, en faisant de notre expertise dans le bâtiment et de la diversité de nos équipes intégrées la clé du succès de nos clients.",
  },
  {
    title: 'Promesse',
    subtitle: 'ce que l\'on promet à nos clients',
    text: "Une parfaite maîtrise de toute la chaîne de production, grâce à nos équipes intégrées qui partagent le goût du challenge et du travail bien fait, ce qui nous permet d'être exemplaires dans la qualité de nos prestations et d'aller toujours plus loin dans nos réalisations.",
  },
]

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
            ADN
          </motion.h1>
        </section>

        {/* ── L'Entreprise ── */}
        <section className="section-pad">
          <div className="container-wide max-w-[820px]">
            <FadeUp>
              <p className="text-center text-[11px] tracking-[0.28em] uppercase text-[#999] mb-4">
                G2V
              </p>
              <h2
                className="text-center mb-10"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 200, letterSpacing: '-0.01em' }}
              >
                L'Entreprise
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[18px] md:text-[22px] font-light italic text-[#0A0A0A] text-center leading-snug mb-10">
                G2V, bâtisseurs d'espaces et d'événements.
              </p>
              <div className="space-y-5 text-[14px] text-[#555] font-light leading-relaxed text-center">
                <p>
                  Depuis plus de 25 ans, G2V s'inscrit parmi les partenaires de référence dans
                  l'aménagement d'espaces publics et professionnels, pérennes comme éphémères.
                </p>
                <p>
                  Multitechniques et multi-matériaux, G2V intervient sur des métiers tels que la
                  menuiserie, la miroiterie, la serrurerie, la marbrerie, la plasturgie et la
                  signalétique, appliqués aux secteurs de l'événementiel, du retail ainsi que de la
                  rénovation de bureaux et d'intérieurs d'exception pour les particuliers.
                </p>
                <p>
                  Son bureau d'études est composé d'architectes diplômés, de dessinateurs, de
                  projeteurs et de conducteurs de travaux. Ses équipes intégrées lui permettent de
                  maîtriser toutes les étapes de la chaîne de production, du brief à la réalisation
                  finale, et partagent une passion commune pour le travail bien fait et le goût du challenge.
                </p>
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
                Plateforme de marque
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
              {PILIERS.map((p, i) => (
                <FadeUp key={p.title} delay={(i % 2) * 0.1}>
                  <div>
                    <h3 className="text-[#003DA5] uppercase font-bold tracking-[0.04em] mb-1" style={{ fontSize: '20px' }}>
                      {p.title}
                    </h3>
                    <p className="text-[13px] italic text-[#888] mb-5">{p.subtitle}</p>
                    <p className="text-[14px] text-[#444] font-light leading-relaxed">{p.text}</p>
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
                Manifeste
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-5 text-[15px] text-[#444] font-light leading-relaxed">
                <p className="text-[#0A0A0A] font-normal text-[18px]">Chez G2V, nous sommes des bâtisseurs.</p>
                <p>
                  Nous sommes à la fois des experts du bâtiment et des artisans innovants. Nous
                  maîtrisons les différentes techniques et matériaux, avec une culture commune de l'excellence.
                </p>
                <p>
                  Nous transformons les idées et les concepts de nos clients en une réalité, en
                  fabriquant des lieux uniques, du mobilier exceptionnel, des événements qui inspirent,
                  qui connectent et qui surprennent.
                </p>
                <p>
                  Nous mettons notre expertise et notre polyvalence au service des chantiers à défis
                  et à vraie valeur ajoutée.
                </p>
                <p>
                  Chez G2V, chaque construction est le fruit d'un travail collectif, chaque matériau
                  est une ressource précieuse, et chaque projet est une opportunité de se dépasser et d'innover.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p
                className="mt-12 italic text-[#0A0A0A]"
                style={{ fontSize: 'clamp(18px, 2.4vw, 26px)', fontWeight: 300 }}
              >
                G2V, Bâtisseurs de Rêves, Artisans d'Excellence.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Explorez nos réalisations ── */}
        <section className="section-pad border-t border-[#EBEBEB]">
          <div className="container-wide">
            <FadeUp>
              <h2 className="text-display text-center mb-12 md:mb-16">
                Explorez nos réalisations
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto">
              {RELATED.map((p) => (
                <RelatedCard key={p.id} project={p} />
              ))}
            </div>
            <FadeUp delay={0.2}>
              <div className="text-center mt-12 md:mt-14">
                <Link to="/realisations" className="btn-primary">En voir plus</Link>
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

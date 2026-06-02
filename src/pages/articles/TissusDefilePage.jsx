import { useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

/* ── Articles liés ── */
const RELATED = [
  {
    id: 'jpg-fw26',
    category: 'Coulisses',
    title: 'JPG FW26 : une nuit pour tout monter',
    img: '/Photo Realisations/JPG FW26 SHOW Photo.jpg',
    date: '3 Avril 2026',
    href: '/actualites',
  },
  {
    id: 'lvmh',
    category: 'Événementiel',
    title: 'LVMH Prize 2025 : notre implication',
    img: '/Photo Realisations/lvmh-1.jpg',
    date: '20 Janvier 2026',
    href: '/actualites',
  },
  {
    id: 'celine',
    category: 'Événementiel',
    title: 'Aménagement retail : choisir ses matériaux',
    img: '/Photo Realisations/montfort-3.jpg',
    date: '5 Février 2026',
    href: '/actualites',
  },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Composant image pleine largeur avec caption ── */
function ArticleImage({ src, alt, caption }) {
  return (
    <FadeUp>
      <figure className="my-12 md:my-16 -mx-4 md:mx-0">
        <div className="overflow-hidden">
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-[300px] md:h-[500px] object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        {caption && (
          <figcaption className="mt-3 text-[11px] text-[#999] tracking-[0.1em] text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    </FadeUp>
  )
}

/* ── Citation mise en avant ── */
function PullQuote({ children }) {
  return (
    <FadeUp>
      <blockquote className="my-12 pl-6 border-l-2 border-[#003DA5]">
        <p className="text-[18px] md:text-[22px] font-light italic text-[#0A0A0A] leading-relaxed" style={{ letterSpacing: '-0.01em' }}>
          {children}
        </p>
      </blockquote>
    </FadeUp>
  )
}

export default function TissusDefilePage() {
  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative h-[65vh] flex items-end overflow-hidden">
          <img
            src="/articles/tissus-hero.avif"
            alt="Tissus colorés pour défilés de mode — G2V"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="relative container-wide pb-12 md:pb-16">
            <motion.p
              className="text-[10px] tracking-[0.28em] uppercase text-white/60 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/actualites" className="hover:text-white transition-colors">Actualités</Link>
              <span className="mx-2">·</span>Événementiel
            </motion.p>
            <motion.h1
              className="text-white max-w-[680px] mb-5"
              style={{ fontSize: 'clamp(28px, 4.5vw, 58px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1 }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Les tissus qui font les grands défilés
            </motion.h1>
            <motion.div
              className="flex items-center gap-4 text-[10px] tracking-[0.18em] uppercase text-white/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span>12 Mai 2026</span>
              <span>·</span>
              <span>5 min de lecture</span>
              <span>·</span>
              <span>Par G2V</span>
            </motion.div>
          </div>
        </section>

        {/* ── Corps de l'article ── */}
        <article className="container-wide max-w-[720px] py-16 md:py-24">

          {/* Chapeau */}
          <FadeUp>
            <p className="text-[17px] md:text-[19px] text-[#333] font-light leading-relaxed mb-10 border-l-2 border-[#EBEBEB] pl-6">
              Derrière chaque grand défilé de mode se cache une expertise textile méconnue du grand public. Velours de scène, organza de soie, lin ignifugé, toiles techniques — chaque matière est choisie pour ses propriétés visuelles, mécaniques et réglementaires. Chez G2V, le choix des tissus est une décision aussi stratégique que le dessin des structures.
            </p>
          </FadeUp>

          {/* Section 1 */}
          <FadeUp>
            <h2 className="text-[22px] md:text-[28px] font-light mb-5 mt-12" style={{ letterSpacing: '-0.01em' }}>
              L'organza et le voile : légèreté et transparence
            </h2>
            <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
              L'organza de soie est l'un des tissus les plus présents dans la haute couture événementielle. Sa transparence unique permet de jouer avec la lumière — une qualité cruciale dans les défilés où l'éclairage scénique est partie intégrante du spectacle. Sa structure légèrement rigide lui permet de tenir la forme sans armature, créant des volumes aériens qui amplifient chaque mouvement.
            </p>
            <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
              Dans un contexte de scénographie, les voilages en organza sont utilisés comme backdrop translucides, permettant de créer des effets de profondeur et de superposition entre les différents plans de la scène. Les designers de mode les apprécient pour leur capacité à réfléchir différemment selon l'angle et l'intensité de la lumière — un atout considérable dans des shows où chaque détail est calculé.
            </p>
          </FadeUp>

          <ArticleImage
            src="https://images.unsplash.com/photo-1630920501459-f3e99320c4a5?w=1400&q=80"
            alt="Tissus colorés superposés — organza et voiles de scène"
            caption="Différentes matières textiles superposées — organza, voile et soie créent des effets de profondeur uniques."
          />

          {/* Section 2 */}
          <FadeUp>
            <h2 className="text-[22px] md:text-[28px] font-light mb-5 mt-4" style={{ letterSpacing: '-0.01em' }}>
              Le velours : profondeur, prestige et absorption de la lumière
            </h2>
            <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
              Le velours est le tissu de scène par excellence. Sa structure à poils denses absorbe la lumière plutôt que de la réfléchir, créant un fond neutre et profond qui met en valeur les silhouettes sans les concurrencer. C'est pour cette raison qu'on le retrouve dans presque tous les grands défilés de couture, des rideau de scène aux banquettes en passant par les habillages de podium.
            </p>
            <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
              Du point de vue technique, le velours de scène est généralement traité M1 (norme française de résistance au feu), une obligation dans tous les établissements recevant du public. Il existe en velours de soie — pour les projets les plus luxueux — ou en velours synthétique, plus résistant aux manipulations répétées et aux transports entre les shows.
            </p>
          </FadeUp>

          <PullQuote>
            "Le velours absorbe la lumière là où le satin la renvoie. Le premier efface, le second expose. Ce sont deux philosophies de mise en scène radicalement opposées."
          </PullQuote>

          {/* Section 3 */}
          <FadeUp>
            <h2 className="text-[22px] md:text-[28px] font-light mb-5" style={{ letterSpacing: '-0.01em' }}>
              Le lin et le coton : authenticité et scénographies naturelles
            </h2>
            <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
              Portée par les préoccupations environnementales du secteur de la mode, la demande pour des tissus naturels dans les scénographies événementielles n'a jamais été aussi forte. Le lin est aujourd'hui très prisé pour sa texture légèrement irrégulière — signe d'authenticité — et sa tenue remarquable aux manipulations répétées.
            </p>
            <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
              Utilisé en habillage de stand, en fond photographique ou en cloison textile, le lin apporte une chaleur visuelle que les matières synthétiques ne peuvent pas reproduire. La toile de lin-coton, combinant la finesse du lin et la souplesse du coton, est particulièrement appréciée pour les shows qui cherchent une esthétique "raw" — brute et sincère — en rupture avec le clinquant habituel des défilés de luxe.
            </p>
          </FadeUp>

          <ArticleImage
            src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=1400&q=80"
            alt="Velours rouge — texture et profondeur d'un tissu de scène"
            caption="Le velours de scène absorbe la lumière plutôt que de la réfléchir — un avantage décisif dans les shows de mode."
          />

          <ArticleImage
            src="https://images.unsplash.com/photo-1624516268152-1e48624026ed?w=1400&q=80"
            alt="Tissu lin naturel — texture et authenticité"
            caption="Le lin et la toile lin-coton apportent une chaleur visuelle naturelle, très recherchée dans les scénographies contemporaines."
          />

          {/* Section 4 */}
          <FadeUp>
            <h2 className="text-[22px] md:text-[28px] font-light mb-5" style={{ letterSpacing: '-0.01em' }}>
              Les tissus techniques : performance et conformité réglementaire
            </h2>
            <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
              Au-delà de l'esthétique, les contraintes techniques et réglementaires jouent un rôle déterminant dans le choix des tissus pour les événements. Tout tissu utilisé dans un espace public doit répondre à des normes de sécurité précises, notamment la norme M1 (classement français) ou B1 (classement allemand) de résistance au feu.
            </p>
            <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
              Les tissus techniques occultants sont quant à eux utilisés pour isoler les espaces entre les différents moments d'un show — ils permettent de cacher les coulisses, de gérer la lumière ambiante et de créer des transitions entre les séquences. Résistants, lavables et souvent traités antibactériens, ils sont la colonne vertébrale invisible de toute scénographie professionnelle.
            </p>
            <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
              Enfin, les toiles de fond imprimées — sur polyester ou coton — permettent de personnaliser entièrement l'espace avec les visuels de la maison. Grâce aux techniques d'impression numérique grand format, il est possible d'obtenir des rendus photographiques sur des surfaces de plusieurs dizaines de mètres carrés, avec une précision et une fidélité chromatique qui répondent aux exigences les plus strictes des directeurs artistiques.
            </p>
          </FadeUp>

          {/* Section 5 — L'approche G2V */}
          <FadeUp>
            <div className="mt-12 pt-12 border-t border-[#EBEBEB]">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#003DA5] mb-4">L'approche G2V</p>
              <h2 className="text-[22px] md:text-[28px] font-light mb-5" style={{ letterSpacing: '-0.01em' }}>
                Une expertise qui s'affine show après show
              </h2>
              <p className="text-[15px] text-[#444] font-light leading-relaxed mb-4">
                Chez G2V, la sélection des matières textiles est intégrée dès la phase de conception d'un projet. Nos équipes travaillent en étroite collaboration avec les directeurs artistiques et les équipes de production pour choisir les tissus qui servent le mieux le propos visuel du show — tout en répondant aux contraintes de délais, de budget et de sécurité.
              </p>
              <p className="text-[15px] text-[#444] font-light leading-relaxed mb-6">
                Après plus de 350 projets par an, nous avons développé un réseau de fournisseurs spécialisés et une connaissance fine des matières disponibles sur le marché — de l'organza de soie le plus délicat aux toiles techniques les plus robustes. C'est cette expertise invisible qui fait la différence entre un espace fonctionnel et un espace mémorable.
              </p>
              <Link to="/metiers/evenements" className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:text-[#003DA5] hover:border-[#003DA5] transition-colors duration-200">
                Découvrir notre expertise événementielle →
              </Link>
            </div>
          </FadeUp>

          {/* Tags */}
          <FadeUp>
            <div className="flex flex-wrap gap-2 mt-14 pt-8 border-t border-[#EBEBEB]">
              {['Scénographie', 'Tissus', 'Défilé de mode', 'Événementiel', 'Savoir-faire'].map(tag => (
                <span key={tag} className="px-3 py-1.5 border border-[#E0E0E0] text-[10px] tracking-[0.14em] uppercase text-[#777]">
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>

        </article>

        {/* ── Autres articles ── */}
        <section className="border-t border-[#EBEBEB] py-16 md:py-20">
          <div className="container-wide">
            <FadeUp>
              <h2 className="text-[11px] tracking-[0.28em] uppercase text-[#999] mb-10">
                Autres articles
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {RELATED.map((a, i) => (
                <FadeUp key={a.id} delay={i * 0.08}>
                  <Link to={a.href} className="block group">
                    <div className="relative overflow-hidden aspect-[4/3] mb-4">
                      <img
                        src={a.img}
                        alt={a.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-600"
                      />
                    </div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#003DA5] mb-2">{a.category}</p>
                    <h3 className="text-[15px] font-medium leading-snug group-hover:text-[#003DA5] transition-colors duration-200 mb-2">
                      {a.title}
                    </h3>
                    <p className="text-[10px] tracking-[0.12em] text-[#999]">{a.date}</p>
                  </Link>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.2}>
              <div className="text-center mt-14">
                <Link to="/actualites" className="btn-primary">Voir tous les articles</Link>
              </div>
            </FadeUp>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

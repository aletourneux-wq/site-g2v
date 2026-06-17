/* ──────────────────────────────────────────────────────────────
   Données des 6 univers d'expertise G2V
   Alimente la page template /domaines/:slug
   (Fashion Show rempli ; les 5 autres à compléter au fur et à mesure)
   ────────────────────────────────────────────────────────────── */

export const DOMAINES = [
  {
    slug: 'fashion-show',
    metier: { label: 'Événements', href: '/metiers/evenements' },
    heroTitle: 'Fashion Show',
    hero: '/domaines/fashion-show/hero.jpg',
    title: 'Scénographie\névénementielle',
    intro:
      "Savoir concevoir une mise en scène pour un événement exige une grande souplesse d'esprit et une rapidité d'exécution exceptionnelle. Évoluer dans un univers éphémère tout en étant soumis aux contraintes du monde tangible constitue un ensemble de difficultés qu'il faut résoudre étape par étape.",
    blocks: [
      {
        img: '/realisations/jpg-fw26.jpg',
        caption: 'Jean Paul Gaultier',
        imgLeft: true,
        text:
          "La maîtrise de nos outils de production et de nos compétences nous permet de repousser nos limites sur des projets très ambitieux. Chaque défi relevé par les équipes de G2V renforce la confiance de nos clients et les incite à repousser sans cesse les limites.",
      },
      {
        img: '/realisations/dior.jpg',
        caption: 'Dior',
        imgLeft: false,
        text:
          "Adopter une approche éco-responsable qui préserve l'environnement et répond aux enjeux écologiques actuels et futurs est un engagement de nos équipes, encouragé par les acteurs du marché.",
      },
    ],
    realisations: [
      { label: 'Jean-Paul Gaultier', img: '/realisations/jpg-fw26.jpg' },
      { label: 'Off White',          img: '/realisations/offwhite.jpg' },
      { label: 'Messika',            img: '/realisations/messika.png' },
    ],
  },
]

export const getDomaine = (slug) => DOMAINES.find((d) => d.slug === slug)

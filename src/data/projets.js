/* ──────────────────────────────────────────────────────────────
   Données des pages projet (template /realisations/:slug)
   ────────────────────────────────────────────────────────────── */

export const PROJETS = [
  {
    slug: 'defile-dior',
    title: 'Défilé Dior',
    intro:
      "C'est au cœur du jardin des Tuileries que Dior dévoile sa collection automne-hiver 2020–2021. Le Bureau Betak nous confie la fabrication d'enseignes lumineuses telles que « Feminine beauty is a ready-made » ou « Consent », toutes inspirées de l'exposition soutenue par la maison Dior. Nos équipes auront eu seulement six jours, là où vingt-huit étaient nécessaires, pour réaliser plus de deux cents lettres lumineuses découpées au laser et assemblées à la main.",
    credit: 'Conception : Bureau Betak · 2020',
    photos: [
      { src: '/realisations/defile-dior/1.jpg', alt: 'Défilé Dior — enseignes lumineuses' },
      { src: '/realisations/defile-dior/2.jpg', alt: 'Défilé Dior — lettrages néon' },
      { src: '/realisations/defile-dior/3.jpg', alt: 'Défilé Dior — scénographie' },
      { src: '/realisations/defile-dior/4.jpg', alt: 'Défilé Dior — installation' },
      { src: '/realisations/defile-dior/5.jpg', alt: 'Défilé Dior — vue d\'ensemble' },
    ],
    related: [
      { id: 'montfort', label: 'Montfort',            img: '/realisations/montfort.jpg', href: '/realisations' },
      { id: 'carven',   label: 'Carven',              img: '/realisations/carven.jpg',   href: '/realisations' },
      { id: 'jpg',      label: 'Jean-Paul Gaultier',  img: '/realisations/jpg-fw26.jpg', href: '/realisations' },
    ],
  },
  {
    slug: 'clash-de-cartier',
    title: 'Clash de Cartier',
    intro:
      "Fabrication et installation d'une brasserie éphémère à l'hôtel d'Évreux, place Vendôme. Affrontement absolu entre tradition et modernité, opposant velours rouge et laiton doré, chêne clair et aluminium brossé, moulures et tôle anodisée.",
    credit: 'Design : Bureau Betak · juillet 2019',
    photos: [
      { src: '/realisations/clash-de-cartier/1.jpg', alt: 'Clash de Cartier — salle principale' },
      { src: '/realisations/clash-de-cartier/2.jpg', alt: 'Clash de Cartier — tables dressées' },
      { src: '/realisations/clash-de-cartier/3.jpg', alt: 'Clash de Cartier — verrière' },
      { src: '/realisations/clash-de-cartier/4.jpg', alt: 'Clash de Cartier — détail laiton' },
      { src: '/realisations/clash-de-cartier/5.jpg', alt: 'Clash de Cartier — brasserie place Vendôme' },
    ],
    related: [
      { id: 'montfort', label: 'Montfort',  img: '/realisations/montfort.jpg', href: '/realisations' },
      { id: 'carven',   label: 'Carven',    img: '/realisations/carven.jpg',   href: '/realisations' },
      { id: 'offwhite', label: 'Off White', img: '/realisations/offwhite.jpg', href: '/realisations' },
    ],
  },
]

export const getProjet = (slug) => PROJETS.find((p) => p.slug === slug)

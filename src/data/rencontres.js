/* ──────────────────────────────────────────────────────────────
   Données des Rencontres / Témoignages G2V
   Chaque entrée alimente :
   - la grille de la page /temoignages
   - la page individuelle /temoignages/:slug
   ────────────────────────────────────────────────────────────── */

export const RENCONTRES = [
  {
    slug: 'emmanuel-guiraud',
    name: 'Emmanuel Guiraud',
    role: 'Fondateur — Soixan7e Quin5e',
    img: '/EG-1.jpg',
    bio: "Jusqu'à l'âge de trente ans, Emmanuel Guiraud va faire « beaucoup de bruit et de conneries », mais il rêve de découvrir le milieu du cinéma, de la publicité et des tournages. C'est auprès de Jean-Baptiste Mondino, où il débute en servant des cafés, que le déclic se produit. En 2003, après une enrichissante expérience de producteur chez Bandits Production, Emmanuel Guiraud fonde la société de production publicitaire Soixan7e Quin5e. Aujourd'hui, il est l'heureux producteur de films, de brand content, de clips musicaux et de formats alternatifs pour les plus grandes marques et agences de publicité.",
    quote: "C'est en rendant visite à l'un de mes amis dans ses bureaux, la société ROS, que j'ai découvert G2V. J'ai été séduit par leur style et, ayant moi-même un projet de bureaux situés dans le Xe arrondissement, un lieu vieillissant et abandonné, je les ai sollicités. Amoureux de la pierre et de l'ancien, je cherchais à donner à l'endroit un côté très minéral et métallique. En confiant la réalisation de ce site à G2V, le résultat a été conforme à mes espérances. Ils ont réussi à le transformer tout en préservant son authenticité.",
    project: {
      name: 'Soixan7e Quin5e',
      desc: 'Bureaux — Paris Xe',
      img: "/Photo Page d'accueil/Bloc Nos réalisations/photo bloc nos realisations soixante-quinze.jpg",
      href: '/realisations',
    },
  },
  {
    slug: 'sarah-hamizi',
    name: 'Sarah Hamizi',
    role: 'Fondatrice — La Barbière de Paris',
    img: '/Photos temoignages/SH-1.jpg',
    bio: "C'est à l'âge de huit ans que Sarah, qui aime regarder son grand-père lorsqu'il se rase, commence à s'intéresser à la beauté au masculin. En 2000, elle ouvre son premier salon rue Condorcet à Paris. En 2013, elle partage sa passion et son expérience en publiant un livre, Barbes et Moustaches, comment les tailler au poil (éd. Larousse). Sa notoriété croissante l'encourage à ouvrir son premier flagship rue Bertin-Poirée en 2014, qu'elle confie à G2V.",
    quote: "Ma rencontre avec G2V est avant tout une rencontre humaine avec une équipe passionnée par son travail. L'excellence et la promesse tenue sont les termes qui les résument le mieux ! Animée par Vincent, gros nounours et bulldozer que rien n'arrête, nous avons su nouer un partenariat fort entre nos deux entreprises, qui nous a conduits à ouvrir ensemble quatre salons de coiffure. G2V sait prendre des décisions rapidement et faire preuve d'une véritable agilité d'esprit. Ils sont capables de transformer les contraintes en atouts. Dans un monde où l'on doit se réinventer tous les jours ou presque, ils ont toujours respecté mon identité et su la retranscrire.",
    cta: { label: 'Découvrir nos réalisations', href: '/realisations' },
  },
  {
    slug: 'pierre-darme',
    name: 'Pierre Darme',
    role: "Directeur bureau d'études — Groupe Paul",
    img: '/Photos temoignages/PD-1.jpg',
    bio: "Formé à l'École nationale supérieure des arts et industries textiles (ENSAIT), spécialité architecture et décoration, Pierre Darme rejoint après son service militaire l'agence de l'architecte Gérard Doisy pendant treize ans, en tant que son seul élève. En 1988, Francis Holder lui confie la direction d'un bureau d'études au sein du groupe Paul. À ce jour, il compte à son actif les plans de 850 boulangeries Paul, une centaine de boutiques Ladurée et de nombreux projets immobiliers et industriels.",
    quote: "Cela fait six ans que nous travaillons avec G2V. Pour le bureau d'études que je dirige, c'est une véritable tranquillité d'esprit. G2V proposant tous les corps d'état, ils supervisent tout et nous évitons ainsi une multitude d'intervenants, de sous-traitants. C'est un échange permanent, tout est fluide avec leurs différents services et c'est essentiel pour avoir une bonne relation avec l'entreprise. Outre la réalisation de boulangeries, nous leur avons confié un immeuble de vingt-trois logements ainsi que trois appartements de très grand standing. G2V sait parfaitement s'adapter à toutes nos demandes et exigences. Côté matériaux et nouvelles techniques ou technologies, leurs propositions sont toujours les bienvenues.",
    project: {
      name: 'Boulangeries Paul',
      desc: 'Retail — France',
      img: '/Photo Realisations/paul.jpg',
      href: '/realisations',
    },
  },
  {
    slug: 'henri-sebaoun',
    name: 'Henri Sebaoun',
    role: 'Entrepreneur — Maison Carven',
    img: '/Photos temoignages/HS-1.jpg',
    bio: "C'est après avoir usé ses premières culottes dans les allées des magasins de vêtements que tenaient ses parents qu'il se lance naturellement dans le prêt-à-porter masculin. En 1994, il signe son premier contrat de licence avec la maison Carven, qu'il rachète en 2008. Dix ans plus tard, il revend la marque pour une nouvelle aventure avec Vanessa Bruno.",
    quote: "Ma rencontre avec G2V a eu lieu en 2011, avec l'ouverture d'un magasin Carven dans le quartier de Saint-Sulpice à Paris. Avec son équipe, il nous a sauvés au-delà de nos espérances. J'ai alors confié à G2V la réalisation de cinq boutiques Carven en France, et l'accompagnement de vingt-quatre ouvertures à l'international. J'ai compris qu'ils étaient vraiment uniques lors de la construction de notre siège social. Imaginez la prouesse que ce fut en si peu de temps !",
    project: {
      name: 'Boutiques Carven',
      desc: 'Retail — France & international',
      img: '/Photo Realisations/carven.jpg',
      href: '/realisations',
    },
  },
  {
    slug: 'alexandre-de-betak',
    name: 'Alexandre de Betak',
    role: 'Scénographe & Designer — Bureau Betak',
    img: '/Photos temoignages/ADB-1.jpg',
    bio: "Passionné de mode, d'arts et de design, Alexandre de Betak crée Bureau Betak en 1990 à Paris. Ce scénographe s'impose comme une figure incontournable de la mode et la référence pour concevoir des défilés à travers le monde. Les plus grandes marques de luxe lui accordent leur confiance, à Paris comme à New York et Shanghai, où il s'est implanté. Visionnaire, Alexandre est le premier à retransmettre un défilé sur internet, avec Victoria's Secret. Également designer, il conçoit des objets pour Artcurial et Swarovski, le design intérieur du restaurant Black Calvados ainsi qu'une chambre à son nom à l'hôtel Amour. En 2017, il publie un livre de photographies, Betak, Fashion Show Revolution (éd. Phaidon), qui retrace vingt-cinq ans de défilés.",
    quote: "Plus nous travaillons ensemble, plus nous nous donnons les moyens d'aller plus loin. On peut rêver « compliqué » et y arriver !",
    cta: { label: 'Découvrir nos réalisations', href: '/realisations' },
  },
  {
    slug: 'charles-zana',
    name: 'Charles Zana',
    role: 'Architecte & Designer',
    img: '/Photos temoignages/CZ-1.jpg',
    bio: "Né en 1960 à Sousse en Tunisie, Charles Zana grandit dans une famille de collectionneurs. Après l'obtention de son diplôme de l'école des Beaux-Arts de Paris en 1986, il part à New York et trouve sa voie en travaillant auprès de différents studios d'architecture. De retour à Paris, il passe son diplôme d'architecte DPLG et crée dans la foulée sa propre agence, en 1990. Très vite, il s'impose à l'international en réalisant des hôtels, restaurants, concept stores, appartements et maisons privés. L'élégance et les lignes fluides qui caractérisent ses réalisations rappellent l'âge d'or des années 30. Également designer, ensemblier et scénographe, Charles Zana signe des espaces de vie et des objets sophistiqués et sobres à la fois.",
    quote: "Ce sont des magiciens. J'adore ! Du gros œuvre jusqu'aux moindres détails, ils sont capables d'aligner tous les corps de métier et à toutes les étapes. C'est un travail irréprochable.",
    cta: { label: 'Découvrir nos réalisations', href: '/realisations' },
  },
  {
    slug: 'pauline-lorenzi-boisrond',
    name: 'Pauline Lorenzi-Boisrond',
    role: 'Directrice — Studio Ett Hem',
    img: '/Photos temoignages/PLB-1.jpg',
    bio: "Enfant, Pauline passe son temps dans la cabane de son jardin qu'elle aménage, décore et meuble avec ses trouvailles. Devenue directrice marketing dans le cinéma, elle quitte tout en 2017 pour faire l'école Boulle, spécialité design d'espace. À trente-cinq ans, enfin dans son élément, elle monte son studio d'architecture intérieure qu'elle baptise Ett Hem, « maison » en suédois.",
    quote: "Quand on change de vie professionnelle, on prend toujours un risque. Mais je ne regrette rien car je me sens tellement bien là où je suis, de retour à mes premières amours ; l'architecture d'intérieur. Je ne fais que ça, je ne pense qu'à ça. Débutante dans l'âme, j'ai besoin de bien m'entourer. Avec G2V, je suis rassurée, encadrée – je dirais même enveloppée – et c'est un bonheur de travailler dans de telles conditions. En déléguant la partie technique à leur bureau d'études, je peux me consacrer à la partie esthétique. J'ai réalisé avec eux un appartement rue Pergolèse à Paris. Je voulais que l'escalier vole. Ils ont compris ma vision et le résultat est là. C'est fascinant de constater qu'avec eux, le mot « impossible » n'existe pas. En quarante-huit heures, ils sont capables de réaliser ce que d'autres entreprendraient en trois semaines.",
    project: {
      name: 'Appartement Pergolèse',
      desc: 'Travaux — Paris XVIe',
      img: '/Photo Realisations/pergolese.jpg',
      href: '/realisations/pergolese',
    },
  },
  {
    slug: 'guillaume-henry',
    name: 'Guillaume Henry',
    role: 'Directeur créatif — Maison Patou',
    img: '/Photos temoignages/GH-1.jpg',
    bio: "Très jeune, la mode s'impose à lui à grands renforts d'esquisses et de dessins. Il intègre les Beaux-Arts de Troyes, puis enchaîne à Paris à l'école d'arts appliqués Duperré et l'Institut français de la mode, dont il sort diplômé en 2001. Lors de son premier stage chez Givenchy, il séduit, au point qu'on le garde trois ans. Après trois autres années passées auprès de Serge Cajfinger chez Paule Ka, il est engagé par la maison Carven pour renouveler l'image de cette belle endormie. Le monde de la mode, à commencer par la presse, s'enthousiasme immédiatement pour sa première collection, d'une élégante simplicité, d'une fraîcheur chic et pratique à la fois. Guillaume Henry est aujourd'hui à la tête de la maison Patou, qu'il réveille en offrant une nouvelle dimension affective à la garde-robe féminine.",
    quote: "J'ai fait la connaissance de G2V avec Henri Sebaoun lorsque j'étais chez Carven. Selon moi, concevoir un espace de vente, c'est une aventure humaine. On doit se poser la question de savoir dans quel état d'esprit on veut mettre les personnes qui investiront le lieu : qu'elles se sentent à l'aise, surprises, impressionnées… Et puis il y a l'environnement : dans quelle ville je suis, dans quel quartier, quel est mon univers concurrentiel… Tous ces postulats de départ, je les assimile et G2V les réalise exactement selon ma vision. On me dit parfois psychorigide mais selon moi, je suis juste méticuleux ; je sais ce que je veux et où je souhaite arriver. Lorsque je demande « des juxtapositions de matières et des volumes gourmands » ou « du bleu dans du rose », ils comprennent mon langage. De fait, j'ai confié à G2V la rénovation de ma petite « cabane » – comme je l'appelle – à 100 kilomètres de Paris. C'est une maison de village modeste qui était en très mauvais état. À l'intérieur, j'ai voulu que certains éléments neufs révèlent la patine du temps, témoignent de leur usage. C'est pourquoi, par exemple, je n'ai pas souhaité que le plan en marbre soit imperméabilisé. Qu'un verre de vin laisse une trace indélébile me plaît. Julie de G2V m'a chaperonné et je crois que ce chantier l'a amusé. Elle s'est investie comme si c'était pour elle.",
    cta: { label: 'Découvrir nos réalisations', href: '/realisations' },
  },
  {
    slug: 'francis-holder',
    name: 'Francis Holder',
    role: 'Fondateur — Paul & Ladurée',
    img: '/Photos temoignages/FH-1.jpg',
    bio: "Né à Lille d'une longue lignée de boulangers et d'agriculteurs, Francis Holder commence à travailler avec ses parents en 1953, dans la boulangerie réputée de Lille, place de Strasbourg. Le jeune homme y passe seize heures par jour. En 1958, son père Julien Holder décède et Francis reprend la boulangerie familiale avec sa mère. Ce sportif, qui a beaucoup pratiqué la gymnastique et la course d'endurance, amateur d'art et chineur forcené, se considère comme un « industrieux qui va de l'avant sans se poser de questions ». Ce patron-souverain est l'exemple vivant de cette soif d'entreprendre et de transmettre.",
    quote: "C'est en 2013 que j'ai découvert G2V, au cours de la rénovation d'un immeuble de bureaux m'appartenant. Séduit par leur travail et leur efficacité, je décide de leur confier la rénovation d'un appartement situé boulevard Saint-Germain. Je les ai emmenés sur d'autres voies, leur ai fait voir d'autres horizons. Je leur ai fait aimer l'excellence.",
    project: {
      name: 'Paul & Ladurée',
      desc: 'Retail & immobilier',
      img: '/Photo Realisations/paul.jpg',
      href: '/realisations',
    },
  },
]

export const getRencontre = (slug) => RENCONTRES.find((r) => r.slug === slug)

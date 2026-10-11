import type { L } from '../i18n';

/*
 * Everything marked PLACEHOLDER below is sample content.
 * Replace it with Ovnistudio's real details before going live.
 */

export const studio = {
  name: 'Ovnistudio',
  city: '[City]', // PLACEHOLDER
  country: '[Country]', // PLACEHOLDER
  since: '[Year]', // PLACEHOLDER
  languages: ['EN', 'FR', '[+1]'], // PLACEHOLDER
  email: 'hello@ovnistudio.com', // PLACEHOLDER
  phone: '+00 0 00 00 00 00', // PLACEHOLDER
  address: '[Street], [City], [Country]', // PLACEHOLDER
  // PLACEHOLDER: create a free form at formspree.io (or similar) and paste its endpoint here.
  formEndpoint: 'https://formspree.io/f/your-form-id',
  showreel: '', // PLACEHOLDER: URL of the showreel video (mp4 or YouTube/Vimeo link)
  founder: {
    slug: 'founder-name', // PLACEHOLDER: becomes /about/<slug>
    name: '[Founder name]', // PLACEHOLDER
    role: { en: 'Founder & Creative Director', fr: 'Fondateur & directeur de création' },
    bio: {
      en: '[Short founder bio: background, what drove you to start Ovnistudio, the kind of work you love.]',
      fr: '[Courte bio du fondateur : parcours, ce qui vous a poussé à créer Ovnistudio, le type de projets que vous aimez.]',
    },
  },
  socials: [
    { name: 'Instagram', url: 'https://instagram.com/' }, // PLACEHOLDER URLs
    { name: 'Behance', url: 'https://behance.net/' },
    { name: 'LinkedIn', url: 'https://linkedin.com/' },
    { name: 'YouTube', url: 'https://youtube.com/' },
  ],
};

// PLACEHOLDER numbers
export const stats: Array<{ value: string; label: L }> = [
  { value: '120+', label: { en: 'Projects shipped', fr: 'Projets livrés' } },
  { value: '40+', label: { en: 'Brands launched', fr: 'Marques lancées' } },
  { value: '4.9/5', label: { en: 'Average client rating', fr: 'Note client moyenne' } },
  { value: '12', label: { en: 'Countries served', fr: 'Pays servis' } },
];

// PLACEHOLDER client names: swap for real logos (SVG files in /public/clients/).
export const clients = ['Northwind', 'Lumen', 'Halcyon', 'Atlas & Co', 'Vertex', 'Kairo', 'Monolith', 'Solace'];

export type ServiceSlug =
  | 'website-creation'
  | 'brand-identity'
  | 'graphic-design'
  | 'creative-media'
  | '3d-modeling'
  | 'ai-content';

export interface Service {
  slug: ServiceSlug;
  icon: string;
  title: L;
  short: L;
  intro: L;
  deliverables: L<string[]>;
}

export const services: Service[] = [
  {
    slug: 'website-creation',
    icon: 'web',
    title: { en: 'Website creation', fr: 'Création de sites web' },
    short: {
      en: 'Fast, beautiful sites on Shopify, WooCommerce, WordPress or fully custom code.',
      fr: 'Des sites rapides et beaux, sur Shopify, WooCommerce, WordPress ou en code sur mesure.',
    },
    intro: {
      en: 'We design and build websites that load fast, rank well and turn visitors into customers. You get a site your team can update on its own, on the platform that fits your business.',
      fr: 'On conçoit et développe des sites qui chargent vite, se positionnent bien et transforment les visiteurs en clients. Vous obtenez un site que votre équipe peut mettre à jour seule, sur la plateforme adaptée à votre activité.',
    },
    deliverables: {
      en: ['UX and UI design', 'Responsive development', 'SEO foundations', 'CMS training', 'Analytics setup', 'Launch support'],
      fr: ['Design UX et UI', 'Développement responsive', 'Bases SEO', 'Formation au CMS', 'Mise en place des analytics', 'Accompagnement au lancement'],
    },
  },
  {
    slug: 'brand-identity',
    icon: 'brand',
    title: { en: 'Brand identity', fr: 'Identité de marque' },
    short: {
      en: 'Logos, color, type and voice that make your brand instantly recognisable.',
      fr: 'Logo, couleurs, typographie et ton qui rendent votre marque reconnaissable au premier coup d’œil.',
    },
    intro: {
      en: 'A brand is more than a logo. We define your positioning, then craft the visual system and voice that carry it everywhere, delivered as a brand book your team can actually use.',
      fr: 'Une marque, c’est plus qu’un logo. On définit votre positionnement, puis on crée le système visuel et le ton qui le portent partout, livrés dans une charte que votre équipe peut vraiment utiliser.',
    },
    deliverables: {
      en: ['Brand strategy', 'Logo and marks', 'Color and typography', 'Tone of voice', 'Brand guidelines', 'Launch assets'],
      fr: ['Stratégie de marque', 'Logo et déclinaisons', 'Couleurs et typographie', 'Ton de voix', 'Charte graphique', 'Kit de lancement'],
    },
  },
  {
    slug: 'graphic-design',
    icon: 'design',
    title: { en: 'Graphic design', fr: 'Design graphique' },
    short: {
      en: 'Packaging, print, social and campaign visuals that stay on brand.',
      fr: 'Packaging, print, réseaux sociaux et visuels de campagne fidèles à votre marque.',
    },
    intro: {
      en: 'From packaging to pitch decks, we design everything your brand puts into the world, with the same care as the identity itself.',
      fr: 'Du packaging au pitch deck, on conçoit tout ce que votre marque montre au monde, avec le même soin que l’identité elle-même.',
    },
    deliverables: {
      en: ['Packaging', 'Print and editorial', 'Social media kits', 'Ad campaigns', 'Pitch decks', 'Signage'],
      fr: ['Packaging', 'Print et édition', 'Kits réseaux sociaux', 'Campagnes publicitaires', 'Pitch decks', 'Signalétique'],
    },
  },
  {
    slug: 'creative-media',
    icon: 'media',
    title: { en: 'Creative media', fr: 'Médias créatifs' },
    short: {
      en: 'Brand films, product videos, motion design and photography.',
      fr: 'Films de marque, vidéos produit, motion design et photographie.',
    },
    intro: {
      en: 'Stories move people. We write, shoot, animate and edit films and visuals made for the screens your audience lives on.',
      fr: 'Les histoires font bouger les gens. On écrit, tourne, anime et monte des films et visuels pensés pour les écrans de votre audience.',
    },
    deliverables: {
      en: ['Brand films', 'Product videos', 'Motion design', 'Photography', 'Social cutdowns', 'Sound design'],
      fr: ['Films de marque', 'Vidéos produit', 'Motion design', 'Photographie', 'Formats courts réseaux', 'Sound design'],
    },
  },
  {
    slug: '3d-modeling',
    icon: 'cube',
    title: { en: '3D modeling', fr: 'Modélisation 3D' },
    short: {
      en: 'Product renders, 3D animations and interactive objects for web and ads.',
      fr: 'Rendus produit, animations 3D et objets interactifs pour le web et la pub.',
    },
    intro: {
      en: 'Show products before they exist and make your brand tangible. We model, texture, light and animate in 3D, for stills, films and real-time web.',
      fr: 'Montrez vos produits avant qu’ils existent et rendez votre marque tangible. On modélise, texture, éclaire et anime en 3D, pour l’image fixe, le film et le web temps réel.',
    },
    deliverables: {
      en: ['Product modeling', 'Photoreal renders', '3D animation', 'Web-ready 3D (glTF)', 'AR previews', 'Logo in 3D'],
      fr: ['Modélisation produit', 'Rendus photoréalistes', 'Animation 3D', '3D pour le web (glTF)', 'Aperçus AR', 'Logo en 3D'],
    },
  },
  {
    slug: 'ai-content',
    icon: 'ai',
    title: { en: 'AI content', fr: 'Contenu IA' },
    short: {
      en: 'AI-assisted visuals, video and copy, art-directed by humans.',
      fr: 'Visuels, vidéos et textes assistés par IA, avec une direction artistique humaine.',
    },
    intro: {
      en: 'We use AI where it helps: more variations, faster production, lower cost. Every output is art-directed and checked by our team so it still feels like you.',
      fr: 'On utilise l’IA là où elle aide : plus de variantes, une production plus rapide, un coût réduit. Chaque contenu est dirigé et vérifié par notre équipe pour qu’il vous ressemble.',
    },
    deliverables: {
      en: ['AI image campaigns', 'AI video and avatars', 'Content at scale', 'Custom brand models', 'Prompt libraries', 'Workflow setup'],
      fr: ['Campagnes visuelles IA', 'Vidéo et avatars IA', 'Contenu à grande échelle', 'Modèles de marque sur mesure', 'Bibliothèques de prompts', 'Mise en place des workflows'],
    },
  },
];

export const platforms: Array<{ slug: string; name: string; tagline: L; body: L; bestFor: L<string[]> }> = [
  {
    slug: 'shopify',
    name: 'Shopify',
    tagline: { en: 'E-commerce that scales with you', fr: 'Un e-commerce qui grandit avec vous' },
    body: {
      en: 'Custom Shopify themes, product pages that convert and apps wired in properly. Ideal when selling online is the heart of your business.',
      fr: 'Thèmes Shopify sur mesure, fiches produit qui convertissent et applications bien intégrées. Idéal quand la vente en ligne est au cœur de votre activité.',
    },
    bestFor: {
      en: ['D2C brands', 'Growing catalogs', 'International selling'],
      fr: ['Marques D2C', 'Catalogues en croissance', 'Vente à l’international'],
    },
  },
  {
    slug: 'woocommerce',
    name: 'WooCommerce',
    tagline: { en: 'Flexible shops on WordPress', fr: 'Des boutiques flexibles sur WordPress' },
    body: {
      en: 'A full online store on top of WordPress, with no monthly platform fees and complete control over your content and data.',
      fr: 'Une boutique complète sur WordPress, sans frais de plateforme mensuels et avec un contrôle total sur votre contenu et vos données.',
    },
    bestFor: {
      en: ['Content-led shops', 'Custom checkout flows', 'Existing WordPress sites'],
      fr: ['Boutiques orientées contenu', 'Tunnels de commande sur mesure', 'Sites WordPress existants'],
    },
  },
  {
    slug: 'wordpress',
    name: 'WordPress',
    tagline: { en: 'Sites your team can run', fr: 'Des sites que votre équipe maîtrise' },
    body: {
      en: 'Custom-designed WordPress sites with a clean editor, so your team can publish pages and articles without calling a developer.',
      fr: 'Des sites WordPress au design sur mesure avec un éditeur clair, pour que votre équipe publie pages et articles sans appeler un développeur.',
    },
    bestFor: {
      en: ['Corporate sites', 'Blogs and media', 'Multilingual sites'],
      fr: ['Sites corporate', 'Blogs et médias', 'Sites multilingues'],
    },
  },
  {
    slug: 'custom-code',
    name: 'Custom code',
    tagline: { en: 'No limits, no templates', fr: 'Sans limites, sans template' },
    body: {
      en: 'Hand-coded sites and web apps with modern frameworks, 3D and motion. For when performance and originality matter most.',
      fr: 'Sites et applications web codés à la main avec des frameworks modernes, de la 3D et du motion. Quand la performance et l’originalité comptent avant tout.',
    },
    bestFor: {
      en: ['Immersive brand sites', 'Web apps', 'Headless commerce'],
      fr: ['Sites de marque immersifs', 'Applications web', 'E-commerce headless'],
    },
  },
];

export const comparison: Array<{ typical: L; studio: L }> = [
  {
    typical: { en: 'Account managers between you and the makers', fr: 'Des chefs de projet entre vous et ceux qui font' },
    studio: { en: 'You talk directly to the people doing the work', fr: 'Vous parlez directement à ceux qui réalisent' },
  },
  {
    typical: { en: 'Web, brand and video split across vendors', fr: 'Web, marque et vidéo éclatés entre prestataires' },
    studio: { en: 'Six crafts under one roof, one consistent brand', fr: 'Six métiers sous un toit, une marque cohérente' },
  },
  {
    typical: { en: 'Templates dressed up as custom work', fr: 'Des templates déguisés en sur-mesure' },
    studio: { en: 'Designed from a blank page for your brand', fr: 'Conçu à partir d’une page blanche pour vous' },
  },
  {
    typical: { en: 'Open-ended hours and surprise invoices', fr: 'Heures sans fin et factures surprises' },
    studio: { en: 'Fixed scope and price agreed upfront', fr: 'Périmètre et prix fixés dès le départ' },
  },
  {
    typical: { en: 'Months before you see anything', fr: 'Des mois avant de voir quoi que ce soit' },
    studio: { en: 'Weekly progress you can click through', fr: 'Des avancées hebdo que vous pouvez tester' },
  },
  {
    typical: { en: 'Handover, then silence', fr: 'Livraison, puis silence' },
    studio: { en: '30 days of launch support included', fr: '30 jours d’accompagnement post-lancement inclus' },
  },
];

export interface Film {
  slug: string;
  title: L;
  duration: string;
  description: L;
  video?: string; // PLACEHOLDER: path or URL of the film (e.g. /films/kairo-launch.mp4)
}

export interface Case {
  slug: string;
  brand: string;
  sector: L;
  year: string;
  services: ServiceSlug[];
  summary: L;
  challenge: L;
  approach: L;
  results: Array<{ value: string; label: L }>;
  hue: number; // tint used for the generated thumbnail until real media is added
  featured?: boolean;
  thumbnail?: string; // PLACEHOLDER: image path for the card
  preview?: string; // PLACEHOLDER: short muted loop (mp4) played on hover
  films: Film[];
}

// PLACEHOLDER case studies: every brand, number and film below is sample content.
const filmPair = (brand: string): Film[] => [
  {
    slug: 'launch-film',
    title: { en: `${brand} launch film`, fr: `Film de lancement ${brand}` },
    duration: '1:24',
    description: {
      en: 'The hero film that opened the campaign, cut for web, social and events.',
      fr: 'Le film principal qui a ouvert la campagne, décliné pour le web, les réseaux et l’événementiel.',
    },
  },
  {
    slug: 'behind-the-scenes',
    title: { en: 'Behind the scenes', fr: 'Les coulisses' },
    duration: '2:10',
    description: {
      en: 'How the project came together, from first sketches to final render.',
      fr: 'Comment le projet a pris forme, des premiers croquis au rendu final.',
    },
  },
];

const mk = (
  slug: string,
  brand: string,
  sector: L,
  services: ServiceSlug[],
  hue: number,
  summary: L,
  featured = false,
): Case => ({
  slug,
  brand,
  sector,
  year: '[Year]',
  services,
  hue,
  featured,
  summary,
  challenge: {
    en: `[Describe the problem ${brand} came to us with: the business context, what was not working and what success looked like.]`,
    fr: `[Décrivez le problème avec lequel ${brand} est venu : le contexte, ce qui ne fonctionnait pas et ce que serait la réussite.]`,
  },
  approach: {
    en: '[Explain the key ideas and decisions: research, concept, design direction, production and launch.]',
    fr: '[Expliquez les idées et décisions clés : recherche, concept, direction créative, production et lancement.]',
  },
  results: [
    { value: '+000%', label: { en: 'Metric one', fr: 'Indicateur un' } },
    { value: '00k', label: { en: 'Metric two', fr: 'Indicateur deux' } },
    { value: '0 wk', label: { en: 'Time to launch', fr: 'Délai de lancement' } },
  ],
  films: filmPair(brand),
});

export const cases: Case[] = [
  mk('kairo', 'Kairo', { en: 'Consumer tech', fr: 'Tech grand public' }, ['website-creation', '3d-modeling', 'creative-media'], 268,
    { en: 'A product launch with a 3D hero and a site built to sell.', fr: 'Un lancement produit avec un héros 3D et un site pensé pour vendre.' }, true),
  mk('lumen', 'Lumen', { en: 'Skincare', fr: 'Cosmétique' }, ['brand-identity', 'graphic-design', 'website-creation'], 290,
    { en: 'A soft, luminous identity and Shopify store for a clean-beauty brand.', fr: 'Une identité douce et lumineuse et une boutique Shopify pour une marque de beauté clean.' }, true),
  mk('northwind', 'Northwind', { en: 'Outdoor apparel', fr: 'Vêtements outdoor' }, ['creative-media', 'ai-content'], 250,
    { en: 'A campaign film and 200 AI-assisted visuals for the winter drop.', fr: 'Un film de campagne et 200 visuels assistés par IA pour la collection hiver.' }, true),
  mk('halcyon', 'Halcyon', { en: 'Hospitality', fr: 'Hôtellerie' }, ['brand-identity', 'website-creation'], 310,
    { en: 'A boutique hotel rebrand with a booking-first WordPress site.', fr: 'La refonte d’un hôtel boutique avec un site WordPress centré sur la réservation.' }, true),
  mk('vertex', 'Vertex', { en: 'Fintech', fr: 'Fintech' }, ['website-creation', 'graphic-design'], 240,
    { en: 'A custom-coded marketing site that made a complex product simple.', fr: 'Un site vitrine codé sur mesure qui rend un produit complexe simple.' }, true),
  mk('monolith', 'Monolith', { en: 'Architecture', fr: 'Architecture' }, ['3d-modeling', 'creative-media'], 280,
    { en: 'Photoreal 3D renders and a fly-through film for an unbuilt tower.', fr: 'Rendus 3D photoréalistes et film de survol pour une tour pas encore construite.' }, true),
  mk('solace', 'Solace', { en: 'Wellness app', fr: 'Application bien-être' }, ['brand-identity', 'ai-content'], 300,
    { en: 'A calm identity and an AI content system for daily social posts.', fr: 'Une identité apaisante et un système de contenu IA pour les posts quotidiens.' }),
  mk('atlas', 'Atlas & Co', { en: 'Travel', fr: 'Voyage' }, ['website-creation', 'creative-media'], 260,
    { en: 'A WooCommerce store for curated trips, with destination films.', fr: 'Une boutique WooCommerce de voyages sur mesure, avec des films de destination.' }),
  mk('orbit', 'Orbit Coffee', { en: 'Food & drink', fr: 'Alimentation & boissons' }, ['brand-identity', 'graphic-design'], 275,
    { en: 'Packaging and identity for a specialty roaster’s first retail range.', fr: 'Packaging et identité pour la première gamme en magasin d’un torréfacteur.' }),
  mk('nova', 'Nova Audio', { en: 'Audio hardware', fr: 'Matériel audio' }, ['3d-modeling', 'website-creation', 'ai-content'], 255,
    { en: 'Interactive 3D product viewer and launch content for new headphones.', fr: 'Visionneuse 3D interactive et contenus de lancement pour un nouveau casque.' }),
];

export const processSteps: Array<{ title: L; body: L; duration: L }> = [
  {
    title: { en: 'Discover', fr: 'Découvrir' },
    body: { en: 'A call and a short workshop to understand your goals, audience and constraints.', fr: 'Un appel et un court atelier pour comprendre vos objectifs, votre audience et vos contraintes.' },
    duration: { en: 'Week 1', fr: 'Semaine 1' },
  },
  {
    title: { en: 'Define', fr: 'Définir' },
    body: { en: 'We turn what we learned into a clear plan: scope, timeline and fixed price.', fr: 'On transforme ce qu’on a appris en plan clair : périmètre, planning et prix fixe.' },
    duration: { en: 'Week 1–2', fr: 'Semaine 1–2' },
  },
  {
    title: { en: 'Design', fr: 'Concevoir' },
    body: { en: 'Concepts, then one direction refined with you until it feels right.', fr: 'Des pistes, puis une direction affinée avec vous jusqu’à ce qu’elle sonne juste.' },
    duration: { en: 'Week 2–4', fr: 'Semaine 2–4' },
  },
  {
    title: { en: 'Build', fr: 'Produire' },
    body: { en: 'We develop, render and edit, sharing live progress every week.', fr: 'On développe, on rend et on monte, avec des avancées partagées chaque semaine.' },
    duration: { en: 'Week 4–8', fr: 'Semaine 4–8' },
  },
  {
    title: { en: 'Launch', fr: 'Lancer' },
    body: { en: 'Go live, train your team and keep supporting you for 30 days.', fr: 'Mise en ligne, formation de votre équipe et accompagnement pendant 30 jours.' },
    duration: { en: 'Launch + 30 days', fr: 'Lancement + 30 jours' },
  },
];

// PLACEHOLDER reviews: replace with real, attributable client quotes.
export const reviews: Array<{ quote: L; name: string; role: string }> = [
  {
    quote: { en: '[Client quote about the website project and the results it brought.]', fr: '[Citation client sur le projet de site et les résultats obtenus.]' },
    name: '[Client name]', role: '[Role], [Company]',
  },
  {
    quote: { en: '[Client quote about the rebrand and working with the team.]', fr: '[Citation client sur la refonte de marque et le travail avec l’équipe.]' },
    name: '[Client name]', role: '[Role], [Company]',
  },
  {
    quote: { en: '[Client quote about the launch film or 3D work.]', fr: '[Citation client sur le film de lancement ou le travail 3D.]' },
    name: '[Client name]', role: '[Role], [Company]',
  },
  {
    quote: { en: '[Client quote about speed, communication or the fixed price.]', fr: '[Citation client sur la rapidité, la communication ou le prix fixe.]' },
    name: '[Client name]', role: '[Role], [Company]',
  },
  {
    quote: { en: '[Client quote about the AI content and how it scaled their output.]', fr: '[Citation client sur le contenu IA et le volume produit.]' },
    name: '[Client name]', role: '[Role], [Company]',
  },
];

export const faqs: Array<{ q: L; a: L }> = [
  {
    q: { en: 'How much does a project cost?', fr: 'Combien coûte un projet ?' },
    a: { en: 'Every project gets a fixed price after our discovery call. [Add your typical starting prices here.]', fr: 'Chaque projet a un prix fixe établi après notre appel de découverte. [Ajoutez ici vos prix de départ habituels.]' },
  },
  {
    q: { en: 'How long does it take?', fr: 'Combien de temps ça prend ?' },
    a: { en: 'Most websites and identities take 4 to 8 weeks. Films and 3D depend on scope; we give you a timeline before we start.', fr: 'La plupart des sites et identités prennent 4 à 8 semaines. Films et 3D dépendent du périmètre ; on vous donne un planning avant de commencer.' },
  },
  {
    q: { en: 'Do you work with clients abroad?', fr: 'Travaillez-vous avec des clients à l’étranger ?' },
    a: { en: 'Yes. We work remotely in English and French and adapt meetings to your time zone.', fr: 'Oui. On travaille à distance en français et en anglais et on adapte les réunions à votre fuseau horaire.' },
  },
  {
    q: { en: 'Which platform should my website use?', fr: 'Quelle plateforme choisir pour mon site ?' },
    a: { en: 'It depends on what you sell and who updates the site. We recommend one of Shopify, WooCommerce, WordPress or custom code during discovery.', fr: 'Cela dépend de ce que vous vendez et de qui met à jour le site. On vous recommande Shopify, WooCommerce, WordPress ou du code sur mesure lors de la découverte.' },
  },
  {
    q: { en: 'Can you turn our logo into 3D?', fr: 'Pouvez-vous passer notre logo en 3D ?' },
    a: { en: 'Yes. Send us an SVG of your logo and we model it in 3D for your website, videos and social media.', fr: 'Oui. Envoyez-nous le SVG de votre logo et on le modélise en 3D pour votre site, vos vidéos et vos réseaux.' },
  },
  {
    q: { en: 'How do you use AI?', fr: 'Comment utilisez-vous l’IA ?' },
    a: { en: 'As a production tool, never as a replacement for creative direction. Every AI output is directed, edited and checked by our team.', fr: 'Comme un outil de production, jamais en remplacement de la direction créative. Chaque contenu IA est dirigé, retouché et vérifié par notre équipe.' },
  },
  {
    q: { en: 'What happens after launch?', fr: 'Que se passe-t-il après le lancement ?' },
    a: { en: 'You get 30 days of support included, then optional monthly care plans for updates and new content.', fr: 'Vous bénéficiez de 30 jours d’accompagnement inclus, puis de forfaits mensuels optionnels pour les mises à jour et nouveaux contenus.' },
  },
  {
    q: { en: 'Who owns the work?', fr: 'À qui appartient le travail ?' },
    a: { en: 'You do. Once the final invoice is paid, all rights to the deliverables transfer to you.', fr: 'À vous. Une fois la facture finale réglée, tous les droits sur les livrables vous sont transférés.' },
  },
];

// PLACEHOLDER blog posts
export const posts: Array<{ slug: string; title: L; excerpt: L; date: string; minutes: number; body: L<string[]> }> = [
  {
    slug: 'shopify-vs-woocommerce',
    title: { en: 'Shopify or WooCommerce: which one fits your brand?', fr: 'Shopify ou WooCommerce : lequel convient à votre marque ?' },
    excerpt: { en: 'A plain comparison of costs, flexibility and day-to-day work.', fr: 'Une comparaison simple des coûts, de la flexibilité et du quotidien.' },
    date: '2026-09-18', minutes: 6,
    body: { en: ['[Article body placeholder. Write your article here.]'], fr: ['[Corps de l’article à remplacer. Rédigez votre article ici.]'] },
  },
  {
    slug: 'logo-in-3d',
    title: { en: 'Why your logo deserves a 3D version', fr: 'Pourquoi votre logo mérite une version 3D' },
    excerpt: { en: 'How a 3D mark makes websites, films and ads feel more premium.', fr: 'Comment un logo 3D rend sites, films et pubs plus premium.' },
    date: '2026-08-30', minutes: 4,
    body: { en: ['[Article body placeholder. Write your article here.]'], fr: ['[Corps de l’article à remplacer. Rédigez votre article ici.]'] },
  },
  {
    slug: 'ai-content-done-right',
    title: { en: 'AI content, done right', fr: 'Le contenu IA, bien fait' },
    excerpt: { en: 'Where AI saves time and where a human still makes the difference.', fr: 'Là où l’IA fait gagner du temps et là où l’humain fait encore la différence.' },
    date: '2026-08-12', minutes: 5,
    body: { en: ['[Article body placeholder. Write your article here.]'], fr: ['[Corps de l’article à remplacer. Rédigez votre article ici.]'] },
  },
];

export const brandColors = [
  { name: 'Void', hex: '#07060B' },
  { name: 'Nebula', hex: '#1A0F2E' },
  { name: 'Ovni Purple', hex: '#4B2A8A' },
  { name: 'Aura', hex: '#8E6CEF' },
  { name: 'Haze', hex: '#C9B8F5' },
  { name: 'Starlight', hex: '#F4F1FA' },
];

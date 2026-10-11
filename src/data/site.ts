import type { L } from '../i18n';

/*
 * Everything marked PLACEHOLDER below is sample content.
 * Replace it with Ovnistudio's real details before going live.
 */

export const studio = {
  name: 'Ovnistudio',
  trustpilot: 'https://www.trustpilot.com/review/ovnistudio.net',
  since: '2022',
  languages: ['EN', 'FR', 'AR'],
  email: 'hello@ovnistudio.net',
  phone: '+213 797 29 52 54',
  // PLACEHOLDER: create a free form at formspree.io (or similar) and paste its endpoint here.
  formEndpoint: 'https://formspree.io/f/your-form-id',
  // PLACEHOLDER: paste the YouTube or Vimeo link of the founder video here,
  // e.g. 'https://www.youtube.com/watch?v=XXXX' or 'https://vimeo.com/123456'
  introVideo: '',
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
    { name: 'Instagram', url: 'https://www.instagram.com/ovnistd' },
    { name: 'Trustpilot', url: 'https://www.trustpilot.com/review/ovnistudio.net' },
  ],
};

export const stats: Array<{ value: string; label: L }> = [
  { value: '2 wks', label: { en: 'Maximum delivery time, store and 3D included', fr: 'Délai maximum, boutique et 3D compris' } },
  { value: '100%', label: { en: 'Yours to keep: files, source code and assets, free', fr: 'À vous : fichiers, code source et assets, gratuitement' } },
  { value: '3', label: { en: 'Clients at a time, never more', fr: 'Clients à la fois, jamais plus' } },
  { value: '24h', label: { en: 'Average reply to new inquiries', fr: 'Délai moyen de réponse aux demandes' } },
];

// PLACEHOLDER client names: swap for real logos (SVG files in /public/clients/).
export const clients = ['Northwind', 'Lumen', 'Halcyon', 'Atlas & Co', 'Vertex', 'Kairo', 'Monolith', 'Solace'];

export type ServiceSlug =
  | 'shopify-store'
  | '3d-product-modeling'
  | 'ai-vfx-content'
  | '3d-animation'
  | 'trend-content';

export interface Service {
  slug: ServiceSlug;
  icon: string;
  visual: string;
  title: L;
  short: L;
  intro: L;
  deliverables: L<string[]>;
}

/** The 3D Launch Pack: everything below is delivered together, in 2 weeks max. */
export const pack = {
  name: { en: '3D Launch Pack', fr: 'Pack Lancement 3D' },
  pitch: {
    en: 'A Shopify store built to convert, with your product in photoreal 3D. No samples, no photoshoot, no waiting for production.',
    fr: 'Une boutique Shopify pensée pour convertir, avec votre produit en 3D photoréaliste. Sans échantillon, sans shooting, sans attendre la production.',
  },
  why: {
    en: 'More and more brands launch with products made in China that sit in a warehouse and never reach the founder’s hands. We make that product real: photoreal 3D from your supplier photos, images from every angle, and AI + VFX content of people holding it, so customers trust what they buy.',
    fr: 'De plus en plus de marques se lancent avec des produits fabriqués en Chine, stockés en entrepôt, que le fondateur n’a jamais eus en main. On rend ce produit réel : 3D photoréaliste à partir des photos du fournisseur, des images sous tous les angles, et des contenus IA + VFX de personnes qui le tiennent, pour que vos clients aient confiance.',
  },
  included: {
    en: [
      'Delivered in 2 weeks max, exactly as you need it',
      'Follow-up after launch: changes any time, just message us',
      'Every file you need, 100% free: 3D models, renders, videos, source code',
    ],
    fr: [
      'Livré en 2 semaines maximum, exactement comme vous le voulez',
      'Suivi après le lancement : des modifications à tout moment, il suffit de nous écrire',
      'Tous les fichiers dont vous avez besoin, 100 % gratuits : modèles 3D, rendus, vidéos, code source',
    ],
  },
};

export const services: Service[] = [
  {
    slug: 'shopify-store',
    icon: 'web',
    visual: 'web',
    title: { en: 'Shopify store that converts', fr: 'Boutique Shopify qui convertit' },
    short: {
      en: 'A fast, custom Shopify store with 3D on every product page, built to turn visitors into buyers.',
      fr: 'Une boutique Shopify rapide et sur mesure, avec la 3D sur chaque fiche produit, pensée pour transformer les visiteurs en acheteurs.',
    },
    intro: {
      en: 'Your store is where the sale happens. We design and build a Shopify store around your product: clear offer, trust signals, fast pages and a checkout that works on every phone. Your 3D product sits on every page so customers see exactly what they get.',
      fr: 'C’est sur votre boutique que la vente se fait. On conçoit et développe une boutique Shopify autour de votre produit : une offre claire, des éléments de confiance, des pages rapides et un paiement qui marche sur tous les téléphones. Votre produit en 3D est présent sur chaque page pour que le client voie exactement ce qu’il achète.',
    },
    deliverables: {
      en: ['Custom Shopify theme', 'Conversion-focused product pages', '3D product images on every page', 'Mobile-first checkout', 'Apps, payments and shipping set up', 'Training to run it yourself'],
      fr: ['Thème Shopify sur mesure', 'Fiches produit orientées conversion', 'Images produit 3D sur chaque page', 'Paiement pensé pour le mobile', 'Applications, paiements et livraison configurés', 'Formation pour gérer la boutique seul'],
    },
  },
  {
    slug: '3d-product-modeling',
    icon: 'cube',
    visual: 'cube',
    title: { en: 'Photoreal 3D product', fr: 'Produit en 3D photoréaliste' },
    short: {
      en: 'Your product modeled in 3D from supplier photos, with images from every angle. No sample needed.',
      fr: 'Votre produit modélisé en 3D à partir des photos du fournisseur, avec des images sous tous les angles. Pas besoin d’échantillon.',
    },
    intro: {
      en: 'Send us your supplier photos, dimensions and references. We model, texture and light your product until it is indistinguishable from a studio photo, so you can sell it before it even arrives.',
      fr: 'Envoyez-nous les photos du fournisseur, les dimensions et vos références. On modélise, texture et éclaire votre produit jusqu’à ce qu’il soit impossible à distinguer d’une photo studio, pour le vendre avant même qu’il arrive.',
    },
    deliverables: {
      en: ['Accurate 3D model', 'Realistic materials and labels', 'Studio-quality images from every angle', 'Detail close-ups', 'Color and variant versions', 'Web-ready 3D file (glTF)', 'Source files included'],
      fr: ['Modèle 3D fidèle', 'Matières et étiquettes réalistes', 'Images qualité studio sous tous les angles', 'Gros plans détaillés', 'Versions couleurs et variantes', 'Fichier 3D pour le web (glTF)', 'Fichiers sources inclus'],
    },
  },
  {
    slug: 'ai-vfx-content',
    icon: 'ai',
    visual: 'ai',
    title: { en: 'AI + VFX realistic content', fr: 'Contenu réaliste IA + VFX' },
    short: {
      en: 'People holding and using your product, created with AI and VFX for more trust.',
      fr: 'Des personnes qui tiennent et utilisent votre produit, créées avec l’IA et les VFX pour plus de confiance.',
    },
    intro: {
      en: 'Customers trust products they see in real hands. We combine your 3D product with AI and VFX to create realistic photos and videos of people holding, opening and using it, without a shoot or a single physical sample.',
      fr: 'Les clients font confiance aux produits qu’ils voient dans de vraies mains. On combine votre produit 3D avec l’IA et les VFX pour créer des photos et vidéos réalistes de personnes qui le tiennent, l’ouvrent et l’utilisent, sans shooting ni échantillon.',
    },
    deliverables: {
      en: ['Hands-on product photos', 'UGC-style videos', 'Lifestyle scenes', 'Model and avatar content', 'Ad-ready formats', 'Art-directed by our team'],
      fr: ['Photos produit en main', 'Vidéos style UGC', 'Scènes lifestyle', 'Contenus avec mannequins et avatars', 'Formats prêts pour la pub', 'Direction artistique par notre équipe'],
    },
  },
  {
    slug: '3d-animation',
    icon: 'media',
    visual: 'media',
    title: { en: '3D animation & product reveals', fr: 'Animation 3D & révélations produit' },
    short: {
      en: 'Cinematic product reveals and VFX animations that stop the scroll.',
      fr: 'Des révélations produit cinématographiques et des animations VFX qui arrêtent le scroll.',
    },
    intro: {
      en: 'A launch deserves a moment. We animate your product in 3D: reveals, exploded views, ingredient and feature shots, and VFX scenes impossible to film, cut for your store, ads and social media.',
      fr: 'Un lancement mérite un moment fort. On anime votre produit en 3D : révélations, vues éclatées, plans ingrédients et fonctionnalités, scènes VFX impossibles à filmer, déclinés pour votre boutique, vos pubs et vos réseaux.',
    },
    deliverables: {
      en: ['Product reveal film', 'VFX animations', 'Feature and detail shots', 'Hero video for the store', 'Vertical cuts for social', 'Sound design'],
      fr: ['Film de révélation produit', 'Animations VFX', 'Plans fonctionnalités et détails', 'Vidéo principale pour la boutique', 'Formats verticaux pour les réseaux', 'Sound design'],
    },
  },
  {
    slug: 'trend-content',
    icon: 'design',
    visual: 'design',
    title: { en: 'Trend-driven content', fr: 'Contenu qui suit les tendances' },
    short: {
      en: 'Content built on what is working right now, to engage more customers.',
      fr: 'Des contenus construits sur ce qui marche en ce moment, pour engager plus de clients.',
    },
    intro: {
      en: 'We follow the formats and marketing strategies that are performing right now and turn them into content for your brand, so your launch shows up where your customers already are.',
      fr: 'On suit les formats et les stratégies marketing qui fonctionnent en ce moment et on les transforme en contenus pour votre marque, pour que votre lancement apparaisse là où sont déjà vos clients.',
    },
    deliverables: {
      en: ['Trend research', 'Short-form video concepts', 'Hooks and scripts', 'Ad creatives', 'Launch content calendar', 'Ready-to-post files'],
      fr: ['Veille des tendances', 'Concepts de vidéos courtes', 'Accroches et scripts', 'Créas publicitaires', 'Calendrier de contenus de lancement', 'Fichiers prêts à publier'],
    },
  },
];

export const comparison: Array<{ typical: L; studio: L }> = [
  {
    typical: { en: 'Wait for samples and production before you can sell', fr: 'Attendre échantillons et production avant de vendre' },
    studio: { en: 'Photoreal 3D from supplier photos, sell before it arrives', fr: '3D photoréaliste depuis les photos fournisseur, vendez avant réception' },
  },
  {
    typical: { en: 'Pay a photographer, studio and models', fr: 'Payer photographe, studio et mannequins' },
    studio: { en: 'AI + VFX content of people holding your product', fr: 'Contenus IA + VFX de personnes avec votre produit en main' },
  },
  {
    typical: { en: 'A generic theme with a few flat photos', fr: 'Un thème générique et quelques photos plates' },
    studio: { en: 'A store built to convert, with 3D images from every angle', fr: 'Une boutique pensée pour convertir, avec des images 3D sous tous les angles' },
  },
  {
    typical: { en: 'Store, photos and videos split across vendors', fr: 'Boutique, photos et vidéos éclatées entre prestataires' },
    studio: { en: 'Store, 3D and content in one pack', fr: 'Boutique, 3D et contenus dans un seul pack' },
  },
  {
    typical: { en: 'Six to eight weeks before launch', fr: 'Six à huit semaines avant le lancement' },
    studio: { en: 'Live in 2 weeks, max', fr: 'En ligne en 2 semaines, maximum' },
  },
  {
    typical: { en: 'Handover, then extra fees for every change or file', fr: 'Livraison, puis des frais pour chaque modif ou fichier' },
    studio: { en: 'Follow-up after launch and all files free', fr: 'Suivi après le lancement et tous les fichiers gratuits' },
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
  mk('kairo', 'Kairo', { en: 'Consumer tech', fr: 'Tech grand public' }, ['shopify-store', '3d-product-modeling', '3d-animation'], 268,
    { en: 'A gadget sold out on pre-order with 3D renders made before the first unit shipped.', fr: 'Un gadget vendu en précommande grâce à des rendus 3D faits avant la première expédition.' }, true),
  mk('lumen', 'Lumen', { en: 'Skincare', fr: 'Cosmétique' }, ['3d-product-modeling', 'ai-vfx-content', 'shopify-store'], 290,
    { en: 'A serum brand launched with photoreal bottles and AI hands-on content.', fr: 'Une marque de sérums lancée avec des flacons photoréalistes et des contenus IA en main.' }, true),
  mk('northwind', 'Northwind', { en: 'Outdoor gear', fr: 'Équipement outdoor' }, ['3d-animation', 'trend-content'], 250,
    { en: 'A product reveal film and trend-based ads for a winter launch.', fr: 'Un film de révélation et des pubs basées sur les tendances pour un lancement d’hiver.' }, true),
  mk('halcyon', 'Halcyon', { en: 'Home & decor', fr: 'Maison & déco' }, ['shopify-store', '3d-product-modeling'], 310,
    { en: 'A home decor store showing every lamp in photoreal 3D, from every angle.', fr: 'Une boutique déco qui montre chaque lampe en 3D photoréaliste, sous tous les angles.' }, true),
  mk('vertex', 'Vertex', { en: 'Fitness', fr: 'Fitness' }, ['shopify-store', 'ai-vfx-content'], 240,
    { en: 'A fitness accessory store with UGC-style AI videos that lifted conversion.', fr: 'Une boutique d’accessoires fitness avec des vidéos IA style UGC qui ont boosté la conversion.' }, true),
  mk('monolith', 'Monolith', { en: 'Fragrance', fr: 'Parfum' }, ['3d-product-modeling', '3d-animation'], 280,
    { en: 'A perfume bottle revealed in a VFX film before the glass was even produced.', fr: 'Un flacon de parfum révélé dans un film VFX avant même que le verre soit produit.' }, true),
  mk('solace', 'Solace', { en: 'Wellness', fr: 'Bien-être' }, ['ai-vfx-content', 'trend-content'], 300,
    { en: 'Daily trend content and lifestyle scenes for a wellness brand.', fr: 'Des contenus tendance quotidiens et des scènes lifestyle pour une marque bien-être.' }),
  mk('atlas', 'Atlas & Co', { en: 'Travel accessories', fr: 'Accessoires de voyage' }, ['shopify-store', '3d-product-modeling'], 260,
    { en: 'A luggage store with 3D images of every bag and color.', fr: 'Une boutique de bagages avec des images 3D de chaque sac et coloris.' }),
  mk('orbit', 'Orbit Coffee', { en: 'Food & drink', fr: 'Alimentation & boissons' }, ['3d-product-modeling', 'trend-content'], 275,
    { en: 'Coffee packaging in 3D and short-form launch content.', fr: 'Des packagings de café en 3D et des contenus courts de lancement.' }),
  mk('nova', 'Nova Audio', { en: 'Audio', fr: 'Audio' }, ['3d-product-modeling', 'shopify-store', '3d-animation'], 255,
    { en: 'Headphones sold from 3D only, with 3D images and a reveal film.', fr: 'Un casque vendu uniquement grâce à la 3D, avec des images 3D et un film de révélation.' }),
];

export const processSteps: Array<{ title: L; body: L; duration: L }> = [
  {
    title: { en: 'Free consultation', fr: 'Consultation gratuite' },
    body: { en: 'A call to understand your product, your brand and your launch date.', fr: 'Un appel pour comprendre votre produit, votre marque et votre date de lancement.' },
    duration: { en: 'Day 1', fr: 'Jour 1' },
  },
  {
    title: { en: 'Product brief', fr: 'Brief produit' },
    body: { en: 'You send supplier photos, dimensions and references. We lock the plan.', fr: 'Vous envoyez photos fournisseur, dimensions et références. On valide le plan.' },
    duration: { en: 'Day 1–2', fr: 'Jour 1–2' },
  },
  {
    title: { en: '3D product', fr: 'Produit 3D' },
    body: { en: 'We model your product in photoreal 3D and you approve every detail.', fr: 'On modélise votre produit en 3D photoréaliste et vous validez chaque détail.' },
    duration: { en: 'Day 2–6', fr: 'Jour 2–6' },
  },
  {
    title: { en: 'Store & content', fr: 'Boutique & contenus' },
    body: { en: 'We build the Shopify store and create renders, AI + VFX content and animations.', fr: 'On construit la boutique Shopify et on crée rendus, contenus IA + VFX et animations.' },
    duration: { en: 'Day 5–12', fr: 'Jour 5–12' },
  },
  {
    title: { en: 'Launch & follow-up', fr: 'Lancement & suivi' },
    body: { en: 'Go live, get all your files for free, and message us for changes any time.', fr: 'Mise en ligne, tous vos fichiers gratuits, et des modifs à tout moment sur simple message.' },
    duration: { en: 'Day 14 and after', fr: 'Jour 14 et après' },
  },
];

export const reviews: Array<{ quote: string; name: string; role: string }> = [
  {
    quote: 'Worked with Ovnistudio for a teaser campaign and he delivered exactly what we were looking for!! took a few rounds of edits but he was very receptive and finished the final product in a timely manner :) would highly recommend',
    name: 'Sweet Loren’s', role: 'Marketing Manager',
  },
  {
    quote: 'Thrilled with the final product! Ovnistudio delivered exceptional work with deep expertise and a personal touch. Fast, professional, and exceeded expectations. Highly recommend! 👏🏽',
    name: 'Vela Reformer', role: 'Owner',
  },
  {
    quote: 'Ovnistudio is a talented and professional team. They understood my vision perfectly and brought it to life with exceptional skill. Highly collaborative and patient, they delivered exactly what I envisioned. Highly recommend!',
    name: 'Sheila', role: 'Marketing Manager',
  },
  {
    quote: 'We loved collaborating with Ovnistudio again! Their creativity, responsiveness, and quality of work are truly outstanding',
    name: 'That’so Italy', role: 'Marketing Manager',
  },
  {
    quote: 'The final result exceeded our expectations! Ovnistudio delivered stunning, professional work in record time with incredible responsiveness. Highly satisfied!',
    name: 'That’so Italy', role: 'Marketing Manager',
  },
  {
    quote: 'They was great in brining exactly what I needed to life. Their creative eye and touch really helped elevate the entire project',
    name: 'AlexBM', role: 'Manager of Junior Sanchez',
  },
];

export const faqs: Array<{ q: L; a: L }> = [
  {
    q: { en: 'Do I need to have the product in hand?', fr: 'Dois-je avoir le produit en main ?' },
    a: { en: 'No. Supplier photos, dimensions and a few references are enough for us to build a photoreal 3D version.', fr: 'Non. Les photos du fournisseur, les dimensions et quelques références suffisent pour créer une version 3D photoréaliste.' },
  },
  {
    q: { en: 'How long does it take?', fr: 'Combien de temps ça prend ?' },
    a: { en: 'Two weeks maximum for the full pack: Shopify store, 3D product and content.', fr: 'Deux semaines maximum pour le pack complet : boutique Shopify, produit 3D et contenus.' },
  },
  {
    q: { en: 'How much does the pack cost?', fr: 'Combien coûte le pack ?' },
    a: { en: 'It depends on the number of products and videos. Book a free consultation and we give you a fixed price. [Add your starting price here.]', fr: 'Cela dépend du nombre de produits et de vidéos. Réservez une consultation gratuite et on vous donne un prix fixe. [Ajoutez votre prix de départ ici.]' },
  },
  {
    q: { en: 'Will the 3D really look like my product?', fr: 'La 3D ressemblera-t-elle vraiment à mon produit ?' },
    a: { en: 'Yes. You review and approve the model before we use it anywhere, and we adjust it until it matches.', fr: 'Oui. Vous vérifiez et validez le modèle avant toute utilisation, et on l’ajuste jusqu’à ce qu’il corresponde.' },
  },
  {
    q: { en: 'Why only Shopify?', fr: 'Pourquoi uniquement Shopify ?' },
    a: { en: 'Because it is the fastest and most reliable way to launch and scale a product brand, and focusing on one platform lets us deliver in two weeks.', fr: 'Parce que c’est le moyen le plus rapide et fiable de lancer et faire grandir une marque produit, et se concentrer sur une seule plateforme nous permet de livrer en deux semaines.' },
  },
  {
    q: { en: 'What happens after delivery?', fr: 'Que se passe-t-il après la livraison ?' },
    a: { en: 'We keep following your project. If you need any change, just contact us any time.', fr: 'On continue de suivre votre projet. Si vous avez besoin d’une modification, contactez-nous à tout moment.' },
  },
  {
    q: { en: 'Do I get the files?', fr: 'Est-ce que je récupère les fichiers ?' },
    a: { en: 'Yes, 100% free: 3D models, renders, videos and the store’s code are yours.', fr: 'Oui, 100 % gratuitement : modèles 3D, rendus, vidéos et code de la boutique vous appartiennent.' },
  },
  {
    q: { en: 'Do you work with clients abroad?', fr: 'Travaillez-vous avec des clients à l’étranger ?' },
    a: { en: 'Yes. We work remotely in English, French and Arabic.', fr: 'Oui. On travaille à distance en français, anglais et arabe.' },
  },
];

// PLACEHOLDER blog posts
export const posts: Array<{ slug: string; title: L; excerpt: L; date: string; minutes: number; body: L<string[]> }> = [
  {
    slug: 'sell-before-your-stock-arrives',
    title: { en: 'How to sell your product before your stock arrives', fr: 'Comment vendre votre produit avant l’arrivée du stock' },
    excerpt: { en: 'Why photoreal 3D lets new brands launch while the product is still at the supplier.', fr: 'Pourquoi la 3D photoréaliste permet de lancer une marque pendant que le produit est encore chez le fournisseur.' },
    date: '2026-09-18', minutes: 6,
    body: { en: ['[Article body placeholder. Write your article here.]'], fr: ['[Corps de l’article à remplacer. Rédigez votre article ici.]'] },
  },
  {
    slug: 'why-3d-converts',
    title: { en: 'Why 3D product pages convert better', fr: 'Pourquoi les fiches produit en 3D convertissent mieux' },
    excerpt: { en: 'Every angle, every detail: what shoppers need to trust a product they cannot touch.', fr: 'Chaque angle, chaque détail : ce dont l’acheteur a besoin pour faire confiance à un produit qu’il ne peut pas toucher.' },
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

/** Our story: the founder's path, told in the first person. */
export const story: Array<{ year: string; title: L; body: L; link?: { url: string; label: L } }> = [
  {
    year: '2010',
    title: { en: 'Short films with my family', fr: 'Des courts métrages en famille' },
    body: {
      en: 'I was 9 years old and already making short movies with my family. That is where my passion for content creation started.',
      fr: 'J’avais 9 ans et je tournais déjà des courts métrages avec ma famille. C’est là qu’est née ma passion pour la création de contenu.',
    },
  },
  {
    year: '2013',
    title: { en: 'My first YouTube video', fr: 'Ma première vidéo YouTube' },
    body: {
      en: 'I posted my first video on YouTube, playing Minecraft with my little voice. A bad laptop and school soon made it hard to keep going.',
      fr: 'J’ai publié ma première vidéo sur YouTube, en jouant à Minecraft avec ma petite voix. Un mauvais ordinateur et l’école m’ont vite empêché de continuer.',
    },
    link: { url: 'https://www.youtube.com/watch?v=HZdX8LGLIvQ', label: { en: 'Watch the 2013 video', fr: 'Voir la vidéo de 2013' } },
  },
  {
    year: '2016',
    title: { en: 'My first gaming computer', fr: 'Mon premier PC gamer' },
    body: {
      en: 'With a real computer at last, I started learning everything I could: video editing, and coding with HTML and CSS.',
      fr: 'Avec enfin un vrai ordinateur, j’ai commencé à tout apprendre : le montage vidéo, et le code avec HTML et CSS.',
    },
  },
  {
    year: '2017',
    title: { en: 'Discovering After Effects', fr: 'La découverte d’After Effects' },
    body: {
      en: 'I discovered After Effects and started making motion design.',
      fr: 'J’ai découvert After Effects et j’ai commencé le motion design.',
    },
  },
  {
    year: '2018',
    title: { en: 'Motion designer for TNG esports', fr: 'Motion designer pour TNG esports' },
    body: {
      en: 'I joined TNG, a Fortnite esports team, as their motion designer and video editor. Introducing their new players pushed me to learn 3D, and the team was impressed by my creativity and speed of delivery.',
      fr: 'J’ai rejoint TNG, une équipe esport Fortnite, comme motion designer et monteur vidéo. Présenter leurs nouveaux joueurs m’a poussé à apprendre la 3D, et l’équipe a été impressionnée par ma créativité et ma rapidité.',
    },
  },
  {
    year: '2019',
    title: { en: '3D for NFT projects', fr: 'La 3D pour des projets NFT' },
    body: {
      en: 'I worked with NFT projects, creating 3D NFTs and short films. I tried things nobody had done before and helped build huge hype around one of those projects.',
      fr: 'J’ai travaillé avec des projets NFT, en créant des NFT en 3D et des courts métrages. J’ai tenté des choses que personne n’avait faites et contribué à créer une énorme hype autour de l’un de ces projets.',
    },
  },
  {
    year: '2020',
    title: { en: 'Choosing my own path', fr: 'Choisir ma propre voie' },
    body: {
      en: 'I finished school and got my baccalaureate, but chose to work hard on my dream instead of university. I tried trading, lost a lot of money and time, and realised my real strength was 3D.',
      fr: 'J’ai terminé l’école et obtenu mon baccalauréat, mais j’ai choisi de travailler dur sur mon rêve plutôt que l’université. J’ai essayé le trading, j’y ai perdu beaucoup d’argent et de temps, et j’ai compris que ma vraie force, c’était la 3D.',
    },
  },
  {
    year: '2022',
    title: { en: '3D for e-commerce', fr: 'La 3D pour l’e-commerce' },
    body: {
      en: 'Friends selling products from China had no time or budget for photoshoots. I offered them 3D models of their products. They loved it: they saved time, converted better and no longer had to wait for production.',
      fr: 'Des amis qui vendaient des produits venus de Chine n’avaient ni le temps ni le budget pour des shootings. Je leur ai proposé des modèles 3D de leurs produits. Ils ont adoré : ils gagnaient du temps, convertissaient mieux et n’attendaient plus la production.',
    },
  },
  {
    year: '2022',
    title: { en: 'Ovnistudio is born', fr: 'Naissance d’Ovnistudio' },
    body: {
      en: 'I launched Ovnistudio on Instagram to share my work and my passion, help brands with their content and teach others to create, because content creation is my second passion.',
      fr: 'J’ai lancé Ovnistudio sur Instagram pour partager mon travail et ma passion, aider les marques avec leurs contenus et apprendre aux autres à créer, parce que la création de contenu est ma deuxième passion.',
    },
  },
];

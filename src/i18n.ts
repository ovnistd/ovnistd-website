export type Lang = 'en' | 'fr';
export type L<T = string> = { en: T; fr: T };

export const langs: Lang[] = ['en', 'fr'];

/** Pick the right language from a bilingual value. Plain values pass through. */
export function t<T>(value: L<T> | T, lang: Lang): T {
  if (value && typeof value === 'object' && 'en' in (value as object) && 'fr' in (value as object)) {
    return (value as L<T>)[lang];
  }
  return value as T;
}

/** Build an internal link for the given language: EN lives at the root, FR under /fr. */
export function href(path: string, lang: Lang): string {
  const clean = path === '/' ? '/' : '/' + path.replace(/^\/+|\/+$/g, '') + '/';
  if (lang === 'en') return clean;
  return clean === '/' ? '/fr/' : '/fr' + clean;
}

/** The same page in the other language. */
export function altPath(pathname: string, lang: Lang): string {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  if (lang === 'fr') return p.replace(/^\/fr(\/|$)/, '/') || '/';
  return '/fr' + p;
}

/** getStaticPaths helper: one entry for EN (root) and one for FR (/fr). */
export function langPaths<P extends Record<string, string | undefined> = {}, X = {}>(
  extra: Array<{ params: P; props: X }> = [{ params: {} as P, props: {} as X }],
) {
  return langs.flatMap((lang) =>
    extra.map((e) => ({
      params: { lang: lang === 'en' ? undefined : 'fr', ...e.params },
      props: { lang, ...e.props },
    })),
  );
}

export const ui = {
  nav: {
    services: { en: 'Services', fr: 'Services' },
    work: { en: 'Work', fr: 'Projets' },
    about: { en: 'Our story', fr: 'Notre histoire' },
    contact: { en: 'Contact', fr: 'Contact' },
    cta: { en: 'Free consultation', fr: 'Consultation gratuite' },
    menu: { en: 'Menu', fr: 'Menu' },
  },
  hero: {
    badgeTag: { en: 'New', fr: 'Nouveau' },
    badge: { en: 'AI + VFX product content is here!', fr: 'Les contenus produit IA + VFX sont là !' },
    title1: { en: 'Sell your product', fr: 'Vendez votre produit' },
    title2: { en: 'before it arrives', fr: 'avant qu’il arrive' },
    sub: {
      en: 'A Shopify store that converts, with your product in photoreal 3D and AI + VFX content. No samples, no photoshoot. Ready in 2 weeks.',
      fr: 'Une boutique Shopify qui convertit, avec votre produit en 3D photoréaliste et des contenus IA + VFX. Sans échantillon, sans shooting. Prête en 2 semaines.',
    },
    cta1: { en: 'Free consultation', fr: 'Consultation gratuite' },
    cta2: { en: 'Meet the founder', fr: 'Rencontrer le fondateur' },
    factDelivery: { en: 'Delivery', fr: 'Livraison' },
    factDeliveryValue: { en: '2 weeks max', fr: '2 semaines max' },
    factSince: { en: 'Since', fr: 'Depuis' },
    factLangs: { en: 'We speak', fr: 'On parle' },
  },
  sections: {
    services: {
      tag: { en: 'The 3D Launch Pack', fr: 'Le Pack Lancement 3D' },
      title: { en: 'One pack.\nEverything to launch.', fr: 'Un seul pack.\nTout pour lancer.' },
      sub: {
        en: 'A Shopify store built to convert, with your product in photoreal 3D. No samples, no photoshoot, no waiting for production. Two weeks, max.',
        fr: 'Une boutique Shopify pensée pour convertir, avec votre produit en 3D photoréaliste. Sans échantillon, sans shooting, sans attendre la production. Deux semaines, maximum.',
      },
    },
    intro: {
      tag: { en: 'Meet the founder', fr: 'Le fondateur' },
      title: { en: 'A word from\nthe founder', fr: 'Quelques mots\ndu fondateur' },
      sub: {
        en: 'Why I started Ovnistudio and how 3D can launch your brand before your product arrives.',
        fr: 'Pourquoi j’ai créé Ovnistudio et comment la 3D peut lancer votre marque avant l’arrivée de votre produit.',
      },
      soon: { en: 'Video coming soon', fr: 'Vidéo bientôt disponible' },
      play: { en: 'Play video', fr: 'Lire la vidéo' },
    },
    stats: {
      tag: { en: 'Our track record', fr: 'Nos résultats' },
    },
    why: {
      tag: { en: 'Why us', fr: 'Pourquoi nous' },
      title: { en: 'Launch without\nthe product in hand', fr: 'Lancez sans avoir\nle produit en main' },
      sub: {
        en: 'Many new brands source from China and never hold their product before selling it. Here is what changes when you launch with us.',
        fr: 'Beaucoup de nouvelles marques s’approvisionnent en Chine et ne tiennent jamais leur produit avant de le vendre. Voici ce qui change quand vous lancez avec nous.',
      },
      typical: { en: 'The usual way', fr: 'La méthode classique' },
      studio: { en: 'Ovnistudio', fr: 'Ovnistudio' },
    },
    work: {
      tag: { en: 'Selected work', fr: 'Projets choisis' },
      title: { en: 'Work that leaves a mark', fr: 'Des projets qui marquent' },
      sub: {
        en: 'A few launches, rebrands and films we are proud of. Hover a project to play its film.',
        fr: 'Quelques lancements, refontes et films dont on est fiers. Survolez un projet pour lancer son film.',
      },
      all: { en: 'See all work', fr: 'Voir tous les projets' },
    },
    process: {
      tag: { en: 'How we work', fr: 'Notre méthode' },
      title: { en: 'Two weeks,\nfive steps', fr: 'Deux semaines,\ncinq étapes' },
      sub: {
        en: 'From free consultation to launch day in 14 days max, and we keep following up after.',
        fr: 'De la consultation gratuite au lancement en 14 jours maximum, et on continue le suivi après.',
      },
    },
    reviews: {
      tag: { en: 'Testimonials', fr: 'Témoignages' },
      title: { en: 'What clients say about us', fr: 'Ce que disent nos clients' },
      sub: {
        en: 'Founders, marketers and makers who trusted us with their brand.',
        fr: 'Fondateurs, marketeurs et créateurs qui nous ont confié leur marque.',
      },
    },
    cta: {
      title1: { en: 'Ready to make', fr: 'Prêt à rendre' },
      title2: { en: 'your product real?', fr: 'votre produit réel ?' },
      sub: {
        en: 'Book a free consultation. Tell us about your product and launch date, and we reply within 24 hours.',
        fr: 'Réservez une consultation gratuite. Parlez-nous de votre produit et de votre date de lancement, on répond sous 24 heures.',
      },
    },
  },
  common: {
    learnMore: { en: 'Learn more', fr: 'En savoir plus' },
    viewCase: { en: 'View case study', fr: 'Voir le projet' },
    watchFilm: { en: 'Watch film', fr: 'Voir le film' },
    back: { en: 'Back', fr: 'Retour' },
    films: { en: 'Films', fr: 'Films' },
    deliverables: { en: 'What you get', fr: 'Ce que vous obtenez' },
    related: { en: 'Related work', fr: 'Projets liés' },
    services: { en: 'Services', fr: 'Services' },
    client: { en: 'Client', fr: 'Client' },
    year: { en: 'Year', fr: 'Année' },
    sector: { en: 'Sector', fr: 'Secteur' },
    challenge: { en: 'The challenge', fr: 'Le défi' },
    approach: { en: 'Our approach', fr: 'Notre approche' },
    results: { en: 'Results', fr: 'Résultats' },
    platforms: { en: 'Platforms we build on', fr: 'Les plateformes qu’on maîtrise' },
    readMore: { en: 'Read article', fr: 'Lire l’article' },
    minRead: { en: 'min read', fr: 'min de lecture' },
    otherFilms: { en: 'More films from this project', fr: 'Autres films de ce projet' },
    placeholder: { en: 'Placeholder', fr: 'À remplacer' },
  },
  footer: {
    blurb: {
      en: '3D-powered Shopify stores for brands launching new products.',
      fr: 'Des boutiques Shopify boostées à la 3D pour les marques qui lancent de nouveaux produits.',
    },
    quick: { en: 'Quick links', fr: 'Liens rapides' },
    services: { en: 'Services', fr: 'Services' },
    contact: { en: 'Contact', fr: 'Contact' },
    socials: { en: 'Socials', fr: 'Réseaux' },
    legal: { en: 'Legal', fr: 'Légal' },
    rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
  },
} as const;

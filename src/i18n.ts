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
    about: { en: 'About', fr: 'À propos' },
    contact: { en: 'Contact', fr: 'Contact' },
    cta: { en: 'Start a project', fr: 'Lancer un projet' },
    menu: { en: 'Menu', fr: 'Menu' },
  },
  hero: {
    badgeTag: { en: 'New', fr: 'Nouveau' },
    badge: { en: 'AI content studio just launched!', fr: 'Notre studio de contenu IA est lancé !' },
    title1: { en: 'Brands that feel', fr: 'Des marques' },
    title2: { en: 'out of this world', fr: 'venues d’ailleurs' },
    sub: {
      en: 'Websites, brand identities, 3D and films for ambitious brands, designed and built by one studio.',
      fr: 'Sites web, identités de marque, 3D et films pour les marques ambitieuses, conçus et réalisés par un seul studio.',
    },
    cta1: { en: 'Start a project', fr: 'Lancer un projet' },
    cta2: { en: 'Watch showreel', fr: 'Voir le showreel' },
    factPlace: { en: 'Based in', fr: 'Basé à' },
    factSince: { en: 'Since', fr: 'Depuis' },
    factLangs: { en: 'We speak', fr: 'On parle' },
  },
  sections: {
    services: {
      tag: { en: 'What we do', fr: 'Ce qu’on fait' },
      title: { en: 'Six crafts, one studio', fr: 'Six métiers, un seul studio' },
      sub: {
        en: 'From the first sketch to the launch film, every piece of your brand is made under one roof, so it all fits together.',
        fr: 'Du premier croquis au film de lancement, chaque élément de votre marque est fait sous le même toit, pour que tout s’accorde.',
      },
    },
    stats: {
      tag: { en: 'Our track record', fr: 'Nos résultats' },
    },
    why: {
      tag: { en: 'Why us', fr: 'Pourquoi nous' },
      title: { en: 'Not your typical agency', fr: 'Pas une agence comme les autres' },
      sub: {
        en: 'Same budget, very different experience. Here is what changes when you work with a studio instead of a machine.',
        fr: 'Même budget, expérience très différente. Voici ce qui change quand vous travaillez avec un studio plutôt qu’une machine.',
      },
      typical: { en: 'Typical agency', fr: 'Agence classique' },
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
      title: { en: 'Five steps, zero surprises', fr: 'Cinq étapes, zéro surprise' },
      sub: {
        en: 'A clear path from first call to launch day, with a fixed scope and a weekly check-in at every step.',
        fr: 'Un chemin clair du premier appel au jour du lancement, avec un périmètre fixe et un point hebdo à chaque étape.',
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
      title1: { en: 'Ready to land', fr: 'Prêt à faire atterrir' },
      title2: { en: 'something new?', fr: 'quelque chose de neuf ?' },
      sub: {
        en: 'Tell us about your project. We reply within one business day with next steps and a ballpark.',
        fr: 'Parlez-nous de votre projet. On répond sous un jour ouvré avec les prochaines étapes et une estimation.',
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
      en: 'Independent creative studio for websites, brands, 3D and films.',
      fr: 'Studio créatif indépendant pour sites web, marques, 3D et films.',
    },
    quick: { en: 'Quick links', fr: 'Liens rapides' },
    services: { en: 'Services', fr: 'Services' },
    contact: { en: 'Contact', fr: 'Contact' },
    socials: { en: 'Socials', fr: 'Réseaux' },
    legal: { en: 'Legal', fr: 'Légal' },
    rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
  },
} as const;

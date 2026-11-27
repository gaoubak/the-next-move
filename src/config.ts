// Réglages globaux du site.
export const SITE = {
  // URL publique (sitemap, balises canoniques, aperçus LinkedIn/WhatsApp).
  url: 'https://the-next-move.be',
  name: 'The Next Move',
  owner: 'Tatiana Rizk',
  role: 'Consultante · Coach · Formatrice',
  title: 'The Next Move — Tatiana Rizk · Orientation, méthodes de travail et IA',
  description:
    'Tatiana Rizk accompagne étudiants, professionnels et équipes : orientation et évolution professionnelle, organisation et méthodes de travail, intelligence artificielle et formation.',
  email: 'Tatianarizk.pro@outlook.com',
  // Domaine déclaré dans Plausible pour activer la mesure d'audience (sans cookies). Vide = désactivé.
  plausibleDomain: '',
};

// Réseaux sociaux affichés sur la page Contact et en pied de page.
// L'ordre compte : LinkedIn (profil de Tatiana) s'affiche au-dessus d'Instagram (The Next Move).
export const SOCIAL = [
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/tatiana-rizk/' },
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/__thenextmove__/' },
] as const;

// Informations légales (page Mentions légales). Un champ vide n'est pas affiché :
// rien de provisoire ni d'inventé n'apparaît en ligne.
export const LEGAL = {
  status: '', // forme juridique, ex. « Indépendante en personne physique »
  bce: '', // numéro d'entreprise BCE, ex. « BE 0123.456.789 » (prévu en janvier 2027)
  vat: '', // numéro de TVA, s'il diffère du numéro BCE
  address: '', // adresse géographique de l'activité (voir la note dans mentions-legales.astro)
};

// Navigation principale, dans l'ordre du parcours visiteur.
export const NAV = [
  { href: '/accompagnements', label: 'Accompagnements' },
  { href: '/formations', label: 'Formations IA' },
  { href: '/a-propos', label: 'À propos' },
];

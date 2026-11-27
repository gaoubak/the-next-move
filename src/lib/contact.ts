// Choix du formulaire de contact. La clé sert dans les liens (/contact?profil=jeunes&demande=ia),
// le libellé est ce que Tatiana reçoit dans la demande.
export const PROFILES = [
  { key: 'jeunes', label: 'Étudiant·e / jeune diplômé·e' },
  { key: 'professionnels', label: 'Professionnel·le / indépendant·e' },
  { key: 'entreprises', label: 'Entreprise / équipe' },
] as const;

export const REQUESTS = [
  { key: 'orientation', label: 'Orientation / évolution professionnelle' },
  { key: 'organisation', label: 'Organisation / méthodes de travail' },
  { key: 'ia', label: 'Intelligence artificielle / formation' },
  { key: 'autre', label: 'Autre / à préciser' },
] as const;

export type ProfileKey = (typeof PROFILES)[number]['key'];
export type RequestKey = (typeof REQUESTS)[number]['key'];

// Lien vers le formulaire avec les choix déjà cochés.
export function contactHref(profil?: ProfileKey, demande?: RequestKey) {
  const params = new URLSearchParams();
  if (profil) params.set('profil', profil);
  if (demande) params.set('demande', demande);
  const q = params.toString();
  return q ? `/contact?${q}#demande` : '/contact#demande';
}

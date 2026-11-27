# The Next Move — site vitrine

Site de Tatiana Rizk, construit avec [Astro](https://astro.build) : HTML statique, aucun JavaScript inutile, images optimisées automatiquement (AVIF + WebP).

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/
npm run preview   # prévisualise le build
```

## Pages

| Page | URL |
|---|---|
| Accueil | `/` |
| Accompagnements (jeunes, professionnels) | `/accompagnements` |
| Entreprises & équipes | `/entreprises` |
| Formations IA | `/formations` |
| Formats & tarifs + FAQ | `/tarifs` |
| À propos | `/a-propos` |
| Contact & rendez-vous | `/contact` |
| Plaquette entreprises (A4, à enregistrer en PDF) | `/entreprises/plaquette` |
| Ressources (articles) | `/ressources` |
| Mentions légales | `/mentions-legales` |

L'ordre du menu se règle dans `NAV` (`src/config.ts`). Chaque sous-page affiche un fil d'Ariane (avec données structurées pour Google).

## ⚠️ Données d'exemple à valider

Certaines informations sont des **exemples** en attendant les vraies valeurs. Elles portent un badge jaune « exemple » en local (`npm run dev`) et le build affiche un avertissement tant qu'elles ne sont pas validées :

- **Formations** : durée, taille de groupe, prérequis et prix → `src/content/trainings.json` (passer `placeholder` à `false`)
- **Pack Accompagnement** (210 € au lieu de 240 €) → `src/content/prices.json`
- **Modalités de paiement**, facturation, annulation → `PAYMENT` dans `src/config.ts`

## Avant la mise en ligne

1. **`src/config.ts`** : renseigner `url` (domaine définitif), et éventuellement `bookingUrl` (Cal.com / Calendly), `linkedin`, `plausibleDomain`.
2. **Mentions légales** : compléter les champs `[À compléter]` dans `src/pages/mentions-legales.astro`.
3. **Image de partage** : `public/og-image.png` est générée à partir du logo et du portrait (`npm run og` pour la régénérer).

## Modifier le contenu (sans toucher à la mise en page)

| Contenu | Fichier |
|---|---|
| Accompagnements & offre entreprises | `src/content/offers.json` |
| Formations | `src/content/trainings.json` |
| Tarifs | `src/content/prices.json` |
| FAQ | `src/content/faq.json` |
| « Ils m'ont fait confiance » | `src/content/clients.json` + logos dans `src/assets/clients/` |
| Articles (Ressources) | `src/content/articles/*.md` — `draft: true` = brouillon visible seulement en local |
| Témoignages | `src/content/testimonials/*.md` (copier `_exemple.md` sans le `_`) |
| Photos | `src/assets/photos/` (mêmes noms de fichiers) |

Le lien « Ressources » du menu n'apparaît qu'à partir du premier article publié. Les sections « Ils m'ont fait confiance » et « Témoignages » n'apparaissent qu'à partir du premier élément ajouté.

Exemple pour `clients.json` :

```json
[
  { "id": "acme", "name": "Acme", "logo": "acme.svg", "url": "https://acme.com", "order": 1 },
  { "id": "universite", "name": "Université X", "order": 2 }
]
```

Sans `logo`, le nom s'affiche en texte. Les logos sont convertis en WebP au build (SVG conseillé).

## Contact & rendez-vous

- Sans `bookingUrl` : sélecteur de créneaux (jours, moments, visio/téléphone) qui prépare un e-mail pré-rempli, + bouton « Copier l'adresse ».
- Avec `bookingUrl` (Cal.com, Calendly) dans `src/config.ts` : l'agenda s'affiche directement dans la page et tous les boutons « Prendre rendez-vous » y mènent.

Pour un formulaire avec envoi automatique (ex. Resend), seule `src/pages/contact.astro` est à modifier, avec un adaptateur serveur Astro.

## Animations

Entrée animée du hero, bandeau de mots-clés défilant, apparitions au défilement (`.reveal`, `[data-stagger]`), tracé de la méthode, jauges de niveau, transitions entre pages. Toutes sont désactivées si l'utilisateur a choisi de réduire les animations dans son système.

## Déploiement

Site 100 % statique : Netlify, Cloudflare Pages ou Vercel (`netlify.toml` fourni).

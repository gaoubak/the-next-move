import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const offers = defineCollection({
  loader: file('src/content/offers.json'),
  schema: z.object({
    order: z.number(),
    tag: z.string(),
    title: z.string(),
    short: z.string(),
    // Chaque prestation : intitulé, besoin auquel elle répond, bénéfice concret,
    // et type de demande pré-coché dans le formulaire de contact.
    items: z.array(z.object({
      title: z.string(),
      need: z.string(),
      benefit: z.string(),
      request: z.enum(['orientation', 'organisation', 'ia', 'autre']),
    })),
  }),
});

// « Ils m'ont fait confiance » : la section n'apparaît que si la liste n'est pas vide.
// logo : nom d'un fichier placé dans src/assets/clients/ (SVG, PNG ou WebP). Sans logo, le nom s'affiche.
const clients = defineCollection({
  loader: file('src/content/clients.json'),
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    url: z.url().optional(),
    order: z.number().default(0),
  }),
});

const trainings = defineCollection({
  loader: file('src/content/trainings.json'),
  schema: z.object({
    order: z.number(),
    level: z.number().min(1).max(3),
    title: z.string(),
    tagline: z.string(), // phrase de positionnement
    audience: z.string(),
    prerequisites: z.string(),
    description: z.array(z.string()), // paragraphes du programme détaillé
    program: z.array(z.string()), // « Au programme »
    applications: z.array(z.string()), // applications pratiques
    skills: z.array(z.string()), // « À l'issue de la formation, vous serez capable de »
  }),
});


const faq = defineCollection({
  loader: file('src/content/faq.json'),
  schema: z.object({ order: z.number(), question: z.string(), answer: z.string() }),
});

// Un fichier .md par témoignage. Les fichiers commençant par « _ » sont ignorés (modèle).
const testimonials = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: 'src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    context: z.string(),
    order: z.number().default(0),
  }),
});

// Ressources / articles. draft: true = visible uniquement en local (npm run dev), jamais publié.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { offers, trainings, faq, testimonials, clients, articles };

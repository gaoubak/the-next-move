import { getCollection } from 'astro:content';

export async function getTrainings() {
  const trainings = (await getCollection('trainings')).sort((a, b) => a.data.order - b.data.order);
  return trainings;
}

// Articles publiés ; en local, les brouillons sont inclus pour pouvoir les relire.
export async function getArticles() {
  return (await getCollection('articles', ({ data }) => import.meta.env.DEV || !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingTime(text = '') {
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}


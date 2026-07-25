import { getCollection } from 'astro:content';
import { collections } from '../content.config';

type CollectionName = keyof typeof collections;

export async function getCollectionPaths(collectionName: CollectionName) {
  const items = await getCollection(collectionName);
  return items.map(item => ({
    params: { slug: item.id },
    props: { item },
  }));
}

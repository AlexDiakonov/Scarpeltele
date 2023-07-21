import { createClient } from '@sanity/client';
import { useNextSanityImage } from 'next-sanity-image';

export const client = createClient({
  projectId: 'x0v1n57b',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03',
  token: process.env.NEXT_PUBLIC_SANITY_KEY,
});

export const urlFor = (source) => useNextSanityImage(client, source);

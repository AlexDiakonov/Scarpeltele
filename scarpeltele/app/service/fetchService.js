import { client } from '../lib/client';

export const getPosts = async (setter) => {
  const query = '*[_type == "post"] | order(_createdAt desc)';
  const post = await client.fetch(query);

  return setter(post);
};

'use client';

import HeroSection from './HeroSection';
import Layout from '../components/Layout/Layout';
import { client } from '../lib/client';
import ContactUs from '../components/ContactUs/ContactUs';
import BlogPostSection from './BlogPostsSection';
import { useState } from 'react';
import { useEffect } from 'react';

// const getPost = async () => {
//   const query = '*[_type == "post"] | order(_createdAt desc) [0]';
//   const post = await client.fetch(query);
//   return post;
// };

const Blog = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async (setter) => {
      const query = '*[_type == "post"] | order(_createdAt desc) [0]';
      const post = await client.fetch(query);
      return setter(post);
    };
    if (!post.author) {
      getPost(setPost);
    }
  }, [post, setPost]);

  return (
    <Layout>
      {post.author && <HeroSection post={post} />}
      <BlogPostSection />
      <ContactUs />
    </Layout>
  );
};

export default Blog;

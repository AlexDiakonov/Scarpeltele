import HeroSection from './HeroSection';
import Layout from '../components/Layout/Layout';
import { client } from '../lib/client';
import ContactUs from '../components/ContactUs/ContactUs';
import BlogPostSection from './BlogPostsSection';

const getPost = async () => {
  const query = '*[_type == "post"] | order(_createdAt desc) [0]';
  const post = await client.fetch(query);
  return post;
};

const Blog = async () => {
  const post = await getPost();

  return (
    <Layout>
      <HeroSection post={post} />
      <BlogPostSection />
      <ContactUs />
    </Layout>
  );
};

export default Blog;

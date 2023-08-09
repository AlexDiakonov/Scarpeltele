import HeroSection from './HeroSection';
import Layout from '../components/Layout/Layout';
import { client } from '../lib/client';
import ContactUs from '../components/ContactUs/ContactUs';
import BlogPostSection from './BlogPostsSection';

export const metadata = {
  title: 'Scarpel: News and Insights from the Telecom World',
  description:
    'Your ultimate source for industry insights, tips, and trends in mobile messaging and beyond!',
};
const Blog = async () => {
  const query = '*[_type == "post"] | order(_createdAt desc) [0]';
  const post = await client.fetch(query);

  return (
    <Layout>
      {post.author && <HeroSection post={post} />}
      <BlogPostSection />
      <ContactUs />
    </Layout>
  );
};

export default Blog;

'use client';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Container from '../../Atoms/Container/Container';
import House from '../../assets/icons/House';
import ArrowRight from '../../assets/icons/ArrowRight';
import Typography from '../../Atoms/Typography/Typography';
import { useParams } from 'next/navigation';
import { client } from '../../lib/client';
import styles from './blogPage.module.scss';
import Content from './Content';
import SliderSection from './SliderSection';
import { getPosts } from '../../service/fetchService';

const BlogPost = () => {
  const [post, setPost] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const { blog } = useParams();

  const query = `*[_type == "post" && slug.current == "${blog}"][0]`;
  const fetchPost = async () => {
    const post = await client.fetch(query);
    setPost(post);
  };
  useEffect(() => {
    fetchPost();
    console.log(client.token, 'ji');

    getPosts(setAllPosts);
  }, [blog]);

  return (
    <Layout>
      <Container className={styles.blog}>
        <div className={styles.blog_blogHeader}>
          <div>
            <House />
          </div>
          <div>
            <ArrowRight />
          </div>
          <Typography component="h6" variant="h6Title">
            Blog
          </Typography>
          <div>
            <ArrowRight />
          </div>
          <Typography component="h6" variant="h6Title">
            {post?.title}
          </Typography>
        </div>
        {post?.title && <Content post={post} />}
      </Container>
      <SliderSection allPosts={allPosts} />
    </Layout>
  );
};

export default BlogPost;

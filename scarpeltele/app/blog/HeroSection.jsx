'use client';
import Typography from '../Atoms/Typography/Typography';
import Container from '../Atoms/Container/Container';
import Pencil from '../assets/illustrations/Pencil';
import { urlFor, client } from '../lib/client';
import styles from './blog.module.scss';
import Img from 'next/image';
import { format } from 'date-fns';
import ArrowTopRight from '../assets/icons/ArrowTopRight';

const HeroSection = ({ post }) => {
  const date = format(new Date(post?.publishedAt), 'dd MMM yyyy');

  return (
    <div className={styles.blogHero}>
      <Container className={styles.blogHero_wrapper}>
        <Pencil className={styles.blogHero_wrapper_bg} />

        <Typography
          className={styles.blogHero_wrapper_title}
          component="h1"
          variant="h1Title"
        >
          Scarpel Blog. News and insights
        </Typography>
        <a href={`/blog/${post?.slug.current}`} className={styles.post}>
          <div className={styles.post_imgWrapper}>
            <Img
              className={styles.post_imgWrapper_img}
              alt="hero_image"
              src={urlFor(post.mainImage)}
            ></Img>
          </div>
          <div className={styles.post_content}>
            <div className={styles.post_content_dateWrapper}>
              <Typography
                className={styles.post_content_dateWrapper_date}
                variant="body4"
              >
                {date}
              </Typography>
              <Typography variant="body4">{post.authorFullName}</Typography>
            </div>
            <Typography
              component="h4"
              variant="h4Title"
              className={styles.post_content_title}
            >
              {post.title}
              <ArrowTopRight />
            </Typography>
            <Typography
              variant="body1"
              className={styles.post_content_description}
            >
              {post.description.slice(0, 165)}...
            </Typography>
          </div>
        </a>
      </Container>
    </div>
  );
};

export default HeroSection;

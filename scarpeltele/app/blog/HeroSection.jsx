'use client';
import Typography from '../Atoms/Typography/Typography';
import Container from '../Atoms/Container/Container';
import Pencil from '../assets/illustrations/Pencil';
import { urlFor } from '../lib/client';
import styles from './blog.module.scss';
import { format } from 'date-fns';
import ArrowTopRight from '../assets/icons/ArrowTopRight';
import classNames from 'classnames';

const HeroSection = ({ post }) => {
  const date = format(new Date(post?.publishedAt), 'dd MMM yyyy');

  return (
    <div className={styles.blogHero}>
      <Pencil className={styles.mobilePencil} />

      <Container className={styles.blogHero_wrapper}>
        <Pencil className={styles.blogHero_wrapper_bg} />
        <Typography
          className={classNames(styles.blogHero_wrapper_title, styles.NoMobile)}
          component="h1"
          variant="h1Title"
        >
          Scarpel Blog. News and insights
        </Typography>
        <Typography
          className={classNames(styles.blogHero_wrapper_title, styles.noPc)}
          component="h1"
          variant="h1Title"
        >
          Scarpel Blog.
          <br /> News and insights
        </Typography>
        <a href={`/blog/${post?.slug.current}`} className={styles.post}>
          <div className={styles.post_imgWrapper}>
            <img
              className={styles.post_imgWrapper_img}
              alt="hero_image"
              src={urlFor(post.mainImage).src}
            ></img>
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

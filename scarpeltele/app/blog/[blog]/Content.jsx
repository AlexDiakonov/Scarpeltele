import Typography from '../../Atoms/Typography/Typography';
import { urlFor } from '../../lib/client';
import { format } from 'date-fns';
import styles from './blogPage.module.scss';

const Content = ({ post }) => {
  return (
    <div className={styles.content}>
      <Typography
        className={styles.content_reading}
        component="h6"
        variant="h6Title"
      >
        {post.readingTime}
      </Typography>
      <Typography
        className={styles.content_title}
        component="h1"
        variant="h1Title"
      >
        {post.title}
      </Typography>
      <div className={styles.content_heroWrap}>
        <img
          className={styles.content_heroWrap_img}
          alt="hero_img"
          src={urlFor(post.mainImage).src}
        />
      </div>
      <Typography
        className={styles.content_description}
        component="p"
        variant="body1"
        dangerouslySetInnerHTML={{ __html: post.description }}
      ></Typography>
      <div className={styles.content_footer}>
        <div className={styles.content_footer_author}>
          <div className={styles.content_footer_author_imgWrap}>
            <img
              className={styles.content_footer_author_imgWrap_img}
              alt="user_avatar"
              src={urlFor(post.authorImage).src}
            />
          </div>
          <div className={styles.content_footer_author_wrapper}>
            <Typography
              className={styles.content_footer_author_wrapper_name}
              variant="body2"
            >
              {post.author}
            </Typography>
            <Typography variant="body4">Author</Typography>
          </div>
        </div>

        <Typography className={styles.content_footer_date} variant="body1">
          {format(new Date(post.publishedAt), 'dd MMM YYY')}
        </Typography>
      </div>
    </div>
  );
};

export default Content;

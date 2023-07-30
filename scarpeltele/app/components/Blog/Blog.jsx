'use client';
import Button from '../../Atoms/Button/Button';
import Container from '../../Atoms/Container/Container';
import Typography from '../../Atoms/Typography/Typography';
import ArrowTopRight from '../../assets/icons/ArrowTopRight';
import styles from './blog.module.scss';
import classNames from 'classnames';
import { urlFor } from '../../lib/client';
import { format } from 'date-fns';
import Link from 'next/link';

const Blog = ({ posts }) => {
  return (
    <div id="blog">
      <Container className={styles.blog}>
        <div data-section id="blo" className={styles.anchor}></div>
        <div className={styles.blog_titleWrapper}>
          <Typography component="h2" variant="h2Title">
            Latest Insights
          </Typography>
          <Button
            className={styles.blog_titleWrapper_btn}
            href="/blog"
            link={true}
            variant="borderAndTransparent"
          >
            See all posts
          </Button>
        </div>
        <div className={styles.blog_grid}>
          {posts.map((item, idx) => {
            return (
              <Link
                href={`/blog/${item.slug.current}`}
                className={styles[`blog_grid_item${idx}`]}
                key={idx}
              >
                <div className={styles[`blog_grid_item${idx}_imageWrapper`]}>
                  <img
                    className={styles[`blog_grid_item${idx}_imageWrapper_img`]}
                    src={urlFor(item.mainImage).src}
                    alt="blog_image"
                  />
                </div>
                <div
                  className={classNames(
                    styles.content,
                    styles[`blog_grid_item${idx}_content`],
                  )}
                >
                  <div className={styles.content_date}>
                    <Typography
                      className={styles.content_date_name}
                      variant="body4"
                    >
                      {item.authorFullName}
                    </Typography>
                    <Typography variant="body4">
                      {format(new Date(item.publishedAt), 'dd MMM yyyy')}
                    </Typography>
                  </div>
                  <Typography
                    className={styles.content_title}
                    component="h4"
                    variant="h4Title"
                  >
                    {item.title}
                    <ArrowTopRight />
                  </Typography>
                  <Typography
                    className={styles.content_description}
                    variant="body2"
                    dangerouslySetInnerHTML={{
                      __html: `${item.description.slice(0, 88)}...`,
                    }}
                  ></Typography>
                </div>
              </Link>
            );
          })}
        </div>
        <Button
          className={styles.blog_mobileLink}
          href="/blog"
          link={true}
          variant="borderAndTransparent"
        >
          See all posts
        </Button>
      </Container>
    </div>
  );
};

export default Blog;

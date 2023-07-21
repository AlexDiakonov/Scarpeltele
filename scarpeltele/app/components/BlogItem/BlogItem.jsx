'use client';
import React from 'react';
import { format } from 'date-fns';
import Img from 'next/image';
import ArrowTopRight from '../../assets/icons/ArrowTopRight';
import Typography from '../../Atoms/Typography/Typography';
import { urlFor } from '../../lib/client';
import styles from './blogItem.module.scss';
import classNames from 'classnames';

const BlogItem = ({ item, className, imageWrapper }) => {
  return (
    <a
      href={`/blog/${item?.slug.current}`}
      className={classNames(className, styles.post)}
    >
      <div className={classNames(styles.post_imgWrapper, imageWrapper)}>
        <Img
          className={styles.post_imgWrapper_img}
          alt="blog_image"
          src={urlFor(item?.mainImage)}
        />
      </div>
      <div className={styles.post_content}>
        <div className={styles.post_content_dateWrapper}>
          <Typography
            className={styles.post_content_dateWrapper_date}
            variant="body4"
          >
            {format(new Date(item?.publishedAt), 'dd MMM yyyy')}
          </Typography>
          <Typography variant="body4">{item.authorFullName}</Typography>
        </div>
        <Typography className={styles.post_content_title} variant="h4Title">
          {item.title} <ArrowTopRight />
        </Typography>
        <Typography variant="body2" className={styles.post_content_description}>
          {item.description.slice(0, 85)}...
        </Typography>
      </div>
    </a>
  );
};

export default BlogItem;

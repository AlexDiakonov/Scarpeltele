"use client";
import React from "react";
import { format } from "date-fns";

import ArrowTopRight from "../../assets/icons/ArrowTopRight";
import Typography from "../../Atoms/Typography/Typography";
import { urlFor } from "../../lib/client";
import styles from "./blogItem.module.scss";
import classNames from "classnames";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

const BlogItem = ({ item, className, imageWrapper }) => {
  return (
    <Link
      href={`/blog/${item?.slug.current}`}
      className={classNames(className, styles.post)}
    >
      <div className={classNames(styles.post_imgWrapper, imageWrapper)}>
        <img
          className={styles.post_imgWrapper_img}
          alt="blog_image"
          src={urlFor(item?.mainImage).src}
        />
      </div>
      <div className={styles.post_content}>
        <div className={styles.post_content_dateWrapper}>
          <Typography
            className={styles.post_content_dateWrapper_date}
            variant="body4"
          >
            {format(new Date(item?.publishedAt), "dd MMM yyyy")}
          </Typography>
          <Typography variant="body4">{item.authorFullName}</Typography>
        </div>
        <Typography
          component="h4"
          className={styles.post_content_title}
          variant="h4Title"
        >
          {item.title} <ArrowTopRight />
        </Typography>
        <Typography variant="body2" className={styles.post_content_description}>
          {item.description.slice(0, 85)}...
        </Typography>
      </div>
    </Link>
  );
};

export default BlogItem;

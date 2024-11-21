/* eslint-disable @next/next/no-img-element */
"use client";
import Typography from "../Atoms/Typography/Typography";
import Container from "../Atoms/Container/Container";
import styles from "./blog.module.scss";
import { format } from "date-fns";
import ArrowTopRight from "../assets/icons/ArrowTopRight";
import classNames from "classnames";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import useAnimOnScroll from "../utils/useAnimOnScroll";

const HeroSection = ({ post }) => {
  const date = format(new Date(post?.publishedAt), "dd MMM yyyy");
  const [currentPosition, setPosition] = useState({});
  const [top, setTop] = useState(0);
  const ref = useRef(null);

  useAnimOnScroll(ref, setTop, setPosition, currentPosition, 2.6);

  return (
    <div ref={ref} className={styles.blogHero}>
      <div
        style={{ transform: `translate(${top}px, ${top / 2}%` }}
        className={styles.parallax}
      ></div>
      <Container className={styles.blogHero_wrapper}>
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
        <Link href={`/blog/${post?.slug.current}`} className={styles.post}>
          <div className={styles.post_imgWrapper}>
            <img
              className={styles.post_imgWrapper_img}
              alt="hero_image"
              src={urlFor(post.mainImage).src}
            />
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
        </Link>
      </Container>
    </div>
  );
};

export default HeroSection;

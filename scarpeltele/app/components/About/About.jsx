"use client";
import Image from "next/image";
import Container from "../../Atoms/Container/Container";
import Typography from "../../Atoms/Typography/Typography";
import images from "./about";
import styles from "./about.module.scss";
import map from "../../assets/about/map.png";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [currentPosition, setPosition] = useState({});
  const [top, setTop] = useState();
  const ref = useRef(null);

  const scrollHandler = () => {
    if (ref.current) {
      const elementRect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = elementRect.top;

      if (sectionTop <= windowHeight / 2) {
        setTop(
          (Math.abs((windowHeight / 2 - sectionTop) / (windowHeight / 2)) *
            100) /
            3
        );
      } else {
        // setTop(-50); // Section is not in view, set top to -50% to hide it
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      setTop(
        Math.abs(100 - (currentPosition.y / currentPosition.height) * 100) / 9
      );
    }
  }, [ref, setTop, currentPosition]);

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("scroll", () => scrollHandler(setPosition), true);
      return () => {
        window.removeEventListener(
          "scroll",
          () => scrollHandler(setPosition),
          true
        );
      };
    }
  }, []);

  return (
    <div ref={ref} id="about">
      <Container className={styles.about}>
        <div className={styles.anchor} data-section id="abou"></div>
        <div>
          <div className={styles.about_content}>
            <Typography
              component="h2"
              className={styles.about_content_title}
              variant="h2Title"
            >
              Who we are?
            </Typography>
            <Typography
              className={styles.about_content_description}
              variant="body1"
            >
              We are here to help you deliver… Our team is based all over the
              world. We are working remotely but we always stay connected. We've
              been delivering A2P Messaging for over 10 years and we know all
              about seamless SMS delivery that gets rapid results. Together we
              can hit any telecommunication target.
            </Typography>
            <Typography
              className={styles.about_content_presentation}
              variant="body1"
            >
              Here we are:
            </Typography>
          </div>

          <ul className={styles.about_workers}>
            {images.map((item, idx) => {
              return (
                <li className={styles.about_workers_item} key={idx}>
                  <div className={styles.about_workers_item_imageWrapper}>
                    <Image
                      className={styles.about_workers_item_imageWrapper_img}
                      alt={"worker_image"}
                      src={item.url}
                    ></Image>
                  </div>
                  <Typography
                    className={styles.about_workers_item_title}
                    variant="h6Title"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    className={styles.about_workers_item_position}
                    variant="body5"
                  >
                    {item.position}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          style={{
            transform: `translate(0%, ${top / 1.3}%)`, // Use both X and Y translations
          }}
          className={styles.about_imgWrapper}
        >
          <Image
            src={map}
            alt="map_image"
            className={styles.about_imgWrapper_img}
          />
        </div>
      </Container>
    </div>
  );
};

export default About;

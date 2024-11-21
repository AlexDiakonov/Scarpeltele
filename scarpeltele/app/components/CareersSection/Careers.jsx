"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./career.module.scss";
import Container from "../../Atoms/Container/Container";
import Typography from "../../Atoms/Typography/Typography";
import Button from "../../Atoms/Button/Button";
import Lense from "../../assets/careers/Lense";
import S from "../../assets/careers/S";

const Careers = () => {
  const [currentPosition, setPosition] = useState({});
  const [top, setTop] = useState();
  const [top2, setTop2] = useState();

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
        setTop2(
          (Math.abs((windowHeight / 2 - sectionTop) / (windowHeight / 2)) *
            100) /
            4
        );
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      setTop(
        Math.abs(100 - (currentPosition.y / currentPosition.height) * 100) / 2
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
    <div ref={ref} className={styles.careerSection}>
      <div
        style={{
          transform: `translate(0%, ${top}%)`, // Use both X and Y translations
        }}
        className={styles.careerSection_lense}
      >
        <Lense />
      </div>
      <div
        className={styles.careerSection_s}
        style={{
          transform: `translate(0%, ${top2}%)`, // Use both X and Y translations
        }}
      >
        <S className={styles.careerSection_s} />
      </div>

      <Container className={styles.careerSection_wrapper}>
        <Typography
          className={styles.careerSection_wrapper_title}
          variant="h2Title"
        >
          Join our team
        </Typography>
        <Typography
          className={styles.careerSection_wrapper_description}
          variant="body1"
        >
          We&#39;re seeking energetic and dedicated individuals to become part
          of our Scarpel Telecom team – let's grow and innovate together!
        </Typography>
        <Button
          className={styles.careerSection_wrapper_navButton}
          href="/careers"
          link={true}
        >
          Go to careers
        </Button>
      </Container>
    </div>
  );
};

export default Careers;

"use client";
import Container from "../../Atoms/Container/Container";
import Typography from "../../Atoms/Typography/Typography";
import Button from "../../Atoms/Button/Button";
import styles from "./faq.module.scss";
import FAQItem from "../../Atoms/FAQItem/FAQItem";
import { useEffect, useRef, useState } from "react";
import { client } from "@/app/lib/client";
import { usePathname } from "next/navigation";

import classNames from "classnames";
import useAnimOnScroll from "@/app/utils/useAnimOnScroll";

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const pathName = usePathname();
  const [currentPosition, setPosition] = useState({});
  const [top, setTop] = useState(0);
  const ref = useRef(null);

  useAnimOnScroll(ref, setTop, setPosition, currentPosition, 1.2);

  useEffect(() => {
    if (faq.length < 1) {
      const getFAQ = async (setter) => {
        const query = '*[_type == "faq"] | order(_createdAt desc) ';
        const faq = await client.fetch(query);
        return setter(faq);
      };
      getFAQ(setFaq);
    }
  }, [faq, setFaq]);

  return (
    <div
      ref={ref}
      className={classNames(styles.faq, { [styles.faqW]: pathName === "/faq" })}
    >
      <div
        style={{
          transform: `translate(${0}%, ${top * 2.4}%) rotate(${0}deg)`,
        }}
        className={classNames(styles.parallax, {
          [styles.hide]: pathName !== "/faq",
        })}
      ></div>

      <div className={styles.anchor} data-section id="fa"></div>
      <Container className={styles.faq_wrapper}>
        <div className={styles.faq_wrapper_titleWrap}>
          {pathName === "/faq" ? (
            <Typography
              className={styles.faq_wrapper_titleWrap_title}
              component="h1"
              variant="h1Title"
            >
              Frequently Asked Questions
            </Typography>
          ) : (
            <Typography component="h2" variant="h2Title">
              FAQ
            </Typography>
          )}
          {pathName !== "/faq" && (
            <Button variant="borderAndTransparent" href={"/faq"} link={true}>
              See all FAQ
            </Button>
          )}
        </div>
        <div className={styles.faq_wrapper_faqBlock}>
          {pathName === "/faq"
            ? faq.map((item, idx) => {
                return (
                  <FAQItem
                    className={styles.faq_wrapper_faqBlock_faqItem}
                    title={item.title}
                    description={item.description}
                    key={idx}
                  />
                );
              })
            : faq.slice(-8).map((item, idx) => {
                return (
                  <FAQItem
                    className={styles.faq_wrapper_faqBlock_faqItem}
                    title={item.title}
                    description={item.description}
                    key={idx}
                  />
                );
              })}
          {}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;

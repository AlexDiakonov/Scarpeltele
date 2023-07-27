'use client';
import Container from '../../Atoms/Container/Container';
import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Button';
import styles from './faq.module.scss';
import FAQItem from '../../Atoms/FAQItem/FAQItem';
import { useEffect, useState } from 'react';
import { client } from '@/app/lib/client';
import { usePathname } from 'next/navigation';
import Faq from '@/app/assets/illustrations/Faq';
import classNames from 'classnames';

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const pathName = usePathname();

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
      className={classNames(styles.faq, { [styles.faqW]: pathName === '/faq' })}
    >
      <div className={styles.anchor} data-section id="fa"></div>
      <Container className={styles.faq_wrapper}>
        <div className={styles.faq_wrapper_titleWrap}>
          {pathName === '/faq' ? (
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
          {pathName === '/faq' ? (
            <Faq className={styles.faq_wrapper_titleWrap_icon} />
          ) : (
            <Button variant="borderAndTransparent" href={'/faq'} link={true}>
              See all FAQ
            </Button>
          )}
        </div>
        <div className={styles.faq_wrapper_faqBlock}>
          {pathName === '/faq'
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

'use client';
import React from 'react';
import Container from '../../Atoms/Container/Container';
import Typography from '../../Atoms/Typography/Typography';
import styles from './partners.module.scss';
import imagePaths from './logos';
import Image from 'next/image';

const Partners = () => {
  return (
    <Container className={styles.partnerSection}>
      <Typography
        className={styles.partnerSection_title}
        component='h4'
        variant='h4Title'
      >
        They trust us
      </Typography>
      <div className={styles.partnerSection_logoWrapper}>
        {imagePaths.map((item, id) => {
          return (
            <div
              className={styles.partnerSection_logoWrapper_logo}
              key={`partner${id}`}
            >
              <Image
                className={styles.partnerSection_logoWrapper_logo_img}
                src={item}
                alt={`partner${id}`}
              />
            </div>
          );
        })}
      </div>
      <Typography variant='body2'>...and 100+ other companies</Typography>
    </Container>
  );
};

export default Partners;

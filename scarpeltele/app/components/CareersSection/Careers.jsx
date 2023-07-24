import React from 'react';
import styles from './career.module.scss';
import Container from '../../Atoms/Container/Container';
import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Button';
import Lense from '../../assets/careers/Lense';
import S from '../../assets/careers/S';

const Careers = () => {
  return (
    <div className={styles.careerSection}>
      <Lense className={styles.careerSection_lense} />
      <S className={styles.careerSection_s} />
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
          We’re seeking energetic and dedicated individuals to become part of
          our Scarpel Telecom team – let's grow and innovate together!
        </Typography>
        <Button
          className={styles.careerSection_wrapper_navButton}
          href="#"
          link={true}
        >
          Go to careers
        </Button>
      </Container>
    </div>
  );
};

export default Careers;

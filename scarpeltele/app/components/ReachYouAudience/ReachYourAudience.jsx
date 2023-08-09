/* eslint-disable @next/next/no-img-element */
'use client';
import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Button';
import Container from '../../Atoms/Container/Container';
import ReachYourAudienceImg from '../../assets/illustrations/ReachYourAudienceImg';
import styles from './reach.module.scss';
import { useRef, useState } from 'react';
import useAnimOnScroll from '@/app/utils/useAnimOnScroll';
import reachGif from '../../assets/reachYour.gif';
const ReachYourAudience = () => {
  const [currentPosition, setPosition] = useState({});
  const [top, setTop] = useState(0);
  const ref = useRef(null);

  useAnimOnScroll(ref, setTop, setPosition, currentPosition, 2.6);

  return (
    <Container ref={ref} className={styles.section}>
      <div className={styles.section_wrapper}>
        <Typography
          className={styles.section_wrapper_title}
          component="h3"
          variant="h3Title"
        >
          Reach Your Audience Effortlessly With Personalized Messaging
        </Typography>
        <Typography
          className={styles.section_wrapper_description}
          variant="body1"
        >
          Whether you&#39;re a solopreneur or a multi-million dollar business,
          SMS marketing will increase your customer&#39;s lifetime value,
          generate more leads, and help you grow and protect your business.
          Don&#39;t leave money on the table. With open rates of 99% and
          conversion rates of up to 40%, text messaging ensures your message is
          seen and acted on. It&#39;s a personal and direct way to connect with
          your audience that builds relationships driving loyalty and repeat
          business.
        </Typography>
        <Button href="/#contact" link={true} variant="borderAndTransparent">
          Book a demo
        </Button>
      </div>
      <div>
        <img src={reachGif.src} alt="section_img" />
      </div>
    </Container>
  );
};

export default ReachYourAudience;

import React from 'react';
import Typography from '../../Atoms/Typography/Typography';
import Container from '../../Atoms/Container/Container';
import Lock from '../../assets/illustrations/Lock';
import Coins from '../../assets/illustrations/Coins';
import Support from '../../assets/illustrations/Support';
import Globe from '../../assets/illustrations/Globe';
import Puzzle from '../../assets/illustrations/Puzzle';
import styles from './whyUs.module.scss';
import Button from '@/app/Atoms/Button/Button';

const WhyUs = () => {
  return (
    <div id="whyUs" className={styles.whyUs}>
      <Container className={styles.whyUs_wrapper}>
        <Typography
          className={styles.whyUs_wrapper_title}
          component="h2"
          variant="h2Title"
        >
          Why us?
        </Typography>
        <ul className={styles.whyUs_wrapper_list}>
          <li className={styles.whyUs_wrapper_list_item}>
            <Lock />
            <div>
              <Typography
                className={styles.whyUs_wrapper_list_item_title}
                component="h6"
                variant="h6Title"
              >
                Top-notch Security
              </Typography>
              <Typography variant="body4">
                Trust in our custom platform for full data encryption and
                continuous protection.
              </Typography>
            </div>
          </li>
          <li className={styles.whyUs_wrapper_list_item}>
            <Coins />
            <div>
              <Typography
                className={styles.whyUs_wrapper_list_item_title}
                component="h6"
                variant="h6Title"
              >
                Save Money, Boost Sales
              </Typography>
              <Typography variant="body4">
                Experience transparent, pay-as-you-go pricing and scalable
                growth opportunities.
              </Typography>
            </div>
          </li>
          <li className={styles.whyUs_wrapper_list_item}>
            <Support />

            <div>
              <Typography
                className={styles.whyUs_wrapper_list_item_title}
                component="h6"
                variant="h6Title"
              >
                24/7 dedicated Support
              </Typography>
              <Typography variant="body4">
                Enjoy 24/7 dedicated support with prompt feedback and access to
                essential account data.
              </Typography>
            </div>
          </li>
          <li className={styles.whyUs_wrapper_list_item}>
            <Globe />
            <div>
              <Typography
                className={styles.whyUs_wrapper_list_item_title}
                component="h6"
                variant="h6Title"
              >
                Global Audience Reach
              </Typography>
              <Typography variant="body4">
                Effortlessly connect with audiences worldwide through our
                dependable carrier network.
              </Typography>
            </div>
          </li>
          <li className={styles.whyUs_wrapper_list_item}>
            <Puzzle />
            <div>
              <Typography
                className={styles.whyUs_wrapper_list_item_title}
                component="h6"
                variant="h6Title"
              >
                <div data-section id="why"></div>
                Effortless CRM Integration
              </Typography>
              <Typography variant="body4">
                Streamline communication with an easy-to-use Messaging Platform
                and CRM integration.
              </Typography>
            </div>
          </li>
        </ul>
        <Button
          target="_blank"
          href="https://assets.scarpeltele.com/Scarpel_EN_clients.pdf"
          link={true}
        >
          Check out our PDF presentation
        </Button>
      </Container>
    </div>
  );
};

export default WhyUs;

'use client';
import React, { useEffect, useRef } from 'react';
import Container from '../../Atoms/Container/Container';
import Typography from '../../Atoms/Typography/Typography';
import PaperPlane from '../../assets/illustrations/PaperPlane';
import Sms from '../../assets/illustrations/Sms';
import Push from '../../assets/illustrations/Push';
import QandA from '../../assets/illustrations/QandA';
import Social from '../../assets/illustrations/Social';
import Lucky from '../../assets/illustrations/Lucky';
import TwoArrows from '../../assets/illustrations/TwoArrows';
import ThreeStars from '../../assets/illustrations/ThreeStars';
import Check from '../../assets/illustrations/Check';
import styles from './solution.module.scss';

const Solution = () => {
  return (
    <div id="solution">
      <Container className={styles.solution}>
        <div data-section id="sol" className={styles.anchor}></div>

        <Typography
          className={styles.solution_title}
          component="h2"
          variant="h2Title"
        >
          Aim the solution you need
          <PaperPlane className={styles.solution_title_icon} />
        </Typography>
        <ul className={styles.solution_list}>
          <li className={styles.solution_list_item}>
            <Sms />
            <div className={styles.solution_list_item_text}>
              <Typography component="h6" variant="h6Title">
                SMS Info
              </Typography>
              <Typography variant="body4">
                Targeted information delivery in a fraction of a second
              </Typography>
            </div>
          </li>
          <li className={styles.solution_list_item}>
            <Lucky />
            <div className={styles.solution_list_item_text}>
              <Typography component="h6" variant="h6Title">
                Short numbers
              </Typography>
              <Typography variant="body4">
                Company-client connection via SMS to a short number
              </Typography>
            </div>
          </li>
          <li className={styles.solution_list_item}>
            <Push />
            <div className={styles.solution_list_item_text}>
              <Typography component="h6" variant="h6Title">
                PUSH
              </Typography>
              <Typography variant="body4">
                Pop-up notifications to grab user&#39;s attention
              </Typography>
            </div>
          </li>
          <li className={styles.solution_list_item}>
            <TwoArrows />
            <div className={styles.solution_list_item_text}>
              <Typography component="h6" variant="h6Title">
                Message cascade
              </Typography>
              <Typography variant="body4">
                Consistent messaging across multiple channels for the cost
                reduction
              </Typography>
            </div>
          </li>
          <li className={styles.solution_list_item}>
            <QandA />
            <div className={styles.solution_list_item_text}>
              <Typography component="h6" variant="h6Title">
                Messengers
              </Typography>
              <Typography variant="body4">
                Multifunctional 2-way communication with clients. Information
                and clickable hyperlinks in a single message
              </Typography>
            </div>
          </li>
          <li className={styles.solution_list_item}>
            <ThreeStars />
            <div className={styles.solution_list_item_text}>
              <Typography component="h6" variant="h6Title">
                Flashing call
              </Typography>
              <Typography variant="body4">
                User verification with OTP-number call. The cost of a call is
                several times lower than a service SMS
              </Typography>
            </div>
          </li>
          <li className={styles.solution_list_item}>
            <Social />
            <div className={styles.solution_list_item_text}>
              <Typography component="h6" variant="h6Title">
                Notifications in SM
              </Typography>
              <Typography variant="body4">
                Advertising and notifications in social networks
              </Typography>
            </div>
          </li>
          <li className={styles.solution_list_item}>
            <Check />
            <div className={styles.solution_list_item_text}>
              <Typography component="h6" variant="h6Title">
                HLR
              </Typography>
              <Typography variant="body4">
                Number validity and subscriber availability check{' '}
              </Typography>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Solution;

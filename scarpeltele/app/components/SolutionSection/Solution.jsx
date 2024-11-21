"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../../Atoms/Container/Container";
import Typography from "../../Atoms/Typography/Typography";
import PaperPlane from "../../assets/illustrations/PaperPlane";
import Sms from "../../assets/illustrations/Sms";
import Push from "../../assets/illustrations/Push";
import QandA from "../../assets/illustrations/QandA";
import Social from "../../assets/illustrations/Social";
import Lucky from "../../assets/illustrations/Lucky";
import TwoArrows from "../../assets/illustrations/TwoArrows";
import ThreeStars from "../../assets/illustrations/ThreeStars";
import Check from "../../assets/illustrations/Check";
import styles from "./solution.module.scss";

const Solution = () => {
  const [currentPosition, setPosition] = useState({});
  const [top, setTop] = useState(0);
  const ref = useRef(null);

  const scrollHandler = (setter) => {
    if (ref.current) {
      setter(ref?.current.getBoundingClientRect());
    }
  };

  useEffect(() => {
    if (ref.current) {
      setTop(
        Math.abs(100 - (currentPosition.y / currentPosition.height) * 100) * 1
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
    <div id="solution">
      <Container ref={ref} className={styles.solution}>
        <div data-section id="sol" className={styles.anchor}></div>
        <div className={styles.parallax}>
          <PaperPlane
            rotate={top / 9}
            translateX={top / 4}
            translateY={0}
            translateXMultiplayer={0.5}
            translateYMultiplayer={0.1}
            className={styles.parallax_icon}
          />
        </div>
        <Typography
          className={styles.solution_title}
          component="h2"
          variant="h2Title"
        >
          Aim the solution you need
        </Typography>
        <ul className={styles.solution_list}>
          <li className={styles.solution_list_item}>
            <Sms />
            <div className={styles.solution_list_item_text}>
              <Typography
                className={styles.solution_list_item_text_title}
                component="h6"
                variant="h6Title"
              >
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
              <Typography
                className={styles.solution_list_item_text_title}
                component="h6"
                variant="h6Title"
              >
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
              <Typography
                className={styles.solution_list_item_text_title}
                component="h6"
                variant="h6Title"
              >
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
              <Typography
                className={styles.solution_list_item_text_title}
                component="h6"
                variant="h6Title"
              >
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
              <Typography
                className={styles.solution_list_item_text_title}
                component="h6"
                variant="h6Title"
              >
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
              <Typography
                className={styles.solution_list_item_text_title}
                component="h6"
                variant="h6Title"
              >
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
              <Typography
                className={styles.solution_list_item_text_title}
                component="h6"
                variant="h6Title"
              >
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
              <Typography
                className={styles.solution_list_item_text_title}
                component="h6"
                variant="h6Title"
              >
                HLR
              </Typography>
              <Typography variant="body4">
                Number validity and subscriber availability check{" "}
              </Typography>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Solution;

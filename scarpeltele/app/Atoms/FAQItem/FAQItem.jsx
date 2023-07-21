'use client';
import classNames from 'classnames';
import Typography from '../Typography/Typography';
import styles from './faqItem.module.scss';
import { useRef, useState } from 'react';
import useClickOutside from '../../utils/useClickOutside';

const FAQItem = ({ title, description, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const dropDownHandler = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(ref, () => setIsOpen(false), isOpen);

  return (
    <div
      id="FAQ"
      onClick={dropDownHandler}
      ref={ref}
      className={classNames(styles.faqWrapper, className)}
    >
      <div className={styles.faqWrapper_fixPart}>
        <Typography variant="body1">{title}</Typography>
        <button
          onClick={dropDownHandler}
          className={classNames(styles.faqWrapper_fixPart_btn, {
            [styles.faqWrapper_fixPart_btnClose]: isOpen,
          })}
        ></button>
      </div>
      <div
        className={classNames(styles.faqWrapper_dropDown, {
          [styles.faqWrapper_open]: isOpen,
        })}
      >
        <Typography
          className={styles.faqWrapper_dropDown_description}
          variant="body1"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default FAQItem;

'use client';
import { useRef } from 'react';
import Typography from '../Atoms/Typography/Typography';
import UrlImage from '../Atoms/UrlImage';
import ArrowTopRight from '../assets/icons/ArrowTopRight';
import useClickOutside from '../utils/useClickOutside';
import styles from './careers.module.scss';
import LocationIcon from '../assets/icons/Location';
import Button from '../Atoms/Button/Button';
import MailIcon from '../assets/icons/MailIcon';

const CareerModal = ({ modalItem, closeModal }) => {
  const mail = 'sskvortsova@scarpeltele.com';
  const ref = useRef(null);

  useClickOutside(ref, closeModal, modalItem.title.length > 1);
  return (
    <div className={styles.overlay}>
      <div className={styles.overlay_modal} ref={ref}>
        <header className={styles.overlay_modal_header}>
          <div className={styles.overlay_modal_header_imgWrapper}>
            <UrlImage
              className={styles.overlay_modal_header_imgWrapper_img}
              src={modalItem.careerAvatar}
              alt="career_image"
            />
          </div>
          <div className={styles.overlay_modal_header_content}>
            <Typography
              className={styles.overlay_modal_header_content_title}
              component="h5"
              variant="h5Title"
            >
              {modalItem.title}
            </Typography>
            <Typography
              className={styles.overlay_modal_header_content_location}
              variant="body2"
            >
              <LocationIcon
                className={styles.overlay_modal_header_content_location_icon}
              />
              {modalItem.location}
            </Typography>
          </div>
          <button
            className={styles.overlay_modal_header_btn}
            onClick={closeModal}
          ></button>
        </header>
        <main className={styles.overlay_modal_main}>
          <div className={styles.overlay_modal_main_about}>
            <Typography
              className={styles.overlay_modal_main_about_title}
              component="h6"
              variant="h6Title"
            >
              About the position
            </Typography>
            <Typography component="p" variant="body2">
              {modalItem.description}
            </Typography>
          </div>
          <div className={styles.overlay_modal_main_responsibilities}>
            <Typography
              className={styles.overlay_modal_main_responsibilities_title}
              component="h6"
              variant="h6Title"
            >
              Responsibilities
            </Typography>
            <Typography component="p" variant="body2">
              {modalItem.responsibilities}
            </Typography>
          </div>
          <div className={styles.overlay_modal_main_aboutYou}>
            <Typography
              className={styles.overlay_modal_main_aboutYou_title}
              component="h6"
              variant="h6Title"
            >
              About you
            </Typography>
            <ul className={styles.overlay_modal_main_aboutYou_list}>
              {modalItem.aboutYou.map((item, id) => (
                <li key={id}>
                  <Typography variant="body2"> {item}</Typography>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer className={styles.overlay_modal_footer}>
          <Button
            className={styles.overlay_modal_footer_link}
            link={true}
            href="mailto:sskvortsova@scarpeltele.com"
          >
            Contact our HR
            <ArrowTopRight className={styles.overlay_modal_footer_link_icon} />
          </Button>
          <Button
            className={styles.overlay_modal_footer_link}
            onClick={() => {
              navigator.clipboard.writeText(mail);
            }}
          >
            Copy mail
            <MailIcon className={styles.overlay_modal_footer_link_icon} />
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default CareerModal;

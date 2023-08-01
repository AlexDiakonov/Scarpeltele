'use client';
import Typography from '../Atoms/Typography/Typography';
import LocationIcon from '../assets/icons/Location';
import styles from './careers.module.scss';
import { urlFor } from '../lib/client';

const CareerItem = ({ career, onClick }) => {
  return (
    <div onClick={onClick} className={styles.careerItem}>
      <div className={styles.careerItem_imgWrapper}>
        <img
          className={styles.careerItem_imgWrapper_img}
          src={urlFor(career.careerAvatar).src}
          alt="career_image"
        />
      </div>
      <div className={styles.careerItem_content}>
        <Typography
          className={styles.careerItem_content_title}
          component="h6"
          variant="h6Title"
        >
          {career.title}
        </Typography>
        <Typography
          className={styles.careerItem_content_location}
          variant="body2"
        >
          <LocationIcon className={styles.careerItem_content_location_icon} />{' '}
          {career.location}
        </Typography>
      </div>
      <button className={styles.careerItem_btn}></button>
    </div>
  );
};

export default CareerItem;

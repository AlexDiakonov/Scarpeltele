/* eslint-disable @next/next/no-img-element */
import values from '../assets/values.png';
import styles from './careers.module.scss';

const Values = () => {
  return (
    <div className={styles.values}>
      <div className={styles.values_imgWrapper}>
        <img
          className={styles.values_imgWrapper_img}
          src={values.src}
          alt="values_img"
        />
      </div>
    </div>
  );
};

export default Values;

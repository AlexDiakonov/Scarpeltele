'use client';

import Slider from 'react-slick';
import BigArrowBack from '../../assets/icons/BigArrowBack';
import BigArrowForward from '../../assets/icons/BigArrowForward';
import styles from './slider.module.scss';

const SlickArrowLeft = ({ onClick }) => (
  <button className={`${styles.arrow_left}`} onClick={onClick}>
    <BigArrowBack />
  </button>
);

const SlickArrowRight = ({ onClick }) => (
  <button className={styles.arrow_right} onClick={onClick}>
    <BigArrowForward />
  </button>
);

const SlickSlider = ({ children }) => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className={'slick'} {...settings}>
      {children}
    </Slider>
  );
};

export default SlickSlider;

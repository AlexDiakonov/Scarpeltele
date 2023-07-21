'use client';
import React from 'react';
import styles from './blogPage.module.scss';
import Container from '../../Atoms/Container/Container';
import Typography from '../../Atoms/Typography/Typography';
import SlickSlider from '../../components/Slider/Slider';
import BlogItem from '../../components/BlogItem/BlogItem';
import ContactUs from '../../components/ContactUs/ContactUs';

const SliderSection = ({ allPosts }) => {
  return (
    <div className={styles.sliderSection}>
      <Container className={styles.sliderSection_wrapper}>
        <Typography
          className={styles.sliderSection_wrapper_title}
          component="h1"
          variant="h1Title"
        >
          Read next
        </Typography>
        <SlickSlider>
          {allPosts.map((item) => (
            <BlogItem
              key={item._id}
              className={styles.sliderItem}
              imageWrapper={styles.wrapper}
              item={item}
            />
          ))}
        </SlickSlider>
      </Container>
      <ContactUs />
    </div>
  );
};

export default SliderSection;

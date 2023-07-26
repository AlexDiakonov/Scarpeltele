import Image from 'next/image';
import Container from '../../Atoms/Container/Container';
import Typography from '../../Atoms/Typography/Typography';
import images from './about';
import styles from './about.module.scss';
import map from '../../assets/about/map.png';

const About = () => {
  return (
    <div data-section id="about">
      <Container className={styles.about}>
        <div className={styles.about_content}>
          <Typography
            component="h2"
            className={styles.about_content_title}
            variant="h2Title"
          >
            Who we are?
          </Typography>
          <Typography
            className={styles.about_content_description}
            variant="body1"
          >
            Our team is based all over the world. We are working remotely but we
            always stay connected. Together we can hit any telecommunication
            target, and we are doing so more than 10 years already.
          </Typography>
          <Typography
            className={styles.about_content_presentation}
            variant="body1"
          >
            Here we are:
          </Typography>
        </div>

        <ul className={styles.about_workers}>
          {images.map((item, idx) => {
            return (
              <li className={styles.about_workers_item} key={idx}>
                <div className={styles.about_workers_item_imageWrapper}>
                  <Image
                    className={styles.about_workers_item_imageWrapper_img}
                    alt={'worker_image'}
                    src={item.url}
                  ></Image>
                </div>
                <Typography
                  className={styles.about_workers_item_title}
                  variant="h6Title"
                >
                  {item.name}
                </Typography>
                <Typography
                  className={styles.about_workers_item_position}
                  variant="body5"
                >
                  {item.position}
                </Typography>
              </li>
            );
          })}
        </ul>
        <div className={styles.about_imgWrapper}>
          <Image
            src={map}
            alt="map_image"
            className={styles.about_imgWrapper_img}
          />
        </div>
      </Container>
    </div>
  );
};

export default About;

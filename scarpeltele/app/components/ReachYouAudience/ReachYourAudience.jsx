import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Button';
import Container from '../../Atoms/Container/Container';
import ReachYourAudienceImg from '../../assets/illustrations/ReachYourAudienceImg';
import styles from './reach.module.scss';

const ReachYourAudience = () => {
  return (
    <Container className={styles.section}>
      <div className={styles.section_wrapper}>
        <Typography
          className={styles.section_wrapper_title}
          component="h3"
          variant="h3Title"
        >
          Reach Your Audience Effortlessly With Personalized Messaging
        </Typography>
        <Typography
          className={styles.section_wrapper_description}
          variant="body1"
        >
          Whether you&#39;re a solopreneur or a multi-million dollar business,
          SMS marketing will increase your customer&#39;s lifetime value,
          generate more leads, and help you grow and protect your business.
        </Typography>
        <Button href="/#contact" link={true} variant="borderAndTransparent">
          Book a demo
        </Button>
      </div>
      <ReachYourAudienceImg className={styles.section_image} />
    </Container>
  );
};

export default ReachYourAudience;

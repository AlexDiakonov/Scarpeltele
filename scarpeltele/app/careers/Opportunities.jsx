import styles from './careers.module.scss';
import Container from '../Atoms/Container/Container';
import Typography from '../Atoms/Typography/Typography';
import OpportunitiesMobile from '../assets/illustrations/OpportunitiesMobile';
import CareerItem from './CareerItem';
import search from '../assets/search.png';

const Opportunities = ({ careers }) => {
  return (
    <div className={styles.careers}>
      <div className={styles.careers_wrapper}>
        <Container className={styles.careers_wrapper_container}>
          <Typography
            className={styles.careers_wrapper_container_title}
            component="h1"
            variant="h1Title"
          >
            Discover career opportunities
          </Typography>
        </Container>
        <div className={styles.pc}>
          <img src={search.src} alt="search_img" />
        </div>
        <OpportunitiesMobile className={styles.mobile} />
      </div>
      <Container className={styles.positionsContainer}>
        <Typography
          className={styles.positionsContainer_title}
          component="h4"
          variant="h4Title"
        >
          Open positions
        </Typography>
        <div className={styles.positionsContainer_positions}>
          {careers.length > 1 &&
            careers.map((item) => {
              return <CareerItem key={item._id} career={item} />;
            })}
        </div>
      </Container>
    </div>
  );
};

export default Opportunities;

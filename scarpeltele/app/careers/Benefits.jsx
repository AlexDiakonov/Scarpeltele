import Container from '../Atoms/Container/Container';
import Typography from '../Atoms/Typography/Typography';
import Bonuses from '../assets/illustrations/Bonuses';
import Salary from '../assets/illustrations/Salary';
import ThrivingBenefit from '../assets/illustrations/ThrivingBenefit';
import Trainings from '../assets/illustrations/Trainings';
import styles from './careers.module.scss';

const Benefits = () => {
  return (
    <Container className={styles.benefits}>
      <Typography
        className={styles.benefits_title}
        component="h4"
        variant="h4Title"
      >
        Benefits to work with us
      </Typography>
      <ul className={styles.benefits_list}>
        <li className={styles.benefits_list_item}>
          <ThrivingBenefit />
          <Typography component="h6" variant="h6Title">
            Thriving online corporate culture
          </Typography>
        </li>
        <li className={styles.benefits_list_item}>
          <Salary />
          <Typography component="h6" variant="h6Title">
            Competitive salary
          </Typography>
        </li>
        <li className={styles.benefits_list_item}>
          <Bonuses />
          <Typography component="h6" variant="h6Title">
            Quarterly bonuses
          </Typography>
        </li>
        <li className={styles.benefits_list_item}>
          <Trainings />
          <Typography component="h6" variant="h6Title">
            Regular trainings
          </Typography>
        </li>
      </ul>
      <Typography variant="body2">...and more!</Typography>
    </Container>
  );
};

export default Benefits;

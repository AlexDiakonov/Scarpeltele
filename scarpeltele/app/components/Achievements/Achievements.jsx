import Typography from '../../Atoms/Typography/Typography';
import Container from '../../Atoms/Container/Container';
import styles from './achievements.module.scss';

const Achievements = () => {
  return (
    <div className={styles.achievements}>
      <Container className={styles.achievements_wrapper}>
        <div className={styles.achievements_wrapper_leftSide}>
          <div className={styles.achievements_wrapper_leftSide_organizer}>
            <Typography
              className={styles.achievements_wrapper_leftSide_organizer_title}
              component="h2"
              variant="accentTitle"
            >
              10+
            </Typography>
            <div
              className={
                styles.achievements_wrapper_leftSide_organizer_positioner
              }
            >
              <Typography
                className={
                  styles.achievements_wrapper_leftSide_organizer_positioner_description
                }
                variant="body2"
              >
                Years Industry
              </Typography>
              <Typography variant="body2"> Experience</Typography>
            </div>
          </div>
          <div className={styles.achievements_wrapper_leftSide_organizer}>
            <Typography
              className={styles.achievements_wrapper_leftSide_organizer_title}
              component="h2"
              variant="accentTitle"
            >
              99%
            </Typography>
            <Typography
              className={
                styles.achievements_wrapper_leftSide_organizer_description
              }
              variant="body2"
            >
              SMS Open Rate
            </Typography>
          </div>
          <div className={styles.achievements_wrapper_leftSide_organizer}>
            <Typography
              className={styles.achievements_wrapper_leftSide_organizer_title}
              component="h2"
              variant="accentTitle"
            >
              97-98%
            </Typography>
            <Typography
              className={
                styles.achievements_wrapper_leftSide_organizer_description
              }
              variant="body2"
            >
              Delivery Rate
            </Typography>
          </div>
        </div>
        <div className={styles.achievements_wrapper_rightSide}>
          <Typography
            className={styles.achievements_wrapper_rightSide_title}
            component="h3"
            variant="h3Light"
          >
            We know all about seamless SMS delivery that gets rapid results.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Achievements;

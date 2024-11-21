import Container from "../Atoms/Container/Container";
import Typography from "../Atoms/Typography/Typography";
import styles from "./careers.module.scss";
const PromoSection = () => {
  return (
    <div className={styles.promo}>
      <Container className={styles.promo_container}>
        <Typography
          className={styles.promo_container_title}
          component="h3"
          variant="h3Light"
        >
          Fully remote work from any corner of the Earth as long as you have
          steady Wi-Fi connection!
        </Typography>
        <ul className={styles.promo_container_list}>
          <li className={styles.promo_container_list_item}>
            <Typography
              className={styles.promo_container_list_item_title}
              component="h2"
              variant="accentTitle"
            >
              50+
            </Typography>
            <Typography
              className={styles.promo_container_list_item_text}
              variant="body2"
            >
              Employees
            </Typography>
          </li>
          <li className={styles.promo_container_list_item}>
            <Typography
              className={styles.promo_container_list_item_title}
              component="h2"
              variant="accentTitle"
            >
              14
            </Typography>
            <Typography
              className={styles.promo_container_list_item_text}
              variant="body2"
            >
              Days Paid Sick Leave
            </Typography>
          </li>
          <li className={styles.promo_container_list_item}>
            <Typography
              className={styles.promo_container_list_item_title}
              component="h2"
              variant="accentTitle"
            >
              28
            </Typography>
            <Typography
              className={styles.promo_container_list_item_text}
              variant="body2"
            >
              Days Vacation
            </Typography>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default PromoSection;

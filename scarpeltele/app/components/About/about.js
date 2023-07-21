import Typography from '../../Atoms/Typography/Typography';
import daniel from '../../assets/about/Daniel.png';
import lana from '../../assets/about/Lana.png';
import nathalie from '../../assets/about/Nathalie.png';
import vladan from '../../assets/about/Vladan.png';
import styles from './about.module.scss';
const images = [
  {
    url: daniel,
    name: 'Daniel',
    position: (
      <Typography
        variant="body5"
        className={styles.about_workers_item_position}
      >
        COO
      </Typography>
    ),
  },
  {
    url: nathalie,
    name: 'Nathalie',
    position: (
      <Typography
        variant="body5"
        className={styles.about_workers_item_position}
      >
        Deputy CEO/
        <br />
        Head of Accounts
      </Typography>
    ),
  },
  {
    url: vladan,
    name: 'Vladan',
    position: (
      <Typography
        variant="body5"
        className={styles.about_workers_item_position}
      >
        Head of Region
      </Typography>
    ),
  },
  {
    url: lana,
    name: 'Lana',
    position: (
      <Typography
        variant="body5"
        className={styles.about_workers_item_position}
      >
        HR Business Partner
      </Typography>
    ),
  },
];

export default images;

import styles from './careers.module.scss';
import Container from '../Atoms/Container/Container';
import Typography from '../Atoms/Typography/Typography';
import OpportunitiesMobile from '../assets/illustrations/OpportunitiesMobile';
import CareerItem from './CareerItem';
import { useState } from 'react';
import CareerModal from './CareerModal';
import NoPosition from './NoPosition';

const Opportunities = ({ careers }) => {
  const [modalItem, setItem] = useState({});

  const modalItemHandler = (item) => {
    setItem(item);
  };

  const closeModal = () => {
    setItem({});
  };

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
        <OpportunitiesMobile className={styles.mobile} />
      </div>
      <Container className={styles.positionsContainer}>
        {careers.length > 0 ? (
          <Typography
            className={styles.positionsContainer_title}
            component="h4"
            variant="h4Title"
          >
            Open positions
          </Typography>
        ) : (
          <NoPosition />
        )}

        {modalItem?.title && (
          <CareerModal closeModal={closeModal} modalItem={modalItem} />
        )}
        <div className={styles.positionsContainer_positions}>
          {careers.length > 0 &&
            careers.map((item) => {
              return (
                <CareerItem
                  onClick={() => modalItemHandler(item)}
                  key={item._id}
                  career={item}
                />
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default Opportunities;

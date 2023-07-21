import classNames from 'classnames';
import styles from './container.module.scss';

const Container = ({ children, className, id }) => {
  return (
    <div id={id ? id : '#'} className={classNames(styles.container, className)}>
      {children}
    </div>
  );
};

export default Container;

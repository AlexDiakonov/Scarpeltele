import classNames from 'classnames';
import styles from './container.module.scss';
import React from 'react';

const Container = React.forwardRef(({ children, className, id }, ref) => {
  return (
    <div
      ref={ref}
      id={id ? id : '#'}
      className={classNames(styles.container, className)}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';
export default Container;

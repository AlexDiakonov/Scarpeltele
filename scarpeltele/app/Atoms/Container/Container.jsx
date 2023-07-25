import classNames from 'classnames';
import styles from './container.module.scss';
import React from 'react';

const Container = React.forwardRef(
  ({ children, className, observedEl, id }, ref) => {
    return (
      <div
        observedEl
        ref={ref}
        id={id ? id : '#'}
        className={classNames(styles.container, className)}
      >
        {children}
      </div>
    );
  },
);

export default Container;

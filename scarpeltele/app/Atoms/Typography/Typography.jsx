import classNames from 'classnames';
import styles from './typography.module.scss';

const Typography = ({
  variant = 'body2m',
  className,
  component: Component = 'span',
  ...restProps
}) => {
  const classes = classNames(
    {
      [styles.accentTitle]: variant === 'accentTitle',
      [styles.h1Title]: variant === 'h1Title',
      [styles.h2Title]: variant === 'h2Title',
      [styles.h3Title]: variant === 'h3Title',
      [styles.h3Light]: variant === 'h3Light',
      [styles.h4title]: variant === 'h4Title',
      [styles.h5Title]: variant === 'h5Title',
      [styles.h6title]: variant === 'h6Title',
      [styles.body1]: variant === 'body1',
      [styles.body2]: variant === 'body2',
      [styles.body2m]: variant === 'body2m',
      [styles.body3]: variant === 'body3',
      [styles.body4]: variant === 'body4',
      [styles.body5]: variant === 'body5',
    },
    className,
  );

  return <Component className={classes} {...restProps} />;
};

export default Typography;

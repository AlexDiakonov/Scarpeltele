import classNames from 'classnames';
import styles from './button.module.scss';
import Link from 'next/link';

const Button = ({
  children,
  variant,
  className,
  link = false,
  type = 'button',
  href = '#',
}) => {
  const buttonClasses = classNames(
    styles.customButton,
    {
      [styles.lightGreen]: variant === 'lightGreen',
      [styles.borderTransparent]: variant === 'borderAndTransparent',
      [styles.borderLighterGreen]: variant === 'borderLighterGreen',
    },
    className,
  );

  return link ? (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  ) : (
    <button type={type} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;

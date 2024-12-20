import classNames from "classnames";
import styles from "./button.module.scss";
import Link from "next/link";

const Button = ({
  children,
  variant,
  onClick,
  className,
  link = false,
  type = "button",
  target = "",
  href = "#",
}) => {
  const buttonClasses = classNames(
    styles.customButton,
    {
      [styles.lightGreen]: variant === "lightGreen",
      [styles.borderTransparent]: variant === "borderAndTransparent",
      [styles.borderLighterGreen]: variant === "borderLighterGreen",
      [styles.noBorder]: variant === "noBorder",
    },
    className
  );

  return link ? (
    <Link href={href} target={target} className={buttonClasses}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;

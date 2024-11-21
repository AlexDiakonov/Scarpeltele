import classNames from "classnames";
import ThreeLinesSmall from "../../assets/icons/ThreeLinesSmall";
import styles from "./input.module.scss";

const Input = ({
  isRequired = false,
  value,
  label,
  inputHandler,
  textArea = false,
  type = "text",
  className,
  id = "",
  name = "",
}) => {
  return (
    <div className={classNames(styles.inputContainer, className)}>
      <label className={styles.inputContainer_label}>{label}</label>
      <div className={styles.inputContainer_wrapper}>
        {textArea ? (
          <>
            <textarea
              value={value}
              required={isRequired}
              className={styles.inputContainer_wrapper_input}
              name={name}
              onChange={inputHandler}
            />
          </>
        ) : (
          <input
            value={value}
            required={isRequired}
            className={styles.inputContainer_wrapper_input}
            type={type}
            id={id}
            name={name}
            onChange={inputHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Input;

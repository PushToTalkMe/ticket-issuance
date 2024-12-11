import styles from "./button.module.css";
import { ButtonProps } from "./button.props";
import cn from "classnames";

export const Button = ({
  appearance,
  active,
  tab,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.secondary]: appearance === "secondary",
        [styles.tab]: tab,
        [styles.active]: active,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

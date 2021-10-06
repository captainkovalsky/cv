import classNames from "classnames";
import { useMemo } from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
  variant?: "outline";
  size?: "large" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, variant, size, className = "", ...rest } = props;
  const buttonStyles = useMemo(() => {
    return classNames(
      styles.root,
      className,
      !!variant && styles[variant],
      !!size && styles[size]
    );
  }, [variant, size, className]);

  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;

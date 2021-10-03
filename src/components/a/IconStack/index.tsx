import styles from "./iconStack.module.scss";

export const IconStack: React.FC<{ children: any }> = ({ children }) => {
  return <span className={styles.root}>{children}</span>;
};

export default IconStack;

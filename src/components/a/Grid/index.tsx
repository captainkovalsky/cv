import { PropsWithChildren } from "react";
import cls from "classnames";
import styles from "./grid.module.scss";

type GridProps = {
  className?: string;
  tagName?: string;
  direction?: "row" | "column";
};
export const Grid = (props: PropsWithChildren<GridProps>) => {
  return (
    <div
      className={cls(styles.root, props.className, {
        [styles.directionColumn]: props?.direction === "column",
      })}
    >
      {props.children}
    </div>
  );
};

export default Grid;

import { FC, PropsWithChildren, useCallback } from "react";
import styles from "./article.module.scss";

import cls from "classnames";

type ArticleProps = PropsWithChildren<{
  title?: string | (() => JSX.Element);
  className?: string;
  date?: string;
}>;

export function Article({ title, className = "", children }: ArticleProps) {
  const renderTitle = useCallback(() => {
    if (!title) {
      return null;
    }
    if (typeof title === "string") {
      return <h1>{title}</h1>;
    }

    return <>{title()}</>;
  }, [title]);

  return (
    <div className={cls(styles.root, className)} data-testid={"article"}>
      {renderTitle()}
      {children}
    </div>
  );
}

Article.Left = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div data-testid="left" className={styles.left}>
      {children}
    </div>
  );
};

Article.Right = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div data-testid="right" className={styles.right}>
      {children}
    </div>
  );
};

export default Article;

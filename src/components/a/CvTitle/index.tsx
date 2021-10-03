import styles from "./cvTitle.module.scss";

type CvTitleProps = {
  title: string;
  project?: string;
};

export const CvTitle = (props: CvTitleProps) => {
  return (
    <p>
      <span className={styles.bold}>{props.title}</span>, {props.project}
    </p>
  );
};

export default CvTitle;

import classNames from "classnames";
import styles from "./avatar.module.scss";

type AvatarProps = {
  src: string;
  className: string;
};

const Avatar = (props: AvatarProps) => {
  const { src, className = "" } = props;
  return (
    <img
      className={classNames(styles.root, className)}
      src={src}
      alt="avatar"
    />
  );
};

export default Avatar;

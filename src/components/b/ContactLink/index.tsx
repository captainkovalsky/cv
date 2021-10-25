import classNames from "classnames";
import icons from "./icons";
import { memo } from "react";
import styles from "./contactLink.module.scss";

type ContactLinkProps = {
  contacts: Object;
  className?: string;
};

type IconType = "skype" | string;

type IconProps = {
  type: IconType;
  className?: string;
  linkable?: string;
};

const Icon = memo((props: IconProps) => {
  const { type, linkable } = props;

  const Component = (icons as unknown as any)[type] || icons["empty"];
  const wrapper = (Cmp: any) => {
    if (linkable) {
      return (
        <a href={linkable} target={"_blank"} rel={"noreferrer"}>
          <Cmp />
        </a>
      );
    }

    return <Cmp />;
  };

  return <span className={props.className}>{wrapper(Component)}</span>;
});

export const ContactLink = (props: ContactLinkProps) => {
  const { contacts, className } = props;
  return (
    <div className={classNames(styles.root, className)}>
      {Object.entries(contacts).map(([type, value]: any, index) => (
        <p key={index}>
          {value}
          <Icon
            className={classNames(styles.icon, styles[`icon__${type}`])}
            type={type}
            linkable={value.startsWith("https") && value}
          />
        </p>
      ))}
    </div>
  );
};

export default ContactLink;

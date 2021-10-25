import { ReactComponent as Skype } from "./skype.svg";
import { ReactComponent as Phone } from "./phone.svg";
import { ReactComponent as Email } from "./email.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Github } from "./github.svg";

const icons = {
  skype: Skype,
  phone: Phone,
  email: Email,
  linkedin: Linkedin,
  github: Github,
  empty: () => <></>,
};

export default icons;

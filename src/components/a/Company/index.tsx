import styles from "./company.module.scss";

type CompanyProps = {
  name: string;
  city?: string;
  link?: string;
};
export const Company = (props: CompanyProps) => {
  const { name, city, link } = props;

  return (
    <p className={styles.root}>
      <a href={link}>{name}</a>, {city}
    </p>
  );
};

export default Company;

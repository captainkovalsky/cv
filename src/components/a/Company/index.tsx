type CompanyProps = {
  name: string;
  city?: string;
  link?: string;
};
export const Company = (props: CompanyProps) => {
  const { name, city, link } = props;

  return (
    <p>
      <a href={link}>{name}</a>, {city}
    </p>
  );
};

export default Company;

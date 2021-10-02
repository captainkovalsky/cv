import Grid from "components/a/Grid";
import Article from "components/b/Article";
import { PropsWithChildren } from "react";
import styles from "./cv.module.scss";

export const IconStack: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <span className={styles.iconRoot}>{children}</span>;
};

const Divider = () => {
  return (
    <hr
      style={{
        width: "600px",
        marginLeft: " 256px",
      }}
    />
  );
};

const Date = ({ children }: PropsWithChildren<{}>) => {
  return <p style={{ fontWeight: "bold" }}>{children}</p>;
};

type CompanyProps = {
  name: string;
  city?: string;
  link?: string;
};
const Company = (props: CompanyProps) => {
  const { name, city, link } = props;

  return (
    <p>
      <a href={link}>{name}</a>, {city}
    </p>
  );
};

type CvTitleProps = {
  title: string;
  project?: string;
};
const CvTitle = (props: CvTitleProps) => {
  return (
    <p>
      <b>{props.title}</b>, {props.project}
    </p>
  );
};

export default function CvPage() {
  return (
    <div className={styles.root}>
      <Grid direction="column">
        <Article>
          <Article.Left>
            <Date>Sep 2015 &mdash; Sep 2016</Date>
            <Company link={"//epam.com"} name={"EPAM Systems"} city={"Kyiv"} />
          </Article.Left>
          <Article.Right>
            <CvTitle title={"Software Engineer"} project={"DHL"} />

            <p>
              Design the architecture of white-labeling site (multi-branding,
              i18n, theming). Prepare a documentation for web application Manage
              the team (follow best-practices, estimation, code-review) (design
              and write PoC, BiD documents).
            </p>
            <p>
              Communicate with microservices teams (E2E integration process).
              Developed UI components for Admin Tool
            </p>
            <div>
              <IconStack>React</IconStack>
              <IconStack>Angular</IconStack>
              <IconStack>GraphQL</IconStack>
              <IconStack>Apollo</IconStack>
              <IconStack>Node</IconStack>
            </div>
          </Article.Right>
        </Article>
        <Divider />
        <Article>
          <Article.Left>
            <Date>Sep-2015 &mdash; Sep 2016</Date>
            <Company link={"//epam.com"} name={"EPAM Systems"} city={"Kyiv"} />
          </Article.Left>
          <Article.Right>
            <CvTitle title={"Software Engineer"} project={"DHL"} />

            <p>
              Design the architecture of white-labeling site (multi-branding,
              i18n, theming). Prepare a documentation for web application Manage
              the team (follow best-practices, estimation, code-review) (design
              and write PoC, BiD documents).
            </p>
            <p>
              Communicate with microservices teams (E2E integration process).
              Developed UI components for Admin Tool
            </p>

            <div className={"tags"}>
              <IconStack>React</IconStack>
              <IconStack>Angular</IconStack>
              <IconStack>GraphQL</IconStack>
              <IconStack>Apollo</IconStack>
              <IconStack>Node</IconStack>
              <IconStack>REST</IconStack>
              <IconStack>SASS</IconStack>
              <IconStack>Go</IconStack>
            </div>
          </Article.Right>
        </Article>
        <Divider />

        <Article>
          <Article.Left>
            <Date>Sep-2015 – Sep 2016</Date>
            <Company link={"//epam.com"} name={"EPAM Systems"} city={"Kyiv"} />
          </Article.Left>
          <Article.Right>
            <CvTitle title={"Software Engineer"} project={"DHL"} />

            <p>
              Design the architecture of white-labeling site (multi-branding,
              i18n, theming). Prepare a documentation for web application Manage
              the team (follow best-practices, estimation, code-review) (design
              and write PoC, BiD documents).
            </p>
            <p>
              Communicate with microservices teams (E2E integration process).
              Developed UI components for Admin Tool
            </p>

            <div>
              <IconStack>React</IconStack>
              <IconStack>Angular</IconStack>
              <IconStack>GraphQL</IconStack>
              <IconStack>Apollo</IconStack>
              <IconStack>Node</IconStack>
            </div>
          </Article.Right>
        </Article>
      </Grid>
    </div>
  );
}

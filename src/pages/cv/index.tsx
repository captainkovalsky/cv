import Company from "components/a/Company";
import CvTitle from "components/a/CvTitle";
import DateCmp from "components/a/DateCmp";
import Divider from "components/a/Divider";
import Grid from "components/a/Grid";
import IconStack from "components/a/IconStack";
import Article from "components/b/Article";
import styles from "./cv.module.scss";

export default function CvPage() {
  return (
    <div className={styles.root}>
      <Grid direction="column">
        <Article>
          <Article.Left>
            <DateCmp>Sep 2015 &mdash; Sep 2016</DateCmp>
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
            <DateCmp>Sep 2015 &mdash; Sep 2016</DateCmp>
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
            <DateCmp>Sep 2015 &mdash; Sep 2016</DateCmp>
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

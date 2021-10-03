import Company from "components/a/Company";
import CvTitle from "components/a/CvTitle";
import DateCmp from "components/a/DateCmp";
import Grid from "components/a/Grid";
import IconStack from "components/a/IconStack";
import Article from "components/b/Article";
import cv from "data/cv.json";
import styles from "./cv.module.scss";

export default function CvPage() {
  const experience = cv.experience;
  return (
    <div className={styles.root}>
      <Grid direction={"column"}>
        {experience.map((exp: any, index: number) => {
          return (
            <Article key={index}>
              <Article.Left>
                <DateCmp>
                  {exp.startDate} &mdash;{" "}
                  {exp.endDate ? exp.endDate : "present"}
                </DateCmp>
                <Company name={exp.company} city={exp.city} />
              </Article.Left>
              <Article.Right>
                <CvTitle title={exp.role} project={exp.project} />
                {exp.responsibilities.map((text: string, index: number) => (
                  <p key={index}>{text}</p>
                ))}

                <div style={{maxWidth: '34rem'}}>
                  {exp.stack.map((s: string) => (
                    <IconStack key={s}>{s}</IconStack>
                  ))}
                </div>
              </Article.Right>
            </Article>
          );
        })}
      </Grid>
    </div>
  );
}

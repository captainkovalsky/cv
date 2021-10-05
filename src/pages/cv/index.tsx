import Company from "components/a/Company";
import CvTitle from "components/a/CvTitle";
import DateCmp from "components/a/DateCmp";
import IconStack from "components/a/IconStack";
import Article from "components/b/Article";
import cv from "data/cv";
import styles from "./cv.module.scss";

export default function CvPage() {
  const experience = cv.experience;
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {experience.map((exp: any, index: number) => {
          return (
            <Article key={index}>
              <Article.Left>
                <DateCmp startDate={exp.startDate} endDate={exp.endDate} />
                <Company name={exp.company} city={exp.city} />
              </Article.Left>
              <Article.Right>
                <CvTitle title={exp.role} project={exp.project} />
                {exp.responsibilities.map((text: string, index: number) => (
                  <p
                    key={index}
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></p>
                ))}

                <div style={{}} data-no-print>
                  {exp.stack.map((s: string) => (
                    <IconStack key={s}>{s}</IconStack>
                  ))}
                </div>
              </Article.Right>
            </Article>
          );
        })}
      </div>
    </div>
  );
}

import Button from "components/a/Button";
import Company from "components/a/Company";
import CvTitle from "components/a/CvTitle";
import DateCmp from "components/a/DateCmp";
import IconStack from "components/a/IconStack";
import Article from "components/b/Article";
import cv from "data/cv";
import { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./cv.module.scss";

const ToNavigationPortal = (props: any) => {
  const { children } = props;
  const node = document.getElementById("navigation-portal");
  if (node) {
    return createPortal(children, node);
  }

  return children;
};

export default function CvPage() {
  const experience = cv.experience;
  return (
    <div className={styles.root}>
      <ToNavigationPortal>
        <Button
          data-no-print
          className={styles.print}
          variant={"outline"}
          size={"small"}
          onClick={() => {
            window.print();
          }}
        >
          Print PDF
        </Button>
      </ToNavigationPortal>
      <div className={styles.wrapper}>
        {experience.map((exp: any, index: number) => {
          return (
            <Fragment key={index}>
              <Article>
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

                  <div data-no-print>
                    {exp.stack.map((s: string) => (
                      <IconStack key={s}>{s}</IconStack>
                    ))}
                  </div>
                </Article.Right>
              </Article>
              {exp.break && <div key={"break"} className="pagebreaks" />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

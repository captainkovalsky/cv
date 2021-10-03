import styles from "./about.module.scss";

export default function AboutPage() {
  return (
    <>
      <h1>Hello</h1>
      <article className={styles.root}>
        <p>
          My name is Viktor, I am a software engineer, and this is my website
          for blogging, hosting cv, and here I will share some thoughts not
          related to IT and touch on different topics.
        </p>
        <p>
          Currently, the site is under active development phase, so don't afraid
          if something doesn't work))
        </p>
      </article>
    </>
  );
}

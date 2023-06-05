import styles from "./Work.module.css";

const Work = () => (
  <div className={styles.work}>
    <h2>Work Experience</h2>
    <p className={styles.job}>
      Front-End Developer at Suyogy, Gurgaon (January 2022 - Present)
    </p>
    <ul>
      <li>
        Effectively multi-tasked and worked well with internal and external
        teams.
      </li>
      <li>
        Helped to achieve a consistent look and visual theme across the website
        by promoting uniform fonts, formatting, images, and layout.
      </li>
      <li>
        Effectively translated client requirements into application designs and
        system requirements.
      </li>
      <li>
        Successfully identified, diagnosed, and fixed website problems,
        including broken links, typographical errors, and formatting issues.
      </li>
      <li>
        Worked to assess competing websites in regards to content, look, and
        feel.
      </li>
      <li>
        Brought forth vast experience designing and developing responsive design
        websites.
      </li>
    </ul>
  </div>
);

export default Work;

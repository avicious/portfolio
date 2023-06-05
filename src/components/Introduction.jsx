import styles from "./Introduction.module.css";

const Introduction = () => (
  <div className={styles.intro}>
    <h1 className={styles.name}>Shubham</h1>
    <p className={styles.salutations}>Hi, my name is</p>
    <p className={styles.jobTitle}>I'm a Front-End Developer</p>
  </div>
);

export default Introduction;

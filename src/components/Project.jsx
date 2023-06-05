import styles from "./Project.module.css";

const Project = ({ img, title, info, live, source, tech }) => {
  return (
    <div className={styles.project}>
      <img src={img} alt={title} className={styles.image} />
      <div className={styles.stack}>
        <p className={styles.title}>{title}</p>
        <img src={tech} alt={title} />
      </div>
      <p className={styles.info}>{info}</p>
      <div className={styles.link}>
        <a href={live}>Live Website</a>
        <a href={source}>Source Code</a>
      </div>
    </div>
  );
};
export default Project;

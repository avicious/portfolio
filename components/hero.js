import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <span>HI, MY NAME IS</span>
      <h1>Shubham</h1>
      <p className={styles.intro}>
        I'm an experienced Web Developer who is passionate about staying
        up-to-date with latest web development technologies like Next.js and
        React with a strong foundation in HTML, CSS and JavaScript.
      </p>
    </div>
  );
}

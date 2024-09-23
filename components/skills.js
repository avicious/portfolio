import styles from "./skills.module.css";
import { javascript, mongodb, next, python, react } from "@/public/images";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.skills}>
        <div>
          <img src={next.src} alt="Next.js" />
          <p>Next.js</p>
        </div>
        <div>
          <img src={react.src} alt="React" />
          <p>React</p>
        </div>
        <div>
          <img src={javascript.src} alt="Javascript" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={python.src} alt="Python" />
          <p>Python</p>
        </div>
        <div>
          <img src={mongodb.src} alt="MongoDB" />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
}

import styles from "./projects.module.css";
import { montacqua, silverSpoon, tripleShotCafe } from "@/public/images";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <img src={silverSpoon.src} alt="Silver Spoon" />
        <div className={styles.wrapper}>
          <p>
            Silver Spoon is a popular multi-cuisine restaurant known for its
            delicious food and quick delivery. They offer home delivery,
            catering, and have multiple locations in Delhi and Gurgaon.
          </p>
          <div className={styles.links}>
            <a
              className={styles.next}
              href="https://silver-spoon-next.vercel.app/"
            >
              Next.js Demo
            </a>
            <a
              className={styles.next}
              href="https://github.com/avicious/silver-spoon-next/"
            >
              Next.js Code
            </a>
            <a
              className={styles.react}
              href="https://silver-spoon.netlify.app/"
            >
              React Demo
            </a>
            <a
              className={styles.react}
              href="https://github.com/avicious/silver-spoon/"
            >
              React Code
            </a>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <img src={tripleShotCafe.src} alt="Triple Shot Cafe" />
        <div className={styles.wrapper}>
          <p>
            Your daily dose of energy and flavor. Indulge in a variety of
            handcrafted coffee drinks, from classic espressos to innovative
            concoctions. Perfect for a quick pick-me-up or a leisurely catch-up.
          </p>
          <div className={styles.links}>
            <a
              className={styles.next}
              href="https://triple-shot-cafe-next.vercel.app/"
            >
              Next.js Demo
            </a>
            <a
              className={styles.next}
              href="https://github.com/avicious/triple-shot-cafe-next/"
            >
              Next.js Code
            </a>
            <a
              className={styles.react}
              href="https://triple-shot-cafe.netlify.app/"
            >
              React Demo
            </a>
            <a
              className={styles.react}
              href="https://github.com/avicious/triple-shot-cafe"
            >
              React Code
            </a>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <img src={montacqua.src} alt="Montacqua" />
        <div className={styles.wrapper}>
          <p>
            Montacqua Resort is an intimate retreat inspired by its natural
            surroundings. Offering a blend of luxury and comfort, the resort
            features stylish accommodations, delectable dining options, and
            exceptional service.
          </p>
          <div className={styles.links}>
            <a
              className={styles.next}
              href="https://montacqua-next.vercel.app/"
            >
              Next.js Demo
            </a>
            <a
              className={styles.next}
              href="https://github.com/avicious/montacqua-next/"
            >
              Next.js Code
            </a>
            <a className={styles.react} href="https://montacqua.netlify.app/">
              React Demo
            </a>
            <a
              className={styles.react}
              href="https://github.com/avicious/montacqua"
            >
              React Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "./Skills.module.css";
import Skill from "./Skill";
import {
  html,
  css,
  javascript,
  react,
  nodejs,
  typescript,
  nextjs,
} from "../assets";

const langsCurr = [
  { id: 1, img: html, name: "HTML" },
  { id: 2, img: css, name: "CSS" },
  { id: 3, img: javascript, name: "JavaScript" },
  { id: 4, img: react, name: "React" },
  { id: 5, img: nodejs, name: "Node.Js" },
];

const langsLearn = [
  { id: 11, img: typescript, name: "TypeScript" },
  { id: 12, img: nextjs, name: "Next.Js" },
];

const Skills = () => (
  <div className={styles.skills}>
    <h2>What I know</h2>
    <div className={styles.current}>
      {langsCurr.map((lang) => (
        <Skill key={lang.id} img={lang.img} name={lang.name} />
      ))}
    </div>
    <p className={styles.learning}>What I'm Learning</p>
    <div className={styles.coming}>
      {langsLearn.map((lang) => (
        <Skill key={lang.id} img={lang.img} name={lang.name} />
      ))}
    </div>
  </div>
);

export default Skills;

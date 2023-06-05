import styles from "./Skill.module.css";

const Skill = ({ img, name }) => (
  <div className={styles.skill}>
    <img src={img} alt={name} />
    <p>{name}</p>
  </div>
);

export default Skill;

import styles from "./Contact.module.css";
import { email, linkedin, github } from "../assets";

const Contact = () => (
  <div className={styles.contact}>
    <a target="_blank" href="mailto:shubham.kr2951@gmail.com">
      <img src={email} alt="email" />
      Email
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/shubham-kumar-515106239/"
    >
      <img src={linkedin} alt="linkedin" />
      Linkedin
    </a>
    <a target="_blank" href="https://github.com/avicious">
      <img src={github} alt="github" />
      Github
    </a>
  </div>
);

export default Contact;

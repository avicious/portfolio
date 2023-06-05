import styles from "./Projects.module.css";
import Project from "./Project";
import { HooBank, MetaVersus, Sushi, react, nextjs } from "../assets";

const projectsArr = [
  {
    id: 1,
    img: Sushi,
    tech: react,
    title: "KAIFŪ SUSHI",
    info: "A website inspired by Japanese style made with React using React Router.",
    live: "https://sushi-of-the-sea.netlify.app/",
    source: "https://github.com/avicious/sushi-of-the-sea",
  },
  {
    id: 2,
    img: HooBank,
    tech: react,
    title: "Modern Banking",
    info: "A modern banking app made with React and Tailwind CSS.",
    live: "https://hoobank-react-2023.netlify.app/",
    source: "https://github.com/avicious/hoobank",
  },
  {
    id: 3,
    img: MetaVersus,
    tech: nextjs,
    title: "Metaverse Madness",
    info: "A futuristic Metaverse app made with Next.Js and Tailwind CSS",
    live: "https://metaversus-next-2023.netlify.app/",
    source: "https://github.com/avicious/metaversus",
  },
];

const Projects = () => (
  <div className={styles.projects}>
    <h2>Projects</h2>
    <div className={styles.container}>
      {projectsArr.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;

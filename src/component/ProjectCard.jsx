import { lazy } from "react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ image, title, desc, github, link }) {
  return (
    <div className="projectCard-Container">
      <span className="project-img">
        <img src={image} alt="project-img" className="img" loading="lazy" />
      </span>

      <h1 className="title">{title}</h1>
      <p className="desc">{desc}</p>
      <div className="links">
        <a href={github} target="_blank">
          <button className="link1">
            <FaGithub className="FaGit" />
          </button>
        </a>
        <a href={link} target="_blank">
          <button className="link1">Demo</button>
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;

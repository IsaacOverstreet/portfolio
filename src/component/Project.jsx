import React from "react";
import ProjectCard from "./ProjectCard";
import projectInfo from "../ProjectInform.js";

function Project() {
  return (
    <div className="project-container">
      <div className="project">
        <h1>My Project</h1>
        <div className="projectCard">
          {projectInfo.map((info) => (
            <ProjectCard
              key={info.id}
              image={info.img}
              title={info.title}
              desc={info.desc}
              github={info.github}
              link={info.demo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

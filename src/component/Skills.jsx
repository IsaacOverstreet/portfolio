import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function Skills(props) {
  const icons = {
    Typescript: <SiTypescript />,
    React: <FaReact />,
    Node: <DiNodejs />,
    Postman: <SiPostman />,
    NextJs: <RiNextjsFill />,
    Bootstrap: <FaBootstrap />,
    Postgres: <SiPostgresql />,
    Express: <SiExpress />,
    Javascript: <IoLogoJavascript />,
    MongoDB: <SiMongodb />,
    Npm: <FaNpm />,
    Git: <IoIosGitNetwork />,
    Github: <FaGithub />,
  };

  return (
    <div title={props.skill} className="skill-box">
      {" "}
      {icons[props.skill]}
    </div>
  );
}

export default Skills;

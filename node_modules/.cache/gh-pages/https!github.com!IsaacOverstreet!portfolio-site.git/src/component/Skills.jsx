
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



function Skills(props){
   const icons={
        Javascript: <IoLogoJavascript />,
        React: <FaReact />,
        Node: <DiNodejs />,
        Postman: <SiPostman />,
        Bootstrap: <FaBootstrap />,
        Postgres: <SiPostgresql />,
        Express: <SiExpress />,
        Npm: <FaNpm />,
        Git: <IoIosGitNetwork />,
        Github: <FaGithub />
    }


    return(
        <div 
        title={props.skill} className="skill-box"> {icons[props.skill]}</div>
    )

}

export default Skills;
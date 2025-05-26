import React from "react";
import Lottie from "lottie-react";
import working_pc from "./Lottie/working_pc.json";
import Skills from "./Skills";

function About() {
  return (
    <div className="about-page">
      <div className="about">
        <div className="about-text">
          <h1>Get to know me</h1>
          <p>
            Hi my name is <b>Morakinyo Isaac</b> from Lagos Nigeria. I am a{" "}
            <b>Web Developer</b> actively seeking full-time opportunities where
            I can contribute my skills, collaborate with other professionals,
            and build innovative web solutions.
            <br />
            <br />
            I love creating original projects that are responsive, user-friendly
            and beautifully designed as well as developing efficient backend
            services. I'm committed to writing clean, maintainable code and
            constantly improving my craft.
            <br />
            I am open to collaborations or working where i can contribute and
            grow. <br />
            <br />
            In addition to coding, i also love working on computer hardware.
            <br />I have my links in my <b>footer</b>, Feel free to connect with
            me.
          </p>
        </div>

        <Lottie
          className="about-lottie"
          animationData={working_pc}
          loop={true}
        />
      </div>

      <h1 className="profession_text">Professional Skillset</h1>
      <div className="skill">
        <Skills skill="React" />
        <Skills skill="NextJs" />
        <Skills skill="Typescript" />
        <Skills skill="Node" />
        <Skills skill="Postman" />
        <Skills skill="Bootstrap" />
        <Skills skill="Postgres" />
        <Skills skill="Express" />
        <Skills skill="Javascript" />
        <Skills skill="MongoDB" />
        <Skills skill="Npm" />
        <Skills skill="Git" />
      </div>
    </div>
  );
}

export default About;

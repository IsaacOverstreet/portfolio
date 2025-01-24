import React from "react";
 import Lottie from "lottie-react"
 import working_pc from "./Lottie/working_pc.json"
 import Skills from "./Skills";

function About(){
return( 
    <div className="about-page">
        <div className="about">
            <div className="about-text">
                <h1>Get to know me</h1>
                <p>
                    Hi my name is <b>Morakinyo Isaac</b> i am from Lagos Nigeria.
                    I am <b>Web Developer</b> currently seeking for internship to apply my skills in a professional setting, collaborate with experience developer and gaining hands-on experience building innovative web solutions.<br/><br/>
                    I love creating original project with beautiful design for frontend and develop effective solutions for backend.<br/>
                    I am open to collaborations or working where i can contribute and grow. <br/><br/>
                    I have my links in my <b>footer</b>, so you can connect with me.
                    In addition to coding i also love working on computer hardwares.<br/>
                </p>
            </div>

            <Lottie className="about-lottie" animationData={working_pc} loop={true}/>
        </div>

        <h1 className="profession_text">Professional Skillset</h1>
        <div className="skill">
            <Skills skill="Javascript"/>
            <Skills skill="React"/>
            <Skills skill="Node"/>
            <Skills skill="Postman"/>
            <Skills skill="Bootstrap"/>
            <Skills skill="Postgres"/>
            <Skills skill="Express"/>
            <Skills skill="Npm"/>
            <Skills skill="Git"/>
            <Skills skill="Github"/>
        </div>

    </div>
)
}

export default About;
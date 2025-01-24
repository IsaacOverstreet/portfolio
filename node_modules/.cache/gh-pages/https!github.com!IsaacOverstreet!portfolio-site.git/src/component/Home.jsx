import React from "react";
import Lottie from "lottie-react"
import Computer from "./Lottie/work cpu.json"
import Typer from "./Typer";

function Home (){

    return(
    <div>
        <div className="Home">
            <div className="Home-text">
                <p>Hi There!</p>
                <h1>I'M <b>Morakinyo Isaac</b></h1>
                <h2><Typer/></h2>
            </div>
            <Lottie className="animi-computer" animationData={Computer} loop={true}/>
        </div>

        <div className="intro">
            <h1>Brief <b>Introduction</b></h1>
            <p>
             Im a web Developer looking for opportunity to work on projects and gain practical experience which will help me grow as a professional while making valuable contribution to this field.<br/><br />    
             I have solid foundation in <b>javascript</b> for the Frontend of <b>React.js, Node.js</b> as backend technology for server-side development, <b>PostgreSQL</b> as my go-to database and i am looking to learn MongoDB in the nearest future.             
            </p>
        </div>
        
        
        
    </div>)
}

export default Home;
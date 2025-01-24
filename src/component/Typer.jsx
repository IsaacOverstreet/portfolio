import React from "react";
import Typewriter from 'typewriter-effect';

function Typer(){
   return(
    <div> 
        <Typewriter
                options={{
                    strings: ["Web Developer", "Full Stack Developer"],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20,

                }}/>
        
    </div>
   )

}

export default Typer;
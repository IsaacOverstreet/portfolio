import React from "react";
import Lottie from "lottie-react";
import Computer from "./Lottie/work cpu.json";
import Typer from "./Typer";

function Home() {
  return (
    <div>
      <div className="Home">
        <div className="Home-text">
          <p>Hi There!</p>
          <h1>
            I'M <b>Morakinyo Isaac</b>
          </h1>
          <h2>
            <Typer />
          </h2>
        </div>
        <Lottie
          className="animi-computer"
          animationData={Computer}
          loop={true}
        />
      </div>

      <div className="intro">
        <h1>
          Brief <b>Introduction</b>
        </h1>
        <p>
          I'm a web developer with a strong foundation in modern web
          technologies, seeking opportunities to contribute to impactful
          projects and continue growing professionally.
          <br />
          <br />I specialize in building scalable, user-friendly Web
          applications using <b>Typescript, React.js and Next.js</b> on the
          Frontend, with <b>Node.js</b> handling the backend logic. I regularly
          use MongoDB as my preferred database solution and am actively
          deepening my expertise in it.
        </p>
      </div>
    </div>
  );
}

export default Home;

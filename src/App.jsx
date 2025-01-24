import React from "react";
import Lottie from "lottie-react"
import Animation from "./component/Lottie/shooting stars.json"
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./component/About"
import Project from "./component/Project"
import Resume from "./component/Resume"
import Refresh from "./component/Refresh";
import MoveToTop from "./component/MoveToTop";


function App() {
 

  return (
    <div className="app-container">
      
      {/* <Refresh /> */}
      <Lottie className="bg1" animationData={Animation} loop={true}/>
      
      
      
      
        <NavBar/>
        <MoveToTop/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      
       
        <Footer/> 

    </div>
  )
}

export default App

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Animation from "./component/Lottie/shooting stars.json";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "./component/About";
import Project from "./component/Project";
import Resume from "./component/Resume";
import { ClipLoader } from "react-spinners";
import MoveToTop from "./component/MoveToTop";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1900);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="loader">
          <ClipLoader
            className="spinner"
            color={"#422407"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="element-container">
          <Lottie className="bg1" animationData={Animation} loop={true} />
          <NavBar />
          <MoveToTop />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />{" "}
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import * as pdfjsLib from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Resume() {
  const [wid, setWid] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWid(window.innerWidth);
    }
    handleResize();
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
  });

  // npm run build
  // npm run preview

  return (
    <div className="resume-container">
      <div className="resume">
        <Document file={pdf} className="resume-pdf">
          <Page
            pageNumber={1}
            scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1}
          />
        </Document>

        <a href={pdf} target="blank" download="Morakinyo's CV">
          <button type="button" className="downloadCV">
            {" "}
            <SaveAltOutlinedIcon sx={{ fontSize: "14px" }} />
            &nbsp; Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default Resume;

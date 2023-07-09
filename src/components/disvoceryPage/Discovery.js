import React from "react";
import "./Discovery.scss";
import Experience from "../experience/Experience";

function Discovery() {
  return (
    <>
      <div className="projectsbigDiv">
        <p className="title" id="projectPage">My Projects</p>

        <div className="projects">
          <hr className="introLine"></hr>

          <Experience detail="sadasdadasdasd" />
          <Experience detail = "we done school NIGGGAAAA"/>
          <Experience />
          <Experience />
          <Experience />
          <Experience />
          <Experience />
          <Experience />
          <Experience />
        </div>
      </div>
    </>
  );
}
export default Discovery;

import React from "react";
import "./Discovery.scss";
import Experience from "../experience/Experience";
import questionMark from "../../assets/images/questiongalaxy.jpeg";

const experienceData = [
  { detail: <>Soon</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
];

function Discovery() {
  return (
    <div className="projectInfoBig">
      <div className="projectTitle">
        <p className="title" id="projectPage">
          My Projects
        </p>
      </div>
      <lind className="introLine"></lind>
      <div className="projectInfo">
        <div className="imageContainer">
          <img src={questionMark} />
        </div>

        <div className="textContainer">
          <Experience detail="sadasdadasdasd" />
          <Experience detail="we done school G" />
          <Experience />
          <Experience />
          <Experience />
          <Experience />
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
}
export default Discovery;

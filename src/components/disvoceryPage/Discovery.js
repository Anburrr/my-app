import "./Discovery.scss";
import Experience from "../experience/Experience";
import questionMark from "../../assets/images/questiongalaxy.jpeg";
import React, { useEffect, useState, useContext } from "react";

const experienceData = [
  { detail: <>Soon</> },
  { detail: <>KT a FRUIT</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
];





function Discovery() {

  const [imageShown, setImageShown] = useState(0)


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
        {imageShown === 0 && <img src={questionMark}/>}
          {imageShown === 1 && <img src={questionMark}/>}

          {imageShown=== 2 && <img src={questionMark}/>}

          {imageShown === 3 && <img src={questionMark}/>}
        </div>

        <div className="textContainer">
        {experienceData.map((d, i) => (
            <Experience
              key={i}
              detail={d.detail}

              onMouseOver={() => {
                setImageShown(i)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Discovery;

import "./Discovery.scss";
import Experience from "../experience/Experience";
import questionMark from "../../assets/images/questiongalaxy.jpeg";
import React, { useEffect, useState, useContext } from "react";

const experienceData = [
  { detail: <>Soon</> },
  { detail: <>Test2</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
];





function Discovery() {

  const [isShown, setIsShown] = useState("");


  return (
    <div className="projectInfoBig">
      <div className="projectTitle">
        <p className="title" id="projectPage">
          My Projects
        </p>
      </div>
      <lind className="introLine"></lind>
      <div className="projectInfo">


        <div className="textContainer">
        {experienceData.map((d, i) => (
            <Experience
              key={i}
              detail={d.detail}

              onMouseEnter={() => setIsShown(i)}
              onMouseLeave={() => setIsShown("")}
/>


          ))}

{isShown && <img src={experienceData[isShown - 1]} alt={`isShown-${isShown}`} />}
        </div>

        <div className="imageContainer">
        {isShown === 0 && <img src={questionMark}/>}

          {isShown === 1 && <img src={questionMark}/>}

          {isShown=== 2 && <img src={questionMark}/>}

          {isShown === 3 && <img src={questionMark}/>}
        </div>

      </div>
    </div>
  );
}
export default Discovery;

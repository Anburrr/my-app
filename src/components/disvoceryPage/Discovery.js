import React, { useState } from "react";
import "./Discovery.scss";
import Experience from "../experience/Experience";
import questionMark from "../../assets/images/questiongalaxy.jpeg";
import naImage from "../../assets/images/errorPage.jpg"

const experienceData = [
  { detail: <>Soon</> },
  { detail: <>Test2</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
  { detail: <>Soon</> },
];

const images = [
  naImage,
  naImage,
  naImage,
  naImage,
  naImage,
];

function Discovery() {
  const [imageShown, setImageShown] = useState(null);

  const handleMouseEnter = (i) => {
    setImageShown(i);
    console.log("Image Shown:", i);
  };

  const handleMouseLeave = () => {
    setImageShown(null);
    console.log("Image Shown: None");
  };

  return (
    <div className="projectInfoBig">
      <div className="projectTitle">
        <p className="title" id="projectPage">
          My Projects
        </p>
      </div>
      <div className="introLine"></div>
      <div className="projectInfo">
        <div className="textContainer">
          {experienceData.map((d, i) => (
            <Experience
              key={i}
              detail={d.detail}
              handleMouseEnter={() => handleMouseEnter(i)}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
        <div className="imageContainer">
          <div className="imageCenter">
          {imageShown !== null && (
            <img
              src={images[imageShown]}
              alt={`Image ${imageShown}`}
              className="imageDisplay"
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discovery;

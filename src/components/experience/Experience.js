import React, { useState } from "react";
import "./Experience.scss";

export default function Experience({ detail, handleMouseEnter, handleMouseLeave }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div className="imageHover">
        <div onMouseEnter={() => handleMouseEnter()} onMouseLeave={handleMouseLeave}>
        <button className={`learn-more ${isShown ? "isShown" : ""}`}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">{detail}</span>
        </button>
        </div>
        <p className="type">Web Developer</p>
      </div>
      <div className="Line"></div>
    </div>
  );
}

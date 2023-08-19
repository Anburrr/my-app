import React, { useState } from "react";
import "./Experience.scss";

export default function Experience({ detail, handleMouseEnter, handleMouseLeave }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div onMouseEnter={() => handleMouseEnter()} onMouseLeave={handleMouseLeave}>
      <div className="imageHover">
        <div className={`hoverButton ${isShown ? "isShown" : ""}`}>
        <button className="learn-more">
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

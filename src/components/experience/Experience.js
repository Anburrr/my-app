import React from "react";
import "./Experience.scss";
import questionMark from "../../assets/images/questiongalaxy.jpeg";
import { useState } from "react";

export default function Experience(props) {
  const [isShown, setIsShown] = useState(false);

  return (

        <div
        >
          <div className="imageHover">
          <button
            class="learn-more"

          >
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">
              {props.detail}
            </span>

          </button>

          

          <p className="type">Web Developer</p>

          </div>
          <line className="Line"></line>
        </div>


  );
}

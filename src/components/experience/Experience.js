import React from "react";
import "./Experience.scss";

export default function Experience(props) {

  return (
    <div className="projectInfoBig" style={{ width: "80%", marginLeft:"auto" }}>
      <div
        className="projectInfo"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
          marginLeft: "auto",
          marginBottom: "20px",
          marginTop:"20px"
        }}
      >


<div id="container">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Soon... 
    {/* {props.detail} */}
    </span>
  </button>
</div>

        <p className="type">
          Web Developer
        </p>
      </div>
      <line></line>
    </div>
  );
}

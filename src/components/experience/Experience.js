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
        <a
          className="button"
          href=""
          style={{ margin: 0, color: "white", textDecoration: "none", fontSize: '2.25vh'}}
        >
          Soon...
          {/* {props.detail} */}
        </a>
        <p className="type" style={{ color: "white", margin: "0", fontSize: "2.25vh" }}>
          Web Developer
        </p>
      </div>
      <line></line>
    </div>
  );
}

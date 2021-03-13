import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import "./project-cards.css";

export default function ProjectCards({
  name,
  description,
  image,
  github,
  deployed_plt,
}) {
  return (
    <div className="project-card">
      <div className="cards">
        <div className="imgBox">
          <img src={image} />
          <img src={image} />
        </div>
        <div className="details">
          <div className="content">
            <h2>
              {name}
              <br />
              <br />
              <span>{description}</span>
            </h2>
            <br />
            <div className="social-icons">
              <a href={deployed_plt} target="_blank">
                <SiNetlify />
              </a>
              <a href={github} target="_blank">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

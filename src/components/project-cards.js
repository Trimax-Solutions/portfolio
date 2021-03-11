import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import "./project-cards.css";

export default function ProjectCards() {
  return (
    <div className="project-card">
      <div className="cards">
        <div className="imgBox">
          <img src={"/card.png"} />
          <img src={"/card.png"} />
        </div>
        <div className="details">
          <div className="content">
            <h2>
              Project Name
              <br />
              <span>Project Description</span>
            </h2>
            <div className="social-icons">
              <a
                href="https://www.pinterest.com/login/"
                target="_blank"
                className="fa fa-twitter"
              >
                <SiNetlify />
              </a>
              <a
                href="https://www.pinterest.com/login/"
                target="_blank"
                className="fa fa-instgram"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

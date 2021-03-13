import React from "react";
import "./team.css";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

function Team() {
  return (
    <div className="team-container">
      <div className="a">
        <div className="b">
          <div className="c">
            <h2>Our Team</h2>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="img-box">
                <img src="team.jpg" alt="team member" />
              </div>
              <div className="content-box">
                <h3>
                  Umais Hassan
                  <br />
                  <span>Full stack developer</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="img-box">
                <img src="team.jpg" alt="team member" />
              </div>
              <div className="content-box">
                <h3>
                  Muhammad Abuzar
                  <br />
                  <span>Full stack developer</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="img-box">
                <img src="team.jpg" alt="team member" />
              </div>
              <div className="content-box">
                <h3>
                  Ibad Ahmad
                  <br />
                  <span>Full stack developer</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

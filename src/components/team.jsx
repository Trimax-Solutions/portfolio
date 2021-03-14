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
                <img src="umais.jpg" alt="team member" />
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
                <a href="https://www.facebook.com/umaix.hassan/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://github.com/M-Umais-Hassan">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="img-box">
                <img src="abuzar.jpg" alt="team member" />
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
                <a href="https://www.facebook.com/abuzarfaisal">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://github.com/abzuar9658">
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
                <a href="https://www.facebook.com/profile.php?id=100016821878911">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://github.com/IbadAhmad80">
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

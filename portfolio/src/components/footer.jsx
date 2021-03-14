import React from "react";
import "./footer.css";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-page">
      <footer class="footer">
        <div className="footer-left">
          {/* <img src="logo.png" alt="Logo" /> */}
          <h1>
            Trimax <span>Solutions</span>
          </h1>
          <p>
            We are group of three freelancers willing to provide you best work
            possibly out there
          </p>
          <div className="socials" style={{ margin: "2rem 0" }}>
            <a href="#">
              <div className="i">
                <FaTwitter />
              </div>
            </a>
            <a href="#">
              <div className="i">
                <FaFacebook />
              </div>
            </a>
            <a href="#">
              <div className="i">
                <FaInstagram />
              </div>
            </a>
            <a href="https://github.com/Trimax-Solutions">
              <div className="i">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
        <ul className="footer-right">
          <li>
            <h2>Product</h2>
            <ul className="box">
              <li>
                <a href="#">Gymhut</a>
              </li>
              <li>
                <a href="#">Whether Guider</a>
              </li>
              <li>
                <a href="#">Slack ChatApp</a>
              </li>
              <li>
                <a href="#">Instagaram Clone</a>
              </li>
              <li>
                <a href="#">Social Media App</a>
              </li>
            </ul>
          </li>
          <li className="features">
            <h2>Services</h2>
            <ul className="box">
              <li>
                <a href="#">Fontend</a>
              </li>
              <li>
                <a href="#">Backend</a>
              </li>
              <li>
                <a href="#">Website</a>
              </li>
              <li>
                <a href="#">Web Apps</a>
              </li>
              <li>
                <a href="#">Ecommerce Websites</a>
              </li>
              <li>
                <a href="#">Business Websites</a>
              </li>
              <li>
                <a href="#">And Much More...</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Contact info.</h2>
            <ul className="box">
              <li>
                <a href="#">Lahore, Pakistan</a>
              </li>
              <li>
                <a href="#">trimaxsolutionteam@gmail.com</a>
              </li>
              <li style={{ display: "flex", flexDirection: "column" }}>
                <a href="#">+92 3032172369</a>
                <a href="#">+92 3441103225</a>
                <a href="#">+92 3104009024</a>
              </li>
            </ul>
          </li>
        </ul>
        <div
          style={{ textAlign: "center", color: "#000", paddingTop: "50px" }}
          className="footer-botom"
        >
          <p>All Rights reserved by &copy; Trimax-Solutions 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

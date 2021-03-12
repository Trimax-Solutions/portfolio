import React from 'react';
import './footer.css';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-page">
            <footer class="footer">
                <div className="footer-left">
                    {/* <img src="logo.png" alt="Logo" /> */}
                    <h1>Trimax <span>Solutions</span></h1>
                    <p>Trimax Solutions is a Pakistan based software company that provides a lot of web services including web developer, web designing etc.</p>
                    <div className="socials">
                        <a href="#">
                            <div className="i"><FaTwitter /></div>
                        </a>
                        <a href="#">
                            <div className="i"><FaFacebook /></div>
                        </a>
                        <a href="#">
                            <div className="i"><FaInstagram /></div>
                        </a>
                        <a href="#">
                            <div className="i"><FaGithub /></div>
                        </a>
                    </div>
                </div>
                <ul className="footer-right">
                    <li>
                        <h2>Product</h2>
                        <ul className="box">
                            <li><a href="#">Theme Design</a></li>
                            <li><a href="#">Theme Design</a></li>
                            <li><a href="#">Theme Design</a></li>
                            <li><a href="#">Theme Design</a></li>
                            <li><a href="#">Theme Design</a></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2>Services</h2>
                        <ul className="box">
                            <li><a href="#">Fontend Development</a></li>
                            <li><a href="#">Backend Developemnt</a></li>
                            <li><a href="#">Website Designing</a></li>
                            <li><a href="#">Ecommerce Websites</a></li>
                            <li><a href="#">Business Websites</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Contact info.</h2>
                        <ul className="box">
                            <li><a href="#">Lahore, Pakistan</a></li>
                            <li><a href="#">contact.trimaxsolutions@gmail.com</a></li>
                            <li><a href="#">+92 300 0000000</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="footer-botom">
                    <p>All Rights reserved by &copy; trimax-solutions 2020</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
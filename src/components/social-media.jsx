import React from 'react';
import './main.css';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

function Social_media() {
    return (
        <div className="social-media">
            <div className="icon-box">
                <a href="#"><FaTwitter /></a>
            </div>
            <div className="icon-box">
                <a href="#"><FaFacebook /></a>
            </div>
            <div className="icon-box">
                <a href="#"><FaInstagram /></a>
            </div>
            <div className="icon-box">
                <a href="#"><FaGithub /></a>
            </div>
        </div>
    )
}

export default Social_media;

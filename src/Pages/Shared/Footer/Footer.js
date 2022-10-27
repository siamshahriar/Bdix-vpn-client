import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaTelegram,
  FaTwitterSquare,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <div class="footer-area">
          <Link className="myName">© Md. Shahriar Rahman ©</Link>
          <div class="social-icons">
            <a href="https://t.me/siaamdiu">
              <FaTelegram></FaTelegram>
            </a>
            <a href="https://github.com/siamshahriar">
              <FaGithub></FaGithub>
            </a>
            <a href="https://www.facebook.com/mdshahriarrahman.siam/">
              <FaFacebook></FaFacebook>
            </a>
            <a href="twitter.com">
              <FaTwitterSquare></FaTwitterSquare>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

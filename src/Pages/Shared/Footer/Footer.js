import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-area">
        <Link className="myName">© Md. Shahriar Rahman ©</Link>
        <div class="social-icons">
          <Link>github</Link>
          <Link>facebook</Link>
          <Link>telegram</Link>
          <Link>twitter</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

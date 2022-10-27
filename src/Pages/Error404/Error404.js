import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";
const Error404 = () => {
  return (
    <div className="permission_denied">
      <div className="denied__wrapper">
        <h1>404</h1>
        <h3>
          LOST IN <span>SPACE</span> ? Hmm, looks like that page doesn't exist.
        </h3>

        <Link to="/">
          <button className="denied__link">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;

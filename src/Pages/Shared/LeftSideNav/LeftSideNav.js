import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./LeftSidenav.css";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/vpn-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center ">
        <button className="selectPack">Select Package</button>
      </div>
      <div className="text-center mb-4">
        {categories.map((category) => (
          <div
            className="eachCatagoryName"
            key={category.id}
            category={category}
          >
            <Link className="btn-ct" to={`/packages/${category.id}`}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between p-3 bg-info text-light text-center">
        <h1 id="head">
          <i className="bi bi-app-indicator"> </i>My Website
        </h1>
        <div className="d-flex gap-3">
          <Link to={"/"} className="text-decoration-none text-light">
            Home
          </Link>
          <Link to={"/about"} className="text-decoration-none text-light">
            About
          </Link>
          <Link to={"/product"} className="text-decoration-none text-light">
            Product
          </Link>
          <Link to={"/contact"} className="text-decoration-none text-light">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

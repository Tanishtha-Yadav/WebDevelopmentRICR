import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between bg-green-800 text-yellow-100 p-3">
      <h1>GlowMore</h1>
      <div className="flex gap-4">
        <Link to={"/"} className="">
          <IoHomeSharp /> Home
        </Link>
        <Link to={"/about"} className="">
          About
        </Link>
        <Link to={"/product"} className="">
          Product
        </Link>
        <Link to={"/contact"} className="">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;

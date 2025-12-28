import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { TbBrush } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex justify-between bg-green-800 text-yellow-100 p-4 ">
      <h1 className="flex items-center gap-1 font-bold">
        <TbBrush />
        GlowMore<span className="text-sm">--By Tanishtha</span>
      </h1>
      <div className="flex gap-4">
        <Link to={"/"} className="flex items-center gap-1">
          <IoHomeSharp />
          Home
        </Link>

        <Link to={"/about"} className="flex items-center gap-1">
          <IoIosInformationCircle />
          About
        </Link>
        <Link to={"/product"} className="flex items-center gap-1">
          <AiFillProduct />
          Product
        </Link>
        <Link to={"/contact"} className="flex items-center gap-1">
          <MdContacts /> Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;

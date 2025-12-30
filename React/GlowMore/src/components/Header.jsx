import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { TbBrush } from "react-icons/tb";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between bg-black text-white p-4 ">
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
        <Link to={""} className="flex items-center gap-1 mx-3">
          <RiShoppingCartLine />
        </Link>
        <Link to={"/Login"} className="flex items-center gap-1 mx-3">
          <FaRegUserCircle />
        </Link>
        <Link to={"/Registration"} className="bg-white text-black rounded p-2 hover:bg-black hover:text-white">
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TbTransactionRupee } from "react-icons/tb";
import { SiHelpdesk } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSideBar = ({ active, setActive, collapse, setCollapse }) => {
  return (
    <div className="p-3 overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <button onClick={() => setCollapse(!collapse)} className="p-2 text-xl cursor-pointer hover:scale-110">
          <GiHamburgerMenu />
        </button>

        {!collapse && (
          <span className="font-bold text-lg overflow-hidden text-nowrap">
            User Dashboard
          </span>
        )}
      </div>

      <hr />

      {/* Menu */}
      <div className="grid gap-3 mt-4">
        <button
          className={`flex gap-3 items-center p-3 rounded-xl ${
            active === "overview"
              ? "bg-(--color-secondary) text-(-color-text)"
              : "hover:bg-gray-300"
          }`}
          onClick={() => setActive("overview")}
        >
          <MdOutlineAnalytics className="text-xl" />
          {!collapse && <span>Overview</span>}
        </button>

        <button
          className={`flex gap-3 items-center p-3 rounded-xl ${
            active === "profile"
              ? "bg-(--color-secondary) text-(-color-text)"
              : "hover:bg-gray-300"
          }`}
          onClick={() => setActive("profile")}
        >
          <RiProfileFill className="text-xl" />
          {!collapse && <span>Profile</span>}
        </button>

        <button
          className={`flex gap-3 items-center p-3 rounded-xl ${
            active === "orders"
              ? "bg-(--color-secondary) text-(-color-text)"
              : "hover:bg-gray-300"
          }`}
          onClick={() => setActive("orders")}
        >
          <RiShoppingBag3Line className="text-xl" />
          {!collapse && <span>Orders</span>}
        </button>

        <button
          className={`flex gap-3 items-center p-3 rounded-xl ${
            active === "transaction"
              ? "bg-(--color-secondary) text-(-color-text)"
              : "hover:bg-gray-300"
          }`}
          onClick={() => setActive("transaction")}
        >
          <TbTransactionRupee className="text-xl" />
          {!collapse && <span>Transactions</span>}
        </button>

        <button
          className={`flex gap-3 items-center p-3 rounded-xl ${
            active === "helpdesk"
              ? "bg-(--color-secondary) text-(-color-text)"
              : "hover:bg-gray-300"
          }`}
          onClick={() => setActive("helpdesk")}
        >
          <SiHelpdesk className="text-xl" />
          {!collapse && <span>Help Desk</span>}
        </button>
      </div>
    </div>
  );
};

export default UserSideBar;

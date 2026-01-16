import React from "react";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TbTransactionRupee } from "react-icons/tb";
import { SiHelpdesk } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div
          className="text-xl font-bold flex gap-1 items-center"
          onClick={() => setCollapse(true)}
        >
          <GiHamburgerMenu />
          User Dashboard
        </div>
        <hr />
        <div className="grid gap-3 p-3">
          <button
            className={`flex gap-2 items-center p-3 rounded-xl ${
              active === "overview"
                ? "bg-(--color-secondary) text-(-color-text)"
                : " hover:bg-gray-300"
            }`}
            onClick={() => setActive("overview")}
          >
            <MdOutlineAnalytics />
            Overview
          </button>
          <button
            className={`flex gap-2 items-center p-3 rounded-xl ${
              active === "profile"
                ? "bg-(--color-secondary) text-(-color-text)"
                : " hover:bg-gray-300"
            }`}
            onClick={() => setActive("profile")}
          >
            <RiProfileFill />
            Profile
          </button>
          <button
            className={`flex gap-2 items-center p-3 rounded-xl ${
              active === "orders"
                ? "bg-(--color-secondary) text-(-color-text)"
                : " hover:bg-gray-300"
            }`}
            onClick={() => setActive("orders")}
          >
            <RiShoppingBag3Line />
            Orders
          </button>
          <button
            className={`flex gap-2 items-center p-3 rounded-xl ${
              active === "transaction"
                ? "bg-(--color-secondary) text-(-color-text)"
                : " hover:bg-gray-300"
            }`}
            onClick={() => setActive("transaction")}
          >
            <TbTransactionRupee />
            Transactions
          </button>
          <button
            className={`flex gap-2 items-center p-3 rounded-xl ${
              active === "helpdesk"
                ? "bg-(--color-secondary) text-(-color-text)"
                : " hover:bg-gray-300"
            }`}
            onClick={() => setActive("helpdesk")}
          >
            <SiHelpdesk /> Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;

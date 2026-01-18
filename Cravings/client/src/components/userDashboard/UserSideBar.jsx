import React from "react";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiProfileFill, RiShoppingBag3Line } from "react-icons/ri";
import { TbTransactionRupee } from "react-icons/tb";
import { SiHelpdesk } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSideBar = ({ active, setActive, collapse, setCollapse }) => {
  const menuItems = [
    { key: "overview", title: "Overview", icon: <MdOutlineAnalytics /> },
    { key: "profile", title: "Profile", icon: <RiProfileFill /> },
    { key: "orders", title: "Orders", icon: <RiShoppingBag3Line /> },
    {
      key: "transaction",
      title: "Transactions",
      icon: <TbTransactionRupee />,
    },
    { key: "helpdesk", title: "Help Desk", icon: <SiHelpdesk /> },
  ];

  return (
    <div className="p-3 overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setCollapse(!collapse)}
          className="p-2 text-xl hover:scale-110"
        >
          <GiHamburgerMenu />
        </button>

        {!collapse && (
          <span className="font-bold text-lg text-nowrap">
            User Dashboard
          </span>
        )}
      </div>

      <hr />

      {/* Menu */}
      <div className="grid gap-3 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`flex gap-3 items-center p-3 rounded-xl transition-all
              ${
                active === item.key
                  ? "bg-(--color-secondary) text-(-color-text)"
                  : "hover:bg-gray-300"
              }`}
          >
            <span className="text-xl">{item.icon}</span>
            {!collapse && <span>{item.title}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserSideBar;

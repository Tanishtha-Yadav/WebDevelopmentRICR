import React from "react";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiProfileFill, RiShoppingBag3Line } from "react-icons/ri";
import { TbTransactionRupee } from "react-icons/tb";
import { SiHelpdesk } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useAuth } from "../../context/AuthContext";

const UserSideBar = ({ active, setActive, collapse, setCollapse }) => {
  const { setUser, setIsLogin } = useAuth();
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

  const logoutItem = {
  key: "logout",
  title: "Logout",
  icon: <RiLogoutBoxRLine />,
};


  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };
  return (
    <div className="h-full flex flex-col">
      {/* Header + Menu */}
      <div className="flex-1 p-3 overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setCollapse(!collapse)}
            className="p-2 text-xl hover:scale-110"
          >
            <GiHamburgerMenu />
          </button>

          {!collapse && (
            <span className="font-bold text-lg whitespace-nowrap">
              User Dashboard
            </span>
          )}
        </div>

        <hr />

        {/* Menu Items */}
        <div className="flex flex-col gap-2 mt-6">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex items-center gap-3 p-3 rounded-xl w-full transition-all
              ${
                active === item.key
                  ? "bg-(--color-secondary) text-(-color-text)"
                  : "hover:bg-gray-300"
              }`}
            >
              <span className="text-xl w-6 flex justify-center">
                {item.icon}
              </span>

              {!collapse && (
                <span className="whitespace-nowrap">{item.title}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="p-3 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-xl w-full transition-all hover:bg-gray-300"
        >
          <span className="text-xl w-6 flex justify-center">
            <RiLogoutBoxRLine />
          </span>

          {!collapse && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default UserSideBar;

import React, { useState } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransactions";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="w-full h-[85vh] flex">
      <div
        className={`border border-green-500 bg-(--color-background)
        transition-all duration-300
        ${collapse ? "w-[70]" : "w-2/10"}`}
      >
        <UserSideBar
          active={active}
          setActive={setActive}
          collapse={collapse}
          setCollapse={setCollapse}
        />
      </div>

      <div
        className={`border border-red-500 transition-all duration-300
        ${collapse ? "w-[calc(100%-70px)]" : "w-8/10"}`}
      >
        {active === "overview" && <UserOverview />}
        {active === "profile" && <UserProfile />}
        {active === "orders" && <UserOrders />}
        {active === "transaction" && <UserTransactions />}
        {active === "helpdesk" && <UserHelpDesk />}
      </div>
    </div>
  );
};

export default UserDashboard;

import React, { useState, useEffect } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransactions";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  if (role !== "customer") {
    return (
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">⊗</div>
            <div className="text-xl">
              You are not login as Customer. Please Login again.
            </div>
          </div>
        </div>
      </>
    );
  }

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

/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import { useContext } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUserState] = useState(
    JSON.parse(sessionStorage.getItem("CravingUser")) || "",
  );
  const [isLogin, setIsLogin] = useState(!!user);
  const [role, setRole] = useState(user?.role || "");

  const setUser = (nextUser) => {
    setUserState((prevUser) => {
      const resolvedUser =
        typeof nextUser === "function" ? nextUser(prevUser) : nextUser;
      setIsLogin(!!resolvedUser);
      setRole(resolvedUser?.role || "");
      return resolvedUser;
    });
  };

  const value = { user, setUser, isLogin, setIsLogin, role, setRole };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

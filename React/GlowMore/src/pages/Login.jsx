import React from "react";
import { useState } from "react";

const Login = () => {
  const [infoData, setInfoData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClearForm = () => {
    setInfoData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(infoData);
    } catch (error) {
      console.log(error.message);
    }
    handleClearForm();
  };

  return (
    <>
      <center>
        <form onReset={handleClearForm} onSubmit={handleSubmit}>
          <div className="border fill-black m-2 p-2 text-center h-64 w-60 ">
            <h1 className="font-bold underline">Login</h1>
            <div className="m-2 p-2">
              <label htmlFor="email">E-Mail : </label>
              <br />
              <input
                type="email"
                name="email"
                className="border border-l-black"
                value={infoData.email}
                onChange={handleChange}
              />
            </div>
            <div className="m-2 p-2">
              <label htmlFor="password">Password : </label>
              <br />
              <input
                type="password"
                name="password"
                className="border border-l-black"
                value={infoData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="bg-black text-white p-3 border rounded"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </center>
    </>
  );
};

export default Login;

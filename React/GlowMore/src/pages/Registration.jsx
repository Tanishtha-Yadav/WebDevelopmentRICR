import React, { useState } from "react";

const Registration = () => {
  const [infoData, setInfoData] = useState({
    name: "",
    email: "",
    password: "",
    passwordRe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClearForm = () => {
    setInfoData({
      name: "",
      email: "",
      password: "",
      passwordRe: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (infoData.password != infoData.passwordRe) {
        alert("Password mismatched");
        console.warn("Password Mismatched");
        
      } else {
        console.log(infoData);
      }
    } catch (error) {
      console.log(error.message);
    }
    handleClearForm();
  };

  return (
    <>
      <center>
        <form onReset={handleClearForm} onSubmit={handleSubmit}>
          <div className="border fill-black m-2 p-1 text-center h-96 w-60 ">
            <h1 className="font-bold underline">Sign Up</h1>
            <div className="m-2 p-2">
              <label htmlFor="name">Enter your name : </label>
              <br />
              <input
                type="name"
                className="border border-l-black"
                name="name"
                value={infoData.name}
                onChange={handleChange}
              />
            </div>
            <div className="m-2 p-2">
              <label htmlFor="email">Enter your email : </label>
              <br />
              <input
                type="email"
                className="border border-l-black"
                name="email"
                value={infoData.email}
                onChange={handleChange}
              />
            </div>
            <div className="m-2 p-2">
              <label htmlFor="password">Enter a password : </label>
              <br />
              <input
                type="password"
                className="border border-l-black"
                name="password"
                value={infoData.password}
                onChange={handleChange}
              />
            </div>
            <div className="m-2 p-2">
              <label htmlFor="passwordRe">Enter password again : </label>
              <br />
              <input
                type="password"
                className="border border-l-black"
                name="passwordRe"
                value={infoData.passwordRe}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="bg-black text-white p-3 border rounded"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </center>
    </>
  );
};

export default Registration;

import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Login = () => {

  //const {setUser,setIslogin}

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      handleClearForm();
      navigate("/user-dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-(--color-background) p-6 px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-(--color-text) mb-2">
              Login
            </h1>
            <p className="text-lg text-(--color-text) opacity-70">
              Please login to your account below
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              <div className="space-y-4 mb-10">
                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                focus:outline-none focus:border-(--color-primary) transition disabled:cursor-not-allowed disabled:bg-gray-200"
                />

                {/* Password */}
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                focus:outline-none focus:border-(--color-primary) transition disabled:cursor-not-allowed disabled:bg-gray-200"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-8 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-(--color-secondary) text-(--text-color) font-bold
                py-4 px-6 rounded-lg hover:bg-(--color-secondary-hover)
                transition duration-300 transform hover:scale-105 shadow-lg  disabled:bg-gray-300 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  Login
                </button>
              </div>
              <div className="text-center mt-3">
                <span className="mr-2">Don't have an account?</span>
                <Link to={"/register"} className="text-blue-600 font-bold">
                  Register
                </Link>
              </div>
            </form>
          </div>

          {/* Footer */}
          <p className="text-center text-(--color-text) opacity-60 mt-8 text-sm">
            We respect your privacy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

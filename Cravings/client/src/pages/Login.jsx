import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ForgetPasswordModal from "../components/publicModals/ForgetPasswordModal";

const Login = () => {
  const { setUser, setIsLogin, setRole } = useAuth();

  const navigate = useNavigate();

  const [isForgetPasswordModelOpen, setIsForgetPasswordModelOpen] =
    useState(false);

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
    setIsLoading(true);

    console.log(formData);
    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      setUser(res.data.data);
      setIsLogin(true);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      handleClearForm();
      switch (res.data.data.role) {
        case "manager": {
          setRole("manager");
          navigate("/restaurant-dashboard");
          break;
        }
        case "partner": {
          setRole("partner");
          navigate("/rider-dashboard");
          break;
        }
        case "customer": {
          setRole("customer");
          navigate("/user-dashboard");
          break;
        }
        case "admin": {
          setRole("admin");
          navigate("/admin-dashboard");
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-(--color-background) to-(--color-background) py-6 px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-(--color-text) mb-2">
              Welcome Back
            </h1>
            {/* <p className="text-lg text-(--color-text)">
              You are 1 step away to stop your Cavings
            </p> */}
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              {/* Personal Information */}
              <div className="mb-5">
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full h-fit px-4 py-3 border-2 border-(--color-primary) rounded-lg focus:outline-none focus:border-(--color-primary) transition disabled:cursor-not-allowed disabled:bg-(--color-background)"
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-(--color-primary) rounded-lg focus:outline-none focus:border-(--color-primary) transition disabled:cursor-not-allowed disabled:bg-(--color-background)"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <button
                    className="text-(--color-primary) hover:text-(--color-secondary) cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsForgetPasswordModelOpen(true);
                    }}
                  >
                    Forget Password?
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-8 border-t-2 border-(--color-primary)">
                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-(--color-background) text-(--color-text) font-bold py-4 px-6 rounded-lg hover:bg-(--color-secondary-hover) transition duration-300 transform hover:scale-105 disabled:scale-100 disabled:bg-(--color-background) disabled:cursor-not-allowed"
                >
                  Clear Form
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-linear-to-r from-(--color-primary) to-(--color-primary-hover) text-white font-bold py-4 px-6 rounded-lg hover:from-(--color-primary-hover) hover:to-(--color-primary-hover) transition duration-300 transform hover:scale-105 shadow-lg disabled:scale-100 disabled:bg-(--color-background)  disabled:cursor-not-allowed"
                >
                  {isLoading ? "loading.." : "Login"}
                </button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <p className="text-center text-(--color-text) mt-8 text-sm">
            All fields marked are mandatory. We respect your privacy.
          </p>
        </div>
      </div>

      {isForgetPasswordModelOpen && (
        <ForgetPasswordModal
          onClose={() => setIsForgetPasswordModelOpen(false)}
        />
      )}
    </>
  );
};

export default Login;
import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
    setValidationError({});
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be more than 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      Error.fullName = "Only A–Z, a–z and spaces allowed";
    }

    if (
      !/^[\w.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use proper email format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian mobile numbers allowed";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      toast.error("Fill the form correctly");
      setIsLoading(false);
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-(--color-background) py-6 px-4">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-(--color-text) mb-2">
            Registration
          </h1>
          <p className="text-lg text-(--color-text) opacity-70">
            You are 1 step away to stop your cravings
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
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                  focus:outline-none focus:border-(--color-primary) transition disabled:cursor-not-allowed disabled:bg-gray-200"
                />
                {validationError.fullName && (
                  <span className="text-xs text-(--color-accent)">
                    {validationError.fullName}
                  </span>
                )}
              </div>

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

              {/* Mobile */}
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                maxLength="10"
                value={formData.mobileNumber}
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

              {/* Confirm Password */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                focus:outline-none focus:border-(--color-primary) transition disabled:cursor-not-allowed disabled:bg-gray-200"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-8 border-t border-gray-200">
              <button
                type="reset"
                disabled={isLoading}
                className="flex-1 bg-(--color-secondary) text-(--color-text)
                font-bold py-4 px-6 rounded-lg
                hover:bg-(--color-secondary-hover)
                transition duration-300 transform hover:scale-105 disabled:bg-gray-300 disabled:scale-100 disabled:cursor-not-allowed"
              >
                Clear Form
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-(--color-primary) text-white font-bold
                py-4 px-6 rounded-lg hover:bg-(--color-primary-hover)
                transition duration-300 transform hover:scale-105 shadow-lg  disabled:bg-gray-300 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isLoading ? "Registering..." : "Submit Registration"}
              </button>
            </div>
            <div className="text-center mt-3">
              <span className="mr-2">Already have an account?</span>
              <Link to={"/login"} className="text-blue-600 font-bold">
                Login
              </Link>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-(--color-text) opacity-60 mt-8 text-sm">
          All fields are mandatory. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default Register;

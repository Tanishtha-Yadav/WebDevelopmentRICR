import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    password: "",
    confirmpassword: "",
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
      dateOfBirth: "",
      password: "",
      confirmpassword: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be more than 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      Error.fullName = "Only letters and spaces allowed";
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Invalid email format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian mobile numbers allowed";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the form correctly");
      return;
    }

    try {
      console.log(formData);
      toast.success("Registration Successful");
      handleClearForm();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen py-6 px-4"
      style={{
        background: "linear-gradient(to bottom right, #f7fafc, #5a9cb5)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#1f2a30]">
            Registration
          </h1>
          <p className="text-lg opacity-80 text-[#1f2a30]">
            You are 1 step away to fulfill your cravings
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <form
            onSubmit={handleSubmit}
            onReset={handleClearForm}
            className="p-8"
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 rounded-lg outline-none
                  border-[#5a9cb5] focus:border-[#4a8aa2]"
                />
                {validationError.fullName && (
                  <span className="text-xs text-[#fa6868]">
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
                className="w-full px-4 py-3 border-2 rounded-lg outline-none
                border-[#5a9cb5] focus:border-[#4a8aa2]"
              />

              {/* Mobile */}
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                maxLength="10"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-lg outline-none
                border-[#5a9cb5] focus:border-[#4a8aa2]"
              />

              {/* DOB */}
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-lg outline-none
                border-[#5a9cb5] focus:border-[#4a8aa2]"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-lg outline-none
                border-[#5a9cb5] focus:border-[#4a8aa2]"
              />

              {/* Confirm Password */}
              <input
                type="password"
                name="confrimpassword"
                placeholder="Confirm Password"
                value={formData.confirmpassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-lg outline-none
                border-[#5a9cb5] focus:border-[#4a8aa2]"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-8 border-t mt-8">
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  background: "linear-gradient(to right, #5a9cb5, #4a8aa2)",
                }}
                className="flex-1 text-white font-bold py-4 px-6 rounded-lg
                transition transform hover:scale-105 shadow-lg"
              >
                Submit Registration
              </button>

              <button
                type="reset"
                className="flex-1 font-bold py-4 px-6 rounded-lg
                bg-[#face68] hover:bg-[#faac68]
                text-[#1f2a30]
                transition transform hover:scale-105"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-sm mt-8 text-[#1f2a30] opacity-70">
          All fields are mandatory. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default Register;

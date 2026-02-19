import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.post("/public/new-contact", formData);
      toast.success(res.data.message);
      handleClearForm();
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
              Contact Us
            </h1>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              {/* Personal Information */}
              <div className="mb-10">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full h-fit px-4 py-3 border-2 border-(--color-primary) rounded-lg focus:outline-none focus:border-(--color-primary) transition disabled:cursor-not-allowed disabled:bg-(--color-background)"
                    />
                  </div>
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
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    maxLength="10"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-(--color-primary) rounded-lg focus:outline-none focus:border-(--color-primary) transition disabled:cursor-not-allowed disabled:bg-(--color-background)"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    placeholder="Message"
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-(--color-primary) rounded-lg focus:outline-none focus:border-(--color-primary) transition disabled:cursor-not-allowed disabled:bg-(--color-background)"
                  ></textarea>
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
                  {isLoading ? "Submitting" : "Submit"}
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
    </>
  );
};

export default Contact;

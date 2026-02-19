import React from "react";
import { useState } from "react";
import api from "../../../config/Api";
import toast from "react-hot-toast";

const ResetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    cfNewPassword: "",
  });
  const [errors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    //validation Code

    try {
      const res = await api.patch("/user/resetPassword", formData);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
        <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
          <div className="flex justify-between px-6 py-4 border-b border-(--color-primary) items-center sticky top-0 bg-white">
            <h2 className="text-xl font-semibold text-(--color-text)">
              Reset Password
            </h2>
            <button
              onClick={() => onClose()}
              className="text-(--color-text) hover:text-(--color-accent) text-2xl transition"
            >
              X
            </button>
          </div>

          {/* we will be taking old and new Password here */}

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Personal Information Section */}
            <div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-(--color-text) mb-1">
                    Old Password *
                  </label>
                  <input
                    type="password"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) ${
                      errors.oldPassword ? "border-(--color-accent)" : "border-(--color-primary)"
                    }`}
                    placeholder="Enter your old password"
                  />
                  {errors.oldPassword && (
                    <p className="text-(--color-accent) text-xs mt-1">
                      {errors.oldPassword}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-(--color-text) mb-1">
                    New Password *
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) ${
                      errors.newPassword ? "border-(--color-accent)" : "border-(--color-primary)"
                    }`}
                    placeholder="Enter your new password"
                  />
                  {errors.newPassword && (
                    <p className="text-(--color-accent) text-xs mt-1">
                      {errors.newPassword}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-(--color-text) mb-1">
                    Confirm New Password *
                  </label>
                  <input
                    type="password"
                    name="cfNewPassword"
                    value={formData.cfNewPassword}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) ${
                      errors.cfNewPassword
                        ? "border-(--color-accent)"
                        : "border-(--color-primary)"
                    }`}
                    placeholder="Confirm new password"
                  />
                  {errors.cfNewPassword && (
                    <p className="text-(--color-accent) text-xs mt-1">
                      {errors.cfNewPassword}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-(--color-primary)">
              <button
                type="button"
                onClick={() => onClose()}
                disabled={loading}
                className="px-6 py-2 bg-(--color-background) text-(--color-text) rounded-md hover:bg-(--color-secondary-hover) transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-(--color-primary) text-white rounded-md hover:bg-(--color-primary-hover) transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">Loading...</span>
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordModal;

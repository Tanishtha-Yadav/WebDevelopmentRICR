import React, { useState } from "react";
import api from "../../../config/Api";
import toast from "react-hot-toast";

const AddMenuItemModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    price: "",
    cuisine: "",
    type: "",
    preparationTime: "",
    servingSize: "",
    availability: true,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    // console.log(files);
    // console.log(fileArray);
    let temp = [];
    fileArray.forEach((img) => {
      let imgURL = URL.createObjectURL(img);
      temp.push(imgURL);
    });
    setImagePreviews(temp.slice(0, 5));
    setImages(fileArray.slice(0, 5));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const form_data = new FormData();
      form_data.append("itemName", formData.itemName);
      form_data.append("description", formData.description);
      form_data.append("price", formData.price);
      form_data.append("servingSize", formData.servingSize);
      form_data.append("cuisine", formData.cuisine);
      form_data.append("type", formData.type);
      form_data.append("preparationTime", formData.preparationTime);
      form_data.append(
        "availability",
        formData.availability ? "available" : "unavailable",
      );
      images.forEach((img) => {
        form_data.append("itemImages", img);
      });

      //trasnfer MenuData to formData
      const res = await api.post("/restaurant/addMenuItem", form_data);
      toast.success(res.data.message);
      console.log(res.data.data);
      setTimeout(handleClose, 1500);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to add menu item");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      itemName: "",
      description: "",
      price: "",
      category: "",
      cuisine: "",
      type: "",
      preparationTime: "",
      availability: true,
    });

    setImagePreviews([]);
    setImages([]);
    setErrors("");
    setLoading(false);

    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
          <div className="flex justify-between px-6 py-4 border-b border-(--color-primary) items-center sticky top-0 bg-white">
            <h2 className="text-xl font-semibold text-(--color-text)">
              Add Menu Item
            </h2>
            <button
              onClick={handleClose}
              className="text-(--color-text) hover:text-(--color-accent) text-2xl transition"
            >
              X
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Item Image Section */}
            <div>
              <h3 className="text-lg font-semibold text-(--color-text) mb-4 pb-2 border-b border-(--color-primary)">
                Item Image
              </h3>
              <div className="flex items-end gap-4">
                <label
                  htmlFor="image"
                  className="px-6 py-2 w-fit bg-(--color-secondary) text-white rounded-md hover:bg-(--color-secondary-hover) cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Add Image
                </label>
                <div className="flex flex-col">
                  <span className="text-sm text-(--color-text)">
                    (Upto 5 Images Allowed)
                  </span>
                  <span className="text-sm text-(--color-text)">
                    (Max Size: 1MB each)
                  </span>
                </div>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                  multiple
                />
              </div>

              {imagePreviews.length !== 0 && (
                <div className="mt-3 grid grid-cols-5 gap-1">
                  {imagePreviews.map((itemImg, idx) => (
                    <div
                      className="border rounded-md w-30 h-30 overflow-hidden"
                      key={idx}
                    >
                      <img
                        src={itemImg}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Basic Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-(--color-text) mb-4 pb-2 border-b border-(--color-primary)">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-(--color-text) mb-1">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) ${
                      errors.itemName ? "border-(--color-accent)" : "border-(--color-primary)"
                    }`}
                    placeholder="e.g., Butter Chicken"
                  />
                  {errors.itemName && (
                    <p className="text-(--color-accent) text-xs mt-1">
                      {errors.itemName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-(--color-text) mb-1">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className={`w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) ${
                      errors.description ? "border-(--color-accent)" : "border-(--color-primary)"
                    }`}
                    placeholder="Describe the dish, ingredients, and taste"
                  />
                  {errors.description && (
                    <p className="text-(--color-accent) text-xs mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Pricing & Category Section */}
            <div>
              <h3 className="text-lg font-semibold text-(--color-text) mb-4 pb-2 border-b border-(--color-primary)">
                Pricing & Category
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-(--color-text) mb-1">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className={`w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) ${
                      errors.price ? "border-(--color-accent)" : "border-(--color-primary)"
                    }`}
                    placeholder="0.00"
                  />
                  {errors.price && (
                    <p className="text-(--color-accent) text-xs mt-1">{errors.price}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-(--color-text) mb-1">
                    Serving Size *
                  </label>
                  <input
                    type="text"
                    name="servingSize"
                    value={formData.servingSize}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) ${
                      errors.servingSize ? "border-(--color-accent)" : "border-(--color-primary)"
                    }`}
                    placeholder="e.g., Main Course, Appetizer"
                  />
                  {errors.servingSize && (
                    <p className="text-(--color-accent) text-xs mt-1">
                      {errors.servingSize}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-(--color-text) mb-1">
                    Cuisine
                  </label>
                  <input
                    type="text"
                    name="cuisine"
                    value={formData.cuisine}
                    onChange={handleInputChange}
                    className="w-full border border-(--color-primary) rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                    placeholder="e.g., Indian, Italian"
                  />
                </div>
              </div>
            </div>

            {/* Attributes Section */}
            <div>
              <h3 className="text-lg font-semibold text-(--color-text) mb-4 pb-2 border-b border-(--color-primary)">
                Item Attributes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-(--color-text) mb-1"
                  >
                    Food Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="border w-full border-(--color-primary) rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                  >
                    <option value="">Select Type</option>
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="egg">Egg</option>
                    <option value="jain">Jain</option>
                    <option value="gluten-free">Gluten-Free</option>
                    <option value="contains-nuts">Contains Nuts</option>
                    <option value="dairy">Dairy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-(--color-text) mb-1">
                    Preparation Time (minutes) *
                  </label>
                  <input
                    type="number"
                    name="preparationTime"
                    value={formData.preparationTime}
                    onChange={handleInputChange}
                    min="0"
                    className={`border rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-(--color-primary) ${
                      errors.preparationTime
                        ? "border-(--color-accent)"
                        : "border-(--color-primary)"
                    }`}
                    placeholder="e.g., 15"
                  />
                  {errors.preparationTime && (
                    <p className="text-(--color-accent) text-xs mt-1">
                      {errors.preparationTime}
                    </p>
                  )}
                </div>

                <div className="flex items-end gap-3 ">
                  <input
                    type="checkbox"
                    name="availability"
                    checked={formData.availability}
                    onChange={handleInputChange}
                    id="availability"
                    className="w-4 h-4 text-(--color-primary) border-(--color-primary) rounded focus:ring-(--color-primary)"
                  />
                  <label
                    htmlFor="availability"
                    className="text-sm font-medium text-(--color-text) cursor-pointer"
                  >
                    Available
                  </label>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-(--color-primary)">
              <button
                type="button"
                onClick={handleClose}
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
                  "Add Menu Item"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMenuItemModal;

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    lastQualification: "",
    percentageGrade: "",
    preferredCourse: "",
    residentialAddress: "",
    city: "",
    pinCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let err = {};

    if (!formData.fullName.trim()) err.fullName = "Required";
    if (!/^[\w.]+@\w+\.\w+$/.test(formData.email)) err.email = "Invalid email";
    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber))
      err.mobileNumber = "Invalid number";
    if (!formData.dateOfBirth) err.dateOfBirth = "Required";
    if (!formData.lastQualification) err.lastQualification = "Required";
    if (!formData.percentageGrade) err.percentageGrade = "Required";
    if (!formData.preferredCourse) err.preferredCourse = "Required";
    if (!formData.residentialAddress) err.residentialAddress = "Required";
    if (!formData.city) err.city = "Required";
    if (!/^\d{6}$/.test(formData.pinCode)) err.pinCode = "Invalid pin";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  return (
    <>
      <Toaster />

      <div className="bg-gray-100 min-h-screen">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!validate()) {
              toast.error("Fix errors");
              return;
            }
            toast.success("Form submitted");
          }}
        >
          <header>
            <div className="w-full bg-amber-300 p-3 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOHZTjTNfzlxgkO93TgCsYgk4jTU9Cm0zDA&s"
                  alt="logo"
                  className="w-12 h-12 rounded-full"
                />
                <h1 className="text-black font-bold text-2xl">
                  Registration Page
                </h1>
              </div>
              <button className="bg-black text-amber-300 px-4 py-1 rounded hover:bg-amber-300 hover:text-black">
                Login
              </button>
            </div>
          </header>

          <main className="p-8">
            <div className="border border-black rounded p-3 pt-4 my-3 relative">
              <span className="absolute -top-4 bg-gray-100 px-2 text-lg text-blue-600">
                Personal Information
              </span>

              <div className="space-y-2">
                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Full Name: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-3/4 border rounded px-3 py-1"
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-xs">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Email Address: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="email"
                    className="w-3/4 border rounded px-3 py-1"
                  />
                </div>

                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Mobile No: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="number"
                    className="w-3/4 border rounded px-3 py-1"
                  />
                </div>

                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    D.O.B: <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="date"
                    className="w-3/4 border rounded px-3 py-1"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="border border-black rounded p-3 pt-4 my-3 relative">
              <span className="absolute -top-4 bg-gray-100 px-2 text-lg text-blue-600">
                Academic Details
              </span>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Qualification: <sup className="text-red-500">*</sup>
                  </label>
                  <select className="w-3/4 border rounded px-3 py-1">
                    <option value="">--Select Qualification--</option>
                    <option>Secondary Schooling</option>
                    <option>Senior Secondary Schooling</option>
                    <option>Graduation</option>
                    <option>Post Graduation</option>
                    <option>PhD</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Percentage / Grade: <sup className="text-red-500">*</sup>
                  </label>
                  <input className="w-3/4 border rounded px-3 py-1" />
                </div>
              </div>
            </div>
            <br />
            <div className="border border-black rounded p-3 pt-4 my-3 relative">
              <span className="absolute -top-4 bg-gray-100 px-2 text-lg text-blue-600">
                Course Information
              </span>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Available Courses: <sup className="text-red-500">*</sup>
                  </label>
                  <select className="w-3/4 border rounded px-3 py-1">
                    <option value="">--Select Course--</option>
                    <option>Full Stack Development</option>
                    <option>Data Science</option>
                    <option>Data Analytics</option>
                    <option>Java DSA</option>
                    <option>Python DSA</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Preferred Batch: <sup className="text-red-500">*</sup>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" /> Morning
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" /> Afternoon
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" /> Evening
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" /> Weekends
                    </label>
                  </div>
                </div>

                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Preferred Timing: <sup className="text-red-500">*</sup>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="timing" /> 6:00 - 7:30 PM
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="timing" /> 7:00 - 9:00 PM
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="timing" /> 7:00 - 9:00 AM
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="border border-black rounded p-3 pt-4 my-3 relative">
              <span className="absolute -top-4 bg-gray-100 px-2 text-lg text-blue-600">
                Address
              </span>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Address: <sup className="text-red-500">*</sup>
                  </label>
                  <textarea className="w-3/4 border rounded px-3 py-1"></textarea>
                </div>

                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    City: <sup className="text-red-500">*</sup>
                  </label>
                  <input className="w-3/4 border rounded px-3 py-1" />
                </div>

                <div className="flex items-center">
                  <label className="w-1/4 font-medium">
                    Pin Code: <sup className="text-red-500">*</sup>
                  </label>
                  <input className="w-3/4 border rounded px-3 py-1" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                type="reset"
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Clear
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Submit
              </button>
            </div>
          </main>
        </form>
      </div>
    </>
  );
}

export default App;

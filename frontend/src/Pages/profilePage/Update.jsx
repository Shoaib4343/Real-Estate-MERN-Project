import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import UploadWidget from "../../Components/UploadWidget";

const Update = () => {
  const { updateUser, currentUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    password: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8800/user/${currentUser._id}`,
        {
          ...formData,
          avatar:avatar[0],
        },
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="container mx-auto flex justify-between items-center md:h-[calc(100vh-6rem)] px-4 mb-10">
      <div className="flex flex-col gap-5 md:w-3/5 md:flex-[3] md:justify-between">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Update your account
        </h2>
        <p className="text-lg text-gray-500">Update your details below.</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-full md:max-w-lg bg-white shadow-md p-8 rounded-lg"
        >
          {/* Username */}
          <div className="relative">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter your username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password (leave blank to keep current password)
            </label>
            <input
              type="password"
              name="password"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter a new password (optional)"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Error Message */}
          {error && <span className="text-red-600">{error}</span>}

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            Update
          </button>

          {/* Navigation back to profile */}
          <p className="text-center text-gray-500">
            Want to go back?{" "}
            <Link
              to="/profile"
              className="text-blue-500 font-semibold hover:underline"
            >
              View Profile
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="hidden lg:flex lg:flex-col flex-[2] bg-gray-300 h-full relative overflow-visible md:w-2/5 items-center justify-center">
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
          alt="User Avatar"
          className="h-auto w-3/5 max-w-xs mx-auto object-cover rounded-full shadow-lg"
        />

        <UploadWidget
          uwConfig={{
            cloudName: "diyjzdt53",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default Update;

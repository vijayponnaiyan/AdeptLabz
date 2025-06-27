import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-xl lg:max-w-full lg:px-32 bg-white border border-black p-6 md:p-8 rounded shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">My Profile</h2>
        <form className="space-y-4">
          {/* First Name & Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-black"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-black"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone number"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-black"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-black"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-black"
          />

          {/* Add New Address Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
            >
              ADD NEW ADDRESS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

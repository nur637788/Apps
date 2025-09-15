import React from "react"
import { NavLink,Outlet } from "react-router-dom"

const GetStart = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg mb-6">
          This is a simple homepage styled with{" "}
          <span className="font-semibold">TailwindCSS</span>.
        </p>
        <NavLink to="/about">
          <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default GetStart;

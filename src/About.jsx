import React, { useState } from "react"
import { Outlet,NavLink } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaUser, FaBars } from "react-icons/fa"

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Facebook", path: "/facebook", icon: <FaFacebook /> },
    { name: "Instagram", path: "instagram", icon: <FaInstagram /> },
    { name: "LinkedIn", path: "linkedIn", icon: <FaLinkedin /> },
    { name: "GitHub", path: "gitHub", icon: <FaGithub /> },
    { name: "Twitter", path: "twitter", icon: <FaTwitter /> },
    { name: "Portfolio", path: "protfolio", icon: <FaUser /> },
  ]

  return (
    <div>
    <header className="fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-pink-600">About</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-gray-600 hover:text-pink-600 transition ${
                  isActive ? "font-semibold text-pink-600" : ""
                }`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden  border-t shadow-lg">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-gray-600 hover:text-pink-600 transition ${
                    isActive ? "font-semibold text-pink-600" : ""
                  }`
                }
              >
                {item.icon} {item.name}
              </NavLink>
            ))}
          </nav>

        </div>
      )}
    </header>
         <Outlet />
          </div>
  )
}

export default About
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoBK from "../../assets/LogoBK.jpg"; // Adjust the path as necessary

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const menuItems = [
      { name: "Đăng nhập", path: "/login" },
      { name: "Đăng ký", path: "/register" },
    ];
  
    return (
      <header className="flex items-center justify-between px-4 bg-gray-800 text-white">
        {/* Left Section: Hamburger Menu and Logo */}
        <div className="flex items-center space-x-2">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
  
          {/* Logo */}
          <img src={LogoBK} alt="Logo" className="w-12 h-12 object-contain" />
        </div>
  
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-gray-400 ${isActive ? "text-gray-400 font-bold" : ""}`
                  }
                  aria-label={item.name}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;

export default Header;
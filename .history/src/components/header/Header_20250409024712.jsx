import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoBK from "../../assets/LogoBK.jpg"; // Adjust the path as necessary

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
      <header className="flex items-center justify-between px-4 bg-gray-800 text-white">
        {/* Left Section: Hamburger Menu and Logo */}
        <div className="flex items-center space-x-2">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="header-button focus:outline-none"
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
          <img src={LogoBK} alt="Logo" className="w-17 h-16 object-contain" />

          {}
        </div>
      </header>
    );
  };
  
  export default Header;
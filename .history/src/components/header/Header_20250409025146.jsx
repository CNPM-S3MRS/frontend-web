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

          
        </div>
        {/* Account */}
        <button
            className="header-button focus:outline-none"
            aria-label="Login"
            onClick={() => console.log("Login button clicked")} // Replace with your login logic
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
            >
            <path d="M13 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
            <path
                fillRule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
            />
            <path d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            <path
                fillRule="evenodd"
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            />
            </svg>
        </button>
      </header>
    );
  };
  
  export default Header;
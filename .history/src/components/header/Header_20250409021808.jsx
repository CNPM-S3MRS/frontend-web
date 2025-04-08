import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoBK from "../../assets/LogoBK.jpg"; // Adjust the path as necessary

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Đăng nhập", path: "/login" },
    { name: "Đăng ký", path: "/register" },
  ];

  return (
    <header className="flex items-center justify-between px-4 bg-gray-800 text-white">
      {/* Left Section: Hamburger Menu and Logo */}
      <div className="flex items-center ">
        {/* Logo */}
        <img src={LogoBK} alt="Logo" className="w-17 h-16 object-contain justify-items-start" />
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

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white shadow-lg z-50">
            <img src={LogoBK} alt="Logo" className="w-17 h-16 object-contain justify-items-start" />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 text-white focus:outline-none"
            aria-label="Close Sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="bi bi-list"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-8 space-y-4 p-4">
            <li>
              <NavLink to="/" className="hover:text-gray-400">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/register-room" className="hover:text-gray-400">
                Đăng ký phòng
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-rooms" className="hover:text-gray-400">
                Phòng của tôi
              </NavLink>
            </li>
            <li>
              <NavLink to="/notification" className="hover:text-gray-400">
                Thông báo
              </NavLink>
            </li>
            <li>
              <NavLink to="/account" className="hover:text-gray-400">
                Tài khoản
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
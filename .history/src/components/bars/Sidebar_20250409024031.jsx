import React from "react";
import { NavLink } from "react-router-dom";
import LogoBK from "../../assets/LogoBK.jpg"; // Adjust the path as necessary
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white shadow-lg z-50 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <img src={LogoBK} alt="Logo" className="w-17 h-16 object-contain space-x-2" />
      {/* Close Button */}
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="sidebar-button absolute top-4 right-4 text-white focus:outline-none"
        aria-label="Close Sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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

      {/* Sidebar Links */}
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
  );
};

export default Sidebar;
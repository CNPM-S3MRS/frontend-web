import React from "react";
import { NavLink } from "react-router-dom";
import LogoBK from "../../assets/LogoBK.jpg"; // Adjust the path as necessary
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white shadow-lg z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
    >
      <div className="flex items-center content-center">
        <img src={LogoBK} alt="Logo" className="w-17 h-20 object-contain" />
      </div>
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
          <NavLink to="/homepage" className={({ isActive }) =>
            `hover:text-gray-400 ${isActive ? 'text-blue-400 font-bold' : ''}`
          }
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register-room"
            className={({ isActive }) =>
              `hover:text-gray-400 ${isActive ? 'text-blue-400 font-bold' : ''}`
            }
          >
            Đăng ký phòng
          </NavLink>

        </li>
        <li>
          <NavLink to="/my-rooms" className={({ isActive }) =>
            `hover:text-gray-400 ${isActive ? 'text-blue-400 font-bold' : ''}`
          }
          >
            Phòng của tôi
          </NavLink>
        </li>
        <li>
          <NavLink to="/notification" className={({ isActive }) =>
            `hover:text-gray-400 ${isActive ? 'text-blue-400 font-bold' : ''}`
          }
          >
            Thông báo
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className={({ isActive }) =>
            `hover:text-gray-400 ${isActive ? 'text-blue-400 font-bold' : ''}`
          }
          >
            Tài khoản
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
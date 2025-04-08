import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active state if using React Router

const Sidebar = () => {
  const menuItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Đăng ký phòng", path: "/register-room" },
    { name: "Phòng của tôi", path: "/my-rooms" },
    { name: "Thông báo", path: "/notification" },
    { name: "Tài khoản", path: "/account" },
  ];

  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800 text-white">
      {/* Header */}
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-lg font-bold">Sidebar</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-gray-700 ${
                isActive ? "bg-gray-700 font-bold" : ""
              }`
            }
            aria-label={item.name}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
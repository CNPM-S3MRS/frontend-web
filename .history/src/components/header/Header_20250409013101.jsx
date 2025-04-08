import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menuItems = [
    { name: "Đăng nhập", path: "/login" },
    { name: "Đăng ký", path: "/register" },
  ];

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo or Title */}
      <img src="/LogoBK.png" alt="Logo" className="h-10" />

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
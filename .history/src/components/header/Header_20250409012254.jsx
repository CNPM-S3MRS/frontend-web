import React from "react";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-lg font-bold">Header</div>
        <nav>
            <ul className="flex space-x-4">
            <li>
                <a href="/login" className="hover:text-gray-400">
                Đăng nhập
                </a>
            </li>
            <li>
                <a href="/register" className="hover:text-gray-400">
                Đăng ký
                </a>
            </li>
            </ul>
        </nav>
        </header>
    );
};
import React from "react";

const Sidebar = () => {
    return (
        <div className="flex flex-col w-64 h-screen bg-gray-800 text-white">
        <div className="flex items-center justify-center h-16 bg-gray-900">
            <h1 className="text-lg font-bold">Sidebar</h1>
        </div>
        <nav className="flex flex-col mt-4">
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
            Trang chủ
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
            Đăng ký phòng
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
            Phòng của tôi
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
            Thông báo
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
            Thông báo
            </a>
        </nav>
        </div>
    );
};
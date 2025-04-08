import React from "react";

const Sidebar = () => {
    return (
        <div className="flex flex-col w-64 h-screen bg-gray-800 text-white">
        <div className="flex items-center justify-center h-16 bg-gray-900">
            <h1 className="text-lg font-bold">Sidebar</h1>
        </div>
        <nav className="flex flex-col mt-4">
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
            Home
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
            About
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
            Services
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
            Contact
            </a>
        </nav>
        </div>
    );
};
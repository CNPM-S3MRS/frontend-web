import React from "react";

const NotificationCard = ({ image, status, statusColor, title, time }) => {
    return (
        <div className="flex items-center p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <input type="checkbox" className="mr-4" />
            <img src={image} alt="Notification" className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-1">
                <span className={`text-sm font-semibold text-${statusColor}-500`}>{status}</span>
                <p className="text-lg font-semibold">{message}</p>
            </div>
            <div className="text-sm text-gray-500">    
                <button className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-ellipsis-v"></i>
                </button>
            </div>
        </div>
    );
};
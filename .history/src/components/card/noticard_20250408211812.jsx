import React from "react";

const NotiCard = ({ image, status, statusColor, title, time }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
        <div className="flex items-center">
            <img src={image} alt="Notification" className="w-12 h-12 rounded-full mr-4" />
            <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className={`text-sm text-${statusColor}-500`}>{status}</p>
            </div>
        </div>
        <p className="text-sm text-gray-500">{time}</p>
        </div>
    );
};
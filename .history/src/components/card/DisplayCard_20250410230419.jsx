import React from "react";

const DisplayCard = ({ image, status, statusColor, message }) => {
    return (
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
        <img src={image} alt="Notification" className="w-16 h-16 rounded-full mr-4" />
        <div className="flex flex-col">
            <span className={`text-${statusColor}-500 font-bold`}>{status}</span>
            <p className="text-gray-700">{message}</p>
        </div>
        </div>
    );
};

export default DisplayCard;
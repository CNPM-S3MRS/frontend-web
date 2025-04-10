import React from "react";

const DisplayCard = ({ image, status, statusColor, message, footer }) => {
    // cardStyles : card with footer

    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
            {/* Card Header */}
            <div className="flex items-center mb-4">
                <img src={image} alt="Notification" className="w-16 h-16 rounded-full mr-4" />
                <div className="flex-grow">
                    <h2 className={`text-lg font-bold text-${statusColor}-600`}>{status}</h2>
                    <p className="text-gray-700">{message}</p>
                </div>
            </div>

            {/* Card Footer */}
            {footer && (
                <div className="mt-4 border-t pt-2 text-sm text-gray-500">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default DisplayCard;
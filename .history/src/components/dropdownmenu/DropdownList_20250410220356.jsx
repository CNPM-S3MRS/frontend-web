import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const DropdownList = ({ isOpen, setIsOpen, listItems }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
        setIsDropdownOpen(true);
        } else {
        setIsDropdownOpen(false);
        }
    }, [isOpen]);
    
    return (
        <div
        className={`absolute top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ${
            isDropdownOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        >
        <ul className="flex flex-col">
            {listItems.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-200">
                {item}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default DropdownList;
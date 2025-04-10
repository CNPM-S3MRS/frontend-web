import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const DropdownList = ({ label, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({});

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const dropdownWidth = 224; // Width of the dropdown (e.g., `w-56` = 224px)
      const style = {
        top: rect.bottom + window.scrollY, // Position dropdown below the button
        left: rect.left + window.scrollX, // Default left alignment
        position: "absolute",
        zIndex: 50,
      };

      // Adjust position if dropdown overflows the viewport
      if (rect.left + dropdownWidth > window.innerWidth) {
        style.left = window.innerWidth - dropdownWidth - 16; // Align to the right edge with padding
      }

      setDropdownStyle(style);
    }
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        ref={dropdownRef}
      >
        {label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown rendered using a portal */}
      {isOpen &&
        createPortal(
          <div
            style={dropdownStyle}
            className="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onSelect(item);
                    setIsOpen(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>,
          document.body // Render outside the parent container
        )}
    </div>
  );
};

export default DropdownList;
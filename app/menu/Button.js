'use client'
import React, { useState } from 'react';

const MenuButton = ({ label, submenuItems }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
      >
        {label}
      </button>
      {isHovered && submenuItems.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
          {submenuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="block w-full px-4 py-2 text-left text-black hover:bg-gray-200 transition duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuButton;

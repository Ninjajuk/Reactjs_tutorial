'use client'
import React from 'react';
import MenuButton from './Button';


const MenuBar = () => {
  const handleClick = (label) => {
    alert(`${label} clicked!`);
  };

  const menuItems = [
    {
      label: 'Menu 1',
      submenuItems: [
        { label: 'Submenu 1-1', onClick: () => handleClick('Submenu 1-1') },
        { label: 'Submenu 1-2', onClick: () => handleClick('Submenu 1-2') },
      ],
    },
    {
      label: 'Menu 2',
      submenuItems: [
        { label: 'Submenu 2-1', onClick: () => handleClick('Submenu 2-1') },
        { label: 'Submenu 2-2', onClick: () => handleClick('Submenu 2-2') },
      ],
    },
    {
      label: 'Menu 3',
      submenuItems: [
        { label: 'Submenu 3-1', onClick: () => handleClick('Submenu 3-1') },
        { label: 'Submenu 3-2', onClick: () => handleClick('Submenu 3-2') },
      ],
    },
  ];

  return (
    <div className="flex space-x-4 bg-gray-800 p-4">
      {menuItems.map((menuItem, index) => (
        <MenuButton
          key={index}
          label={menuItem.label}
          submenuItems={menuItem.submenuItems}
        />
      ))}
    </div>
  );
};

export default MenuBar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'General', icon: '⚙️', path: '/settings/general' },
    { name: 'Users', icon: '👤', path: '/settings/users' },
    { name: 'Cost Centers', icon: '🏢', path: '/settings/cost-centers' },
    // Add other menu items here
  ];

  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4 font-bold text-lg">App Logo</div>
      <ul className="mt-4">
        {menuItems.map((item) => (
          <li key={item.name} className="mb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive ? 'bg-indigo-600' : 'hover:bg-gray-700'
                }`
              }
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;




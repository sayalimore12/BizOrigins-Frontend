import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`bg-white shadow-md p-4 w-64 fixed top-16 bottom-0 z-10 transition-transform duration-200 md:relative md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <ul className="space-y-4">
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Dashboard</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Profile</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

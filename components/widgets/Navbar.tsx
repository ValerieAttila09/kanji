'use client';

import * as React from 'react';

const NavbarWidget = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">My App</div>
      <div>
        <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Home</a>
        <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">About</a>
        <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Contact</a>
      </div>
    </nav>
  );
};

export default NavbarWidget;

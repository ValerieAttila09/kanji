import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-wider">
          SHATTUCK
        </div>
        <div className="flex items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

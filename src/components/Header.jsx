import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4">
      <div>
        <h1 className="text-xl font-semibold">Settings</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span>awan communications</span>
        <button className="h-8 w-8 rounded-full bg-gray-300 text-center">
          US
        </button>
      </div>
    </div>
  );
};

export default Header;

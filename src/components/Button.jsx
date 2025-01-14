import React from 'react';

function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

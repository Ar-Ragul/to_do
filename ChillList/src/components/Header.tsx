import React from 'react';

const Header: React.FC = () => {
  return (
     <header className="text-center mb-6">
      <h1 className="text-5xl font-extrabold text-blue-600 tracking-wide">ChillList</h1>
      <p className="text-gray-500 mt-2 text-xl">Stay chill while conquering your tasks!</p>
    </header>
  );
};

export default Header;

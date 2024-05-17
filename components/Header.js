import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-semibold">Mon Portfolio</h1>
        <nav>
          <ul className="flex">
            <li className="ml-4"><a href="#about" className="text-white hover:underline">À propos</a></li>
            <li className="ml-4"><a href="#projects" className="text-white hover:underline">Projets</a></li>
            <li className="ml-4"><a href="#contact" className="text-white hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

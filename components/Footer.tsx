'use client';

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6">
      <div className="mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm font-light tracking-wider text-gray-300">
            <span className="opacity-80">©</span> 
            <span className="mx-1 text-white font-medium">Washington Mwangi</span>
            <span className="text-gray-400"> | {currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
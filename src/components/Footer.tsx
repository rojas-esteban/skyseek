"use client";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-yellowone shadow-md z-50">
      <div className="flex justify-center">
        <nav>
          <ul className="flex space-x-6">
            
            <li className="ml-0 list-none font-bold">
              <Link
                href="#"
                className="text-white p-5 hover:text-gray-300  transition-all"
                onClick={()=>alert('estebanrojas.web@gmail.com')}
              >
                Email
              </Link>
            </li>
            <li className="ml-0 list-none font-bold">
              <Link
                href="https://github.com/rojas-esteban"
                target="_blank"
                className="text-white p-5 hover:text-gray-300 transition-all"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

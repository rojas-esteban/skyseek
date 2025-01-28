"use client"; // Marca el archivo como un Client Component
import Link from "next/link";
import { useState } from "react"; // Importa useState
import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  // Estado para gestionar el enlace activo
  const [activeLink, setActiveLink] = useState<string|null>("null");

  // Función para actualizar el enlace activo cuando se hace clic
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className="fixed   top-0 left-0 w-full bg-yellowone shadow-md z-50">
      <div className="flex flex-row justify-center">
        {/* Navbar */}
        <nav className="flex flex-row justify-center">
        <Link
                href="/"
                className="p-2 m-auto"
                onClick={() => handleLinkClick("/")} // Actualiza el enlace activo
              >
                <Image
                 src="/logoOrange.png"
                 alt="Descripción de la imagen"
                 width={30}
                  height={30}
                  className="rounded-lg shadow-xl  border-green-200 "
                  />
              </Link>
          <ul className="flex space-x-6">

          <li
              className={activeLink === "/trekking" ?  "ml-0 rounded-xl bg-selectedB list-none font-bold" : "ml-0 list-none font-bold"}
            >
              <Link
                href="/trekking"
                className="text-white p-3 hover:text-gray-300 transition-all"
                onClick={() => handleLinkClick("/trekking")} // Actualiza el enlace activo
              >
                Randonnée
              </Link>
            </li>
         
          
          
            
            <li className={activeLink === "codeAi" 
              ?  " ml- rounded-xl bg-selectedB list-none font-bold" 
              : "ml-0 list-none font-bold"}>
              <Link
                href="codeAi"
                className="text-white p-3 hover:text-gray-300 transition-all"
                onClick={() => handleLinkClick("codeAi")}
              >
                Code
              </Link>
            </li>

            <li className={activeLink === "/gptAi" 
              ?  "ml-0 rounded-xl bg-selectedB list-none font-bold" 
              : "ml-0 list-none font-bold"}>
              <Link
                href="/gptAi"
                className="text-white p-3 hover:text-gray-300 transition-all"
                onClick={() => handleLinkClick("/gptAi")}
              >
                GPT4
              </Link>
            </li>

            <li className={activeLink === "/languagesAi" 
              ?  "ml-0 rounded-xl bg-selectedB list-none font-bold" 
              : "ml-0 list-none font-bold"}>
              <Link
                href="/languagesAi"
                className="text-white p-3 hover:text-gray-300 transition-all"
                onClick={() => handleLinkClick("/languagesAi")}
              >
                Langues
              </Link>
            </li>

            
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

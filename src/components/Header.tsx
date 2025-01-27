"use client"; // Marca el archivo como un Client Component
import Link from "next/link";
import { useState } from "react"; // Importa useState
import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  // Estado para gestionar el enlace activo
  const [activeLink, setActiveLink] = useState<string>("#senderismo");

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
                href="#home"
                className="p-2 m-auto"
                onClick={() => handleLinkClick("#home")} // Actualiza el enlace activo
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
              className={activeLink === "#senderismo" ?  "ml-0 rounded-xl bg-selectedB list-none font-bold" : "ml-0 list-none font-bold"}
            >
              <Link
                href="#senderismo"
                className="text-white p-3 hover:text-gray-300 transition-all"
                onClick={() => handleLinkClick("#senderismo")} // Actualiza el enlace activo
              >
                Randonnée
              </Link>
            </li>
            <li className={activeLink === "#yoga" 
              ?  " ml- rounded-xl bg-selectedB list-none font-bold" 
              : "ml-0 list-none font-bold"}>
              <Link
                href="#yoga"
                className="text-white p-3 hover:text-gray-300 transition-all"
                onClick={() => handleLinkClick("#yoga")}
              >
                Code
              </Link>
            </li>
            <li className={activeLink === "#idiomas" 
              ?  "ml-0 rounded-xl bg-selectedB list-none font-bold" 
              : "ml-0 list-none font-bold"}>
              <Link
                href="#idiomas"
                className="text-white p-3 hover:text-gray-300 transition-all"
                onClick={() => handleLinkClick("#idiomas")}
              >
                Langues
              </Link>
            </li>
            <li className={activeLink === "#genio" 
              ?  "ml-0 rounded-xl bg-selectedB list-none font-bold" 
              : "ml-0 list-none font-bold"}>
              <Link
                href="#genio"
                className="text-white p-3 hover:text-gray-300 transition-all"
                onClick={() => handleLinkClick("#genio")}
              >
                GPT4
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

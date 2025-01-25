import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";



const Header: React.FC = () => {
    const router = useRouter();
    
  return (
    <header className="fixed top-0 left-0 w-full bg-yellowone shadow-md z-50">
      <div className="flex justify-between ">
        

        {/* Navbar */}
        <nav>
          <ul className="flex space-x-6">
          <li className={router.asPath === "#senderismo" ? "bg-blue-500" : ""}>
  <Link
    href="#senderismo"
    className="text-white p-5 hover:text-gray-300 transition-all"
  >
    Randonnée
  </Link>
</li>
            <li className = " font-bold list-none" >
              <Link
                href="#yoga"
                className="text-white p-5 hover:text-gray-300 transition-all"
              >
                Yoga
              </Link>
            </li>
            <li className = " font-bold list-none" >
              <Link
                href="#idiomas"
                className="text-white p-5 hover:text-gray-300 transition-all"
              >
                Langues
              </Link>
            </li>
            <li className = " font-bold list-none" >
              <Link
                href="#genio"
                className="text-white p-5 hover:text-gray-300 transition-all"
              >
                Génie
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;






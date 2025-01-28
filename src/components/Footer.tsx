"use client";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-yellowone shadow-md z-50">
      <div className="flex flex-col justify-center">

      <ul className="flex space-x-6 justify-center gap-1">

          
            
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

          <div className="flex  justify-center p-1 gap-4">
            
            <img src="/deepseek.png" alt="React" className="w-5 h-5 bg-deepTeal p-1 shadow-lg rounded-lg transform hover:scale-150 transition duration-300  "/>
            <img src="/react.svg" alt="React" className="w-5 h-5 bg-reactColor p-1 shadow-lg rounded-lg transform hover:scale-150 transition duration-300  "/>
            
            <img src="/nextdotjs.svg" alt="Next.js" className="w-5 h-5 bg-white p-1 shadow-lg rounded-lg transform hover:scale-150 transition duration-300 "/>
            <img src="/vercel.svg" alt="Vercel" className="w-5 h-5 bg-white p-1 shadow-lg rounded-lg transform hover:scale-150 transition duration-300 "/>
            <img src="/typescript.svg" alt="TypeScript" className="w-5 h-5 bg-typeScriptColor p-1 shadow-lg rounded-lg transform hover:scale-150 transition duration-300 "/>
          </div>
        
          
        
      </div>
    </footer>
  );
};

export default Footer;




  // <img src="/icons/react.svg" alt="React" class="w-5 h-5">
  // <img src="/icons/nextjs.svg" alt="Next.js" class="w-5 h-5">
  // <img src="/icons/vercel.svg" alt="Vercel" class="w-5 h-5">
  // <img src="/icons/typescript.svg" alt="TypeScript" class="w-5 h-5"></img>

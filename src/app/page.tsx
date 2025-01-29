import Link from "next/link";
import Image from "next/image";


export default function Home() {
  
  return (
    
    <>
     

        
      <div className="flex flex-col items-center mb-16 ">
      <Image
            src="/ssasasa.png"
            alt="titre: Choisis ton AI"
            width={350}
            height={350}
            className="rounded-lg  m-4 mt-12 shadow-xl  border-green-200  w-auto h-auto object-cover sm:max-w-md "
          />
            
        <ul className="grid grid-cols-1 sm:grid-cols-2  gap-4 list-none">
            

              <li
                className={""}
              >
                <Link
                  href="/trekking"
                  className="text-white  hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 flex  justify-center text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso max-sm:bg-calipso max-sm:gap- ">
                  Randonnée
                  </div>
                </Link>
              </li>
        
        
        
              <li className={""}>
                <Link
                  href="codeAi"
                  className="text-white  hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 flex  justify-center text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso max-sm:bg-calipso ">
                  Code
                  </div>
                </Link>
              </li>

              <li className={""}>
                <Link
                  href="/gptAi"
                  className="text-white  hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 flex  justify-center text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso max-sm:bg-calipso ">
                  GPT-4
                  </div>
                </Link>
              </li>

              <li className={""}>
                <Link
                  href="/languagesAi"
                  className="text-white  hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 flex  justify-center text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso max-sm:bg-calipso ">
                  Langues
                  </div>
                </Link>
              </li>

              <li
                className={""}
              >
                <Link
                  href="/coffee"
                  className="text-white  hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 flex text-center  justify-center text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso max-sm:bg-calipso ">
                  Coffee Shop Master
                  </div>
                </Link>
              </li>

              <li
                className={""}
              >
                <Link
                  href="/coingecko"
                  className="text-white  hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 flex text-center  justify-center text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso max-sm:bg-calipso ">
                  Cryptomonnaies
                  </div>
                </Link>
              </li>
              
              </ul>
      </div>


    </>
  );
}

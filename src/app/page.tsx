import Link from "next/link";


export default function Home() {
  
  return (
    
    <>
     

        
      <div className="flex flex-col items-center  ">
        <h1 className="font-bold text-2xl p-8">Choisis ton IA ! 🤖</h1>
        <ul className="flex flex-col sm:flex-row gap-4 list-none">
            <li className={""}>
                <Link
                  href="/gptAi"
                  className="text-white  hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 flex  justify-center text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso max-sm:bg-calipso ">
                  GPT4
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
                  href="/trekking"
                  className="text-white  hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 flex  justify-center text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso max-sm:bg-calipso max-sm:gap- ">
                  Randonnée
                  </div>
                </Link>
              </li>
              </ul>
      </div>


    </>
  );
}

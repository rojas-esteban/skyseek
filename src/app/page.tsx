import Link from "next/link";


export default function Home() {
  
  return (
    
    <>
     

        
      <div className="flex flex-col items-center  ">
        <h1 className="font-bold text-2xl">Choisis ton IA ! 🤖</h1>
        <ul className="flex gap-4 list-none space-x-4">
            <li className={""}>
                <Link
                  href="/gptAi"
                  className="text-white p-3 hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 font text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso">
                  GPT4
                  </div>
                </Link>
              </li>
        
        
        
              <li className={""}>
                <Link
                  href="codeAi"
                  className="text-white p-3 hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 font text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso">
                  Code
                  </div>
                </Link>
              </li>
              <li className={""}>
                <Link
                  href="/languagesAi"
                  className="text-white p-3 hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 font text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso">
                  Langues
                  </div>
                </Link>
              </li>
              <li
                className={""}
              >
                <Link
                  href="/trekking"
                  className="text-white p-3 hover:text-gray-300 transition-all"
        
                >
                  <div className="p-12 font text-lg font-bold bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:bg-calipso">
                  Randonnée
                  </div>
                </Link>
              </li>
              </ul>
      </div>


    </>
  );
}

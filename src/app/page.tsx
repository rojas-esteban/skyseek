import DeepSeekWidget from "@/components/VirtualAsistent";
import Image from "next/image";
import  Header  from "@/components/Header";


export default function Home() {
  return (
    <>
      <div className="grid bg-deepTeal grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)] ">
     
        <Header/>

        <main className="flex flex-col row-start-2 justify-center items-center h-full w-full">
        <h1 className="text-center mb-8 font-semibold text-2xl sm:text-2xl">Esteban, le spécialiste en randonnée 🌲🏕️🌳</h1>
          <Image
            src="/453633559_4227827887443827_2217402644947367570_n.jpg"
            alt="Descripción de la imagen"
            width={500}
            height={300}
            className="rounded-lg shadow-xl  border-green-200 mb-8 w-full h-auto object-cover sm:max-w-md"
          />
          <DeepSeekWidget />
        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
        <Image
              src="/south america-chile-patagonia-5.jpg"
              alt="Descripción de la imagen"
              width={200}
              height={200}
              className="rounded-lg shadow-xl mt-4  border-green-200 w-auto h-auto object-cover sm:max-w-md"
            />
        
        </footer>
      </div>
    </>
  );
}

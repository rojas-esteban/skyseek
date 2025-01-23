import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Efecto de la pelota girando */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"> </div>
      
      {/* Efecto del texto */}
      <div className="text-xl font-bold text-blue-500 animate-pulse">
      Esteban: Hmm... donne-moi une seconde...
      </div>
    </div>
  );
};

export default Loader;

import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-8 justify-center space-y-4">
      {/* Efecto de la pelota girando */}
      <div className="animate-ping rounded-full h-12 w-12 border-t-4 border-b-4 border-yellowone"> </div>
      
      {/* Efecto del texto */}
      <div className="text-xl font-bold text-yellowone animate-pulse">
        
      Esteban est en train d'écrire...
      </div>
    </div>
  );
};

export default Loader;

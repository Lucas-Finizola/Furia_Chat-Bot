import React from 'react';
import fundoFuria from '../assets/images/FuriaLogo.webp';

function SplashScreen() {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden">
      <img
        src={fundoFuria}
        alt="Tela inicial FURIA"
        className="object-contain max-h-full max-w-full"
      />
    </div>
  );
}

export default SplashScreen;

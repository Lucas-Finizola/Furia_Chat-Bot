import React, { useEffect, useState } from 'react';
import SplashScreen from './pages/SplashScreen';
import ChatPage from './pages/ChatPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="transition-opacity duration-1000">
      {showSplash ? <SplashScreen /> : <ChatPage />}
    </div>
  );
}

export default App;

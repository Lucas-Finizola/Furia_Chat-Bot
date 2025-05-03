import React, { useState, useEffect } from 'react';
import ChatWindow from '../components/ChatWindow';
import InputArea from '../components/InputArea';
import FuriaLogo from '../assets/images/FuriaLogo.png';
import { getBotResponse } from '../utils/getBotResponse';


function ChatPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        sender: 'bot',
        text: `👋 Olá! Eu sou o Bot da FURIA.\nDigite "Menu" ou aperte no botão de menu a cima para ver as opções disponíveis!`
      }
    ]);
  }, []);

  const handleSendMessage = (newMessage) => {
    setMessages((prev) => [...prev, { text: newMessage, sender: 'user' }]);
  
    setTimeout(() => {
      const response = getBotResponse(newMessage);
  
      // Se for string (resposta simples)
      if (typeof response === 'string') {
        setMessages((prev) => [...prev, { text: response, sender: 'bot' }]);
      }
  
      // Se for objeto com texto e imagem
      if (typeof response === 'object' && response.text) {
        setMessages((prev) => [
          ...prev,
          { text: response.text, image: response.image, sender: 'bot' }
        ]);
      }
    }, 500);
  };
  
  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-2xl flex flex-col relative">
        <header className="flex items-center justify-center gap-2 p-4 text-white font-bold text-lg">
          <img src={FuriaLogo} alt="Logo da FURIA" className="h-8 w-auto" />
          <span>Furia Chat</span>
        </header>

        {/* Bolhas de sugestão */}
        <div className="flex flex-wrap gap-2 px-4 pb-2">
        <button
         onClick={() => handleSendMessage('Menu')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm transition"
        >
         Menu
        </button>

        </div>

        <div className="flex-1 overflow-y-auto p-4 pb-28">
          <ChatWindow messages={messages} />
        </div>

        <InputArea onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatPage;

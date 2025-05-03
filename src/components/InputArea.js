import React, { useState } from 'react';

function InputArea({ onSendMessage }) {
  const [inputText, setInputText] = useState('');

  const send = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-black p-3 flex items-center gap-2 z-10">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && send()}
        className="flex-1 bg-gray-700 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        placeholder="Digite sua mensagem..."
      />
      <button
        onClick={send}
        className="bg-white text-black rounded-full py-2 px-4 font-bold focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
      >
        Enviar
      </button>
    </div>
  );
}

export default InputArea;

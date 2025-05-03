import React from 'react';

function MessageBubble({ message }) {
  return (
    <div
      className={`rounded-lg py-2 px-3 max-w-xs ${
        message.sender === 'user' ? 'bg-fuchsia-500 text-white self-end' : 'bg-gray-800 text-white self-start'
      } animate-fadeIn`}
      style={{ whiteSpace: 'pre-wrap' }}
    >
      {message.text}
      {message.image && (
        <img src={message.image} alt="Skin favorita" className="mt-2 max-w-full h-auto rounded-md" />
      )}
    </div>
  );
}

export default MessageBubble;
import React from 'react';
import MessageBubble from './MessageBubble';

function ChatWindow({ messages }) {
  return (
    <div className="space-y-2 flex flex-col"> {/* Adicionamos 'flex flex-col' */}
      {messages.map((msg, i) => (
        <MessageBubble key={i} message={msg} />
      ))}
    </div>
  );
}

export default ChatWindow;
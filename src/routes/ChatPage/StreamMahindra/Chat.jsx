// src/Chat.js
import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';

const Chat = ({ userProfile }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatBodyRef = useRef(null); // Referência para o corpo do chat

  // Função para adicionar nova mensagem
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const messageObject = {
        id: Date.now(),
        userImage: userProfile.image,
        userName: userProfile.name,
        date: new Date().toLocaleString(),
        text: newMessage,
      };

      setMessages([...messages, messageObject]);
      setNewMessage("");
    }
  };

  // Função para envio da mensagem ao pressionar "Enter"
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // Autoscroll ao adicionar nova mensagem
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      {/* Cabeçalho do chat */}
      <div className="chat-header">
        <h2>Live Chat</h2>
      </div>

      {/* Corpo do chat */}
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((message) => (
          <div key={message.id} className="chat-message">
            <img src={message.userImage} alt="User" className="chat-user-image" />
            <div className="chat-message-info">
              <div className="chat-message-header">
                <span className="chat-user-name">{message.userName}</span>
                <span className="chat-message-date">{message.date}</span>
              </div>
              <div className="chat-message-text">{message.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Barra de entrada de mensagens */}
      <div className="chat-footer">
        <input
          type="text"
          className="chat-input"
          placeholder="Escreva uma mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Envia mensagem ao pressionar Enter
        />
        <button className="chat-send-button" onClick={handleSendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;

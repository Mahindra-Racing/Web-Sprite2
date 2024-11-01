import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

const Chat = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatBodyRef = useRef(null);

  // Função para buscar os dados do usuário
  const fetchUserData = async () => {
    try {
      const response = await fetch("https://bd-web-ruddy.vercel.app/accounts");
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      const storedProfileData = JSON.parse(localStorage.getItem("profileData"));

      // Encontre o usuário logado
      const loggedInUser = data.find(
        (account) => account.name === storedProfileData.name
      );
      if (loggedInUser) {
        setUser({
          name: loggedInUser.name,
          profileImage: loggedInUser.profileImage,
        });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Chama a função de busca ao carregar o componente
  useEffect(() => {
    fetchUserData();
  }, []);

  // Função para enviar mensagens
  const handleSendMessage = () => {
    if (newMessage.trim() !== "" && user) {
      const messageObject = {
        id: Date.now(),
        userImage: user.profileImage,
        userName: user.name,
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Formatação para horário
        text: newMessage,
      };
  
      setMessages((prevMessages) => [...prevMessages, messageObject]);
      setNewMessage("");
    } else {
      console.error("Message is empty or user is not logged in.");
    }
  };
  

  // Função para tratar o evento de tecla pressionada
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // Rolar para o final do chat quando uma nova mensagem é enviada
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  if (!user) {
    return <p>Loading user data...</p>; // Mensagem de carregamento
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Live Chat</h2>
      </div>

      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((message) => (
          <div key={message.id} className="chat-message">
            <img
              src={message.userImage}
              alt="User"
              className="chat-user-image"
            />
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

      <div className="chat-footer">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="chat-send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;

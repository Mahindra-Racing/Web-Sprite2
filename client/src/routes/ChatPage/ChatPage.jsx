import React, { useRef, useState, useEffect } from "react"
import io from 'socket.io-client'
import "./ChatPage.css"

const ChatPage = () => {
  const usernameRef = useRef()
  const messageRef = useRef()
  const bottomRef = useRef()
  const [socket, setSocket] = useState(null)
  const [username, setUsername] = useState("")
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    if (socket) {
      socket.on('receive_message', data => {
        setMessageList((current) => [...current, data])
      })

      return () => socket.off('receive_message')
    }
  }, [socket])

  useEffect(() => {
    scrollDown()
  }, [messageList])

  const handleUsernameSubmit = async () => {
    const usernameValue = usernameRef.current.value.trim()
    if (!usernameValue) return

    // Conectar ao Socket.io
    const socketConnection = io('http://localhost:3001')
    socketConnection.emit('set_username', usernameValue)
    setSocket(socketConnection)
    setUsername(usernameValue) // Define o nome de usuário
  }

  const handleMessageSubmit = () => {
    const message = messageRef.current.value.trim()
    if (!message || !socket) return

    socket.emit('message', message)
    clearInput()
    focusInput()
  }

  const clearInput = () => {
    messageRef.current.value = ''
  }

  const focusInput = () => {
    messageRef.current.focus()
  }

  const getEnterKey = (e) => {
    if (e.key === 'Enter') handleMessageSubmit()
  }

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="chat-page">
      <div className="username-container">
        {!username && (
          <div>
            <h1>Digite seu nome de usuário</h1>
            <input
              type="text"
              ref={usernameRef}
              placeholder="Nome de usuário"
            />
            <button onClick={handleUsernameSubmit}>Entrar</button>
          </div>
        )}
        {username && <h2>Bem-vindo, {username}!</h2>}
      </div>

      <div className="chat-container">
        {username && (
          <>
            <h1 className="titulo-chat">Chat</h1>
            <div className="messages-container">
              {messageList.map((message, index) => (
                <div key={index} className="message">
                  <strong>{message.author}:</strong>
                  <span className="message-content">{message.text}</span>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="input-container">
              <input
                type="text"
                ref={messageRef}
                placeholder="Mensagem"
                onKeyDown={(e) => getEnterKey(e)}
              />
              <button onClick={handleMessageSubmit} className="send-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                  <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ChatPage

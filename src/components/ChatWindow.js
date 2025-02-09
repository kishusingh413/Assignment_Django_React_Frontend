import React, { useState } from "react";
import "../styles/ChatWindow.css"; // Style separately

const ChatWindow = ({ closeChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return; // Prevent sending empty messages
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulating a bot response
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Support will contact you soon!", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>Support Chat</h3>
        <button onClick={closeChat} className="close-btn">✖</button>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <p key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </p>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I am your Portfolio Assistant. Ask me about your holdings, profit, or details.", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:3002/chat", 
        { message: userMessage },
        { withCredentials: true }
      );
      
      setMessages(prev => [...prev, { text: response.data.response, isBot: true }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Sorry, I am having trouble connecting right now.", isBot: true }]);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h4>AI Portfolio Assistant</h4>
            <button className="close-btn" onClick={toggleChat}>&times;</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message \${msg.isBot ? 'bot-message' : 'user-message'}`}>
                <div className="message-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ask me something..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      
      {!isOpen && (
        <button className="chatbot-fab" onClick={toggleChat}>
          &#128172;
        </button>
      )}
    </div>
  );
};

export default Chatbot;

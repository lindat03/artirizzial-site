import React, { useState } from "react";
import './Chat.css';

function Chat() {
  const [themInputValue, setThemInputValue] = useState("");
  const [meInputValue, setMeInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleThemInputChange = (event) => {
    setThemInputValue(event.target.value);
  };

  const handleMeInputChange = (event) => {
    setMeInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('submit button pressed')
    event.preventDefault();
    if(themInputValue && meInputValue){
      console.log('both values found')
      setMessages([...messages, [themInputValue, 0], [meInputValue, 1]]);
    } else if(themInputValue){
      console.log('them input found')
      setMessages([...messages, [themInputValue, 0]]);
    } else if(meInputValue){
      console.log('me input found')
      setMessages([...messages, [meInputValue, 1]])
    }
    setThemInputValue("");
    setMeInputValue("");
  };

  return (
    <div className="chat">
      <div className="message-history">
        {messages.map((message, index) => {
          const userIdentifier = message[1];
          const messageContent = message[0];
          const messageStyle = userIdentifier === 0 ? 'them-message' : 'me-message';
          return (
            <div key={index} className={messageStyle}>
              {messageContent}
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          className="them-input"
          type="text"
          placeholder="Type your love interest's message here..."
          value={themInputValue}
          onChange={handleThemInputChange}
        />
        <input
          className="me-input"
          type="text"
          placeholder="Type your message here..."
          value={meInputValue}
          onChange={handleMeInputChange}
        />
        <button type="submit">Send</button>
      </form>
      {/* <form className="me-input-form">
        <input
          type="text"
          placeholder="Type your message here..."
          value={meInputValue}
          onChange={handleMeInputChange}
        />
        <button type="submit">Send</button>
      </form> */}
    </div>
  );
}

export default Chat;
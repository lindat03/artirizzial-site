import React, { useState, useEffect } from "react";
import './Chat.css';

function Chat({ callBack }) {
  const [themInputValue, setThemInputValue] = useState("");
  const [meInputValue, setMeInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect( () => {
    callBack(messages);
  }, [messages]);


  const handleThemInputChange = (event) => {
    setThemInputValue(event.target.value);
  };

  const handleMeInputChange = (event) => {
    setMeInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(themInputValue && meInputValue){
      setMessages([...messages, [themInputValue, 0], [meInputValue, 1]]);
    } else if(themInputValue){
      setMessages([...messages, [themInputValue, 0]]);
    } else if(meInputValue){
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
        <button className="import-photos-btn" type="button">
          {/* <img src="../../../images/attach-images.png" alt="Select Photos"></img> */}
          Import Photos
        </button>
          <div className="input-container-column">
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
        </div>
        <button type="submit" className="submit-btn">Send</button>
      </form>
    </div>
  );
}

export default Chat;
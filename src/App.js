import { React, useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Chat from "./components/Chat/Chat.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import "./App.css";

const App = () => {
  const [barHeight, setBarHeight] = useState(50);
  const [reccs, setReccs] = useState([]);

  const [requests, setRequests] = useState([]);
  const getMessages = (messages) => {
    let list = messages.map( (element) => {
      return (element[1]==0 ? "Person 1: " : "Person 2: ") + element[0];
    });
    setRequests(list);
  }

  useEffect( () => {
    let string = requests.join('\n');
    fetch('https://artirizzial-backend.herokuapp.com/post', {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: "hello",
    })
    .then(res => res.json())
    .then(res => console.log(res['content']))
  }, [requests]);
  
  return (
    <div className="App">
      <h1 className="header-title">artirizzial</h1>
      <div className="main-content">
        <Navigation bar_height={barHeight} />
        <Chat callBack={getMessages}/>
        <Feedback title="good responses" items={reccs} />
      </div>
    </div>
  );
}

export default App;
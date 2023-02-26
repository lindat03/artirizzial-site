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
      return (element[1]===0 ? "Person 1: " : "Person 2: ") + element[0];
    });
    setRequests(list);
  }

  useEffect( () => {
    //don't run if not enough data, less than 3 lines of dialouge or if coming from you
    let request_length = requests.length
    if (request_length < 3 || requests[request_length - 1].substring(0,8) == "Person 2"){
      return //exit function
    }
    
    // fetch('http://localhost:5000/bar', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "text/plain",
    //   },
    //   body: requests[request_length - 1][0], //get latest request
    // })
    // .then(response => response.json())
    // .then();

    const hash = (string) => {
        let sum = 0;
        for(let i = 0; i < string.length; i++){
            sum += string.charCodeAt(i);
        }
        return sum * 1278 % 97;
    }

    console.log(requests[request_length-1])
    setBarHeight(hash(requests[request_length-1]));

    let string = requests.join('\n');
    //'https://artirizzial-backend.herokuapp.com/post'
    fetch('http://127.0.0.1:5000/post', {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: string,
    })
    .then(response =>response.json())
    .then(data => setReccs(data['content'].split("\n").filter(n => n)));
  }, [requests]);
  
  return (
    <div className="App">
      <div className="header-div">
        <img className="logo-img" src="https://cdn.discordapp.com/attachments/1025635926069739561/1079361013243191376/Slice_3.png" alt="logo"></img>
        <h1 className="header-title">artirizzial</h1>
      </div>
      <div className="main-content">
        <Navigation bar_height={barHeight} />
        <Chat callBack={getMessages}/>
        <Feedback title="'rizz'ponses" items={reccs} />
      </div>
    </div>
  );
}

export default App;
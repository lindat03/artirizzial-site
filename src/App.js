import { React, useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Chat from "./components/Chat/Chat.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import "./App.css";

//This is a dummy list to populate the website, eventually this will be replaced with the actual feedback logic
const items = ['Item 1', 'Item 2', 'Item 3'];
//control bar height as percentage of total div
let bar_height = 100

const App = () => {
  useEffect( () => {
    //http://127.0.0.1:5000/post
    //https://artirizzial-backend.herokuapp.com/post
    
    fetch('http://127.0.0.1:5000/post', {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: "Person 1: Hey there, cutie! \nPerson 2: hi there, how's your day going?\nPerson 1: better now that i'm talking to u",
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }, []);
  
  return (
    <div className="App">
      <h1 className="header-title">artirizzial</h1>
      <div className="main-content">
        <Navigation bar_height={bar_height} />
        <Chat />
        <Feedback title="good responses" items={items} />
      </div>
    </div>
  );
}

export default App;
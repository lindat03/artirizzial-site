import { React, useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Chat from "./components/Chat/Chat.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import "./App.css";

//This is a dummy list to populate the website, eventually this will be replaced with the actual feedback logic
const items = ['Item 1', 'Item 2', 'Item 3'];
//control bar height as percentage of total div
let bar_height = 50;

const App = () => {
  useEffect( () => {
    fetch('https://artirizzial-backend.herokuapp.com/post', {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: "hello",
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }, []);
  
  return (
    <div className="App">
      <div className="main-content">
        <Navigation bar_height={bar_height} />
        <Chat />
        <Feedback title="Feedback" items={items} />
      </div>
    </div>
  );
}

export default App;
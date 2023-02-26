import React from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Chat from "./components/Chat/Chat.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import "./App.css";

//This is a dummy list to populate the website, eventually this will be replaced with the actual feedback logic
const items = ['Item 1', 'Item 2', 'Item 3'];
//control bar height as percentage of total div
let bar_height = 98


const App = () => {
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
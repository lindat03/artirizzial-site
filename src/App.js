import React from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Chat from "./components/Chat/Chat.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import "./App.css";

//This is a dummy list to populate the website, eventually this will be replaced with the actual feedback logic
const items = ['Item 1', 'Item 2', 'Item 3'];

const App = () => {
  return (
    <div className="App">
      <div className="main-content">
        <Navigation />
        <Chat />
        <Feedback title="Feedback" items={items} />
      </div>
    </div>
  );
}

export default App;
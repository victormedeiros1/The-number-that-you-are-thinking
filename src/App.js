import React, { useState } from "react";
import "./assets/css/global.css";
import StartGame from "./components/Screens/StartGame";
import InGame from "./components/Screens/InGame";
import GameOver from "./components/Screens/GameOver";

function App() {
  const [screen, setScreen] = useState("StartGame");

  return (
    <div className="App">
      {screen === "StartGame" ? <StartGame /> : ""}
      {screen === "InGame" ? <InGame /> : ""}
      {screen === "GameOver" ? <GameOver /> : ""}
    </div>
  );
}

export default App;

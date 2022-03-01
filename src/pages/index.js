import React from "react";
import StartGame from "../components/Screens/StartGame";
import InGame from "../components/Screens/InGame";
import GameOver from "../components/Screens/GameOver";
import { useScreen } from "../context/Screen";

function Window() {
  const { screen, setScreen } = useScreen();

  return (
    <div>
      {screen === "StartGame" ? <StartGame /> : ""}
      {screen === "InGame" ? <InGame /> : ""}
      {screen === "GameOver" ? <GameOver /> : ""}
    </div>
  );
}

export default Window;

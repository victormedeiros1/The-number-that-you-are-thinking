import React from "react";
import Button from "../../Button";
import { useScreen } from "../../../context/Screen";

function GameOver() {
  const { screen, setScreen } = useScreen();
  return (
    <div>
      <p>Game Over</p>
      <Button onClick={() => setScreen("StartGame")}>Play Again</Button>
    </div>
  );
}

export default GameOver;

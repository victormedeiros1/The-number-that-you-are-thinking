import React from "react";
import Button from "../../Button";
import { useScreen } from "../../../context/Screen";
import { useAttempts } from "../../../context/Attempts";

function GameOver() {
  const { setScreen } = useScreen();
  const { attempts } = useAttempts();
  return (
    <div>
      <p>Tentativas: {attempts}</p>
      <p>Game Over</p>
      <Button onClick={() => setScreen("StartGame")}>Play Again</Button>
    </div>
  );
}

export default GameOver;

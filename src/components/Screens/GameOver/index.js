import React from "react";
import Button from "../../Button";
import { useScreen } from "../../../context/Screen";
import { useAttempts } from "../../../context/Attempts";

import { GameOverContainer } from "./styles";
function GameOver() {
  const { setScreen } = useScreen();
  const { attempts } = useAttempts();
  return (
    <GameOverContainer>
      <p>Game Over</p>
      <p>Tentativas: {attempts}</p>
      <Button onClick={() => setScreen("StartGame")}>Play Again</Button>
    </GameOverContainer>
  );
}

export default GameOver;

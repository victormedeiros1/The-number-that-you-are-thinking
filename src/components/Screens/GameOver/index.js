import React from "react";
import Button from "../../Button";
import { useScreen } from "../../../context/Screen";
import { useAttempts } from "../../../context/Attempts";

import { GameOverContainer } from "./styles";
function GameOver() {
  const { setScreen } = useScreen();
  const { attempts, setAttempts } = useAttempts();

  const resetStates = () => {
    setScreen("StartGame");
    setAttempts(0);
  };

  return (
    <GameOverContainer>
      <p>Game Over</p>
      <p>The algorithm of search binary needed {attempts} attempts for find the number that you was thinking.</p>
      <Button onClick={resetStates}>Play again</Button>
    </GameOverContainer>
  );
}

export default GameOver;

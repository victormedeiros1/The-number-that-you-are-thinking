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
      <p>Fim de Jogo</p>
      <p>O algortimo deu {attempts} palpites para acertar</p>
      <Button onClick={resetStates}>Jogar Novamente</Button>
    </GameOverContainer>
  );
}

export default GameOver;

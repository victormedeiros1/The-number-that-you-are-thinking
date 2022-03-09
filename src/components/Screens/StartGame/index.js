import React from "react";
import { useScreen } from "../../../context/Screen";
import Button from "../../../components/Button";
import { StartGameContainer, Title, Rules } from "./styles";

function StartGame() {
  const { setScreen } = useScreen();

  return (
    <StartGameContainer>
      <Title>IMAGINE DE 0 A 500</Title>
      <Rules>
        <h2>Como jogar</h2>
        <p>
          Pense em um número de 0 a 500, a máquina começará a chutar valores e
          tudo que você deve fazer é dizer se o número que ela chutou é maior ou
          menor que o número que você está pensando, caso a máquina acerte você
          deve clicar em "Acertou".
        </p>
      </Rules>
      <Button onClick={() => setScreen("InGame")}>Jogar</Button>
    </StartGameContainer>
  );
}

export default StartGame;

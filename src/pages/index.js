import React from "react";
import { PainelStyles } from "./styles";
import { useScreen } from "../context/Screen";

import StartGame from "../components/Screens/StartGame";
import InGame from "../components/Screens/InGame";
import GameOver from "../components/Screens/GameOver";

function Painel() {
  const { screen } = useScreen();

  return (
    <PainelStyles>
      {screen === "StartGame" ? <StartGame /> : ""}
      {screen === "InGame" ? <InGame /> : ""}
      {screen === "GameOver" ? <GameOver /> : ""}
    </PainelStyles>
  );
}

export default Painel;

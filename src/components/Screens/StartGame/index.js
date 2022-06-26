import React from "react";
import { useScreen } from "../../../context/Screen";
import Button from "../../../components/Button";
import { StartGameContainer, Title, Rules } from "./styles";

function StartGame() {
  const { setScreen } = useScreen();

  return (
    <StartGameContainer>
      <Title>Think a number between 0 and 500</Title>
      <Rules>
        <h2>How to play</h2>
        <p>
          Think number between 0 and 500. The algorithm of search binary will show numbers and you must say if a number that you are thinking is greatest, smaller or equals the number showed.
        </p>
      </Rules>
      <Button onClick={() => setScreen("InGame")}>Play</Button>
    </StartGameContainer>
  );
}

export default StartGame;

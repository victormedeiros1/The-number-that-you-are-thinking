import React, { useState } from "react";
import Button from "../../Button";
import { InGameContainer } from "./styles";
import { useScreen } from "../../../context/Screen";
import { useAttempts } from "../../../context/Attempts";

function InGame() {
  const { setScreen } = useScreen();
  const { attempts, setAttempts } = useAttempts();

  const [machineNumber, setMachineNumber] = useState(250);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);

  const isSmaller = () => {
    setAttempts(attempts + 1);
    setMax(machineNumber);
    setMachineNumber(parseInt((machineNumber - min) / 2 + min));
  };

  const isLarger = () => {
    setAttempts(attempts + 1);
    setMin(machineNumber);
    setMachineNumber(parseInt((max - machineNumber) / 2 + machineNumber));
  };

  const isRight = () => {
    setScreen("GameOver");
  };

  return (
    <InGameContainer style={{ textAlign: "center" }}>
      <p>Think a number between 0 and 500.</p>
      <p>The number that you are thinking is <b>{machineNumber}</b> ?</p>
      <Button onClick={isSmaller}>Smaller</Button>
      <Button onClick={isRight}>Equal</Button>
      <Button onClick={isLarger}>Greatest</Button>
    </InGameContainer>
  );
}

export default InGame;

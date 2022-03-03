import React, { useState } from "react";
import Button from "../../Button";

import { useScreen } from "../../../context/Screen";
function InGame() {
  const { screen, setScreen } = useScreen();

  const [attempts, setAttempts] = useState(1);
  const [machineNumber, setMachineNumber] = useState(150);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

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
    <div style={{ textAlign: "center" }}>
      <div>
        <p>Tentativas: {attempts}</p>
        <p>Pense num número entre 0 e 300</p>
      </div>
      <div>O seu número é {machineNumber} ?</div>
      <Button onClick={isSmaller}>Menor</Button>
      <Button onClick={isRight}>Acertou</Button>
      <Button onClick={isLarger}>Maior</Button>
    </div>
  );
}

export default InGame;

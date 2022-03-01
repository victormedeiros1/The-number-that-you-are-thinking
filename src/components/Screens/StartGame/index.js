import React from "react";
import { useScreen } from "../../../context/Screen";
import Button from "../../../components/Button";

function StartGame() {
  const { setScreen } = useScreen();

  return <Button onClick={() => setScreen("InGame")}>Start</Button>;
}

export default StartGame;

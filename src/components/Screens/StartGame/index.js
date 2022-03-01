import React, { useState } from "react";
import { useScreen } from "../../../context/Screen";

function StartGame() {
  const { setScreen } = useScreen();

  return (
    <div>
      <button onClick={() => setScreen("InGame")}>Start</button>
    </div>
  );
}

export default StartGame;

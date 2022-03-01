import React from "react";

import "./assets/css/global.css";
import ScreenProvider from "./context/Screen";
import Window from "./pages/";
import { useScreen } from "./context/Screen";

function App() {
  return (
    <ScreenProvider>
      <Window />
    </ScreenProvider>
  );
}

export default App;

import React from "react";
import "./assets/css/global.css";
import ScreenProvider from "./context/Screen";

import Painel from "./pages/";
import Container from "./components/Container";

function App() {
  return (
    <ScreenProvider>
      <Container>
        <Painel />
      </Container>
    </ScreenProvider>
  );
}

export default App;

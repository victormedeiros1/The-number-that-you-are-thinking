import React from "react";
import "./assets/css/global.css";
import Painel from "./pages/";
import Container from "./components/Container";
import Provider from "./context/";

function App() {
  return (
    <Provider>
      <Container>
        <Painel />
      </Container>
    </Provider>
  );
}

export default App;

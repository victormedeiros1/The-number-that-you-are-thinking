import React, { createContext, useContext, useState } from "react";

const ScreenContext = createContext();

export default function ScreenProvider({ children }) {
  const [screen, setScreen] = useState("StartGame");

  return (
    <ScreenContext.Provider
      value={{
        screen,
        setScreen,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
}

export function useScreen() {
  const context = useContext(ScreenContext);
  const { screen, setScreen } = context;
  return { screen, setScreen };
}

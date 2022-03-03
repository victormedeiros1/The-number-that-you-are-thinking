import React from "react";
import ScreenProvider from "../context/Screen";
import ScreenAttempts from "../context/Attempts";

export default function Provider({ children }) {
  return (
    <ScreenProvider>
      <ScreenAttempts>{children}</ScreenAttempts>
    </ScreenProvider>
  );
}

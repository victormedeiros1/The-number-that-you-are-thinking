import React, { createContext, useContext, useState } from "react";

const AttemptsContext = createContext();

export default function AttemptsProvider({ children }) {
  const [attempts, setAttempts] = useState(1);

  return (
    <AttemptsContext.Provider value={{ attempts, setAttempts }}>
      {children}
    </AttemptsContext.Provider>
  );
}

export function useAttempts() {
  const context = useContext(AttemptsContext);
  const { attempts, setAttempts } = context;
  return { attempts, setAttempts };
}

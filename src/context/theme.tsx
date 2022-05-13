/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { createContext, useState, useContext, ReactNode } from "react";
import themes from "../style/themes";

interface ContextState {
  theme: {
    accent: string;
    primary: string;
    secondary: string;
    input: string;
    textPrimary: string;
    textSecondary: string;
    textTitle: string;
  };
  setTheme: any;
}
const ContextTheme = createContext<ContextState>({} as ContextState);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(themes.firstTheme);
  return (
    <ContextTheme.Provider value={{ theme, setTheme }}>
      {children}
    </ContextTheme.Provider>
  );
}

export function useTheme() {
  const context = useContext(ContextTheme);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
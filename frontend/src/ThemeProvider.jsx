import React from "react";
import { useSelector } from "react-redux";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const workspace = useSelector(state => state.auth.authData?.workspace);
  let currentTheme;
  if (workspace?.selectedTheme === "light") {
    currentTheme = workspace?.lightColorScheme;
  } else if (workspace?.selectedTheme === "dark") {
    currentTheme = workspace?.darkColorScheme;
  } else {
    currentTheme = workspace?.lightColorScheme;
  }
  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};


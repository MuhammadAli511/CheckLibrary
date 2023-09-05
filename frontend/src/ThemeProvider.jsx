import React from "react";
import { useSelector } from "react-redux";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const employee = useSelector(state => state.auth.authData?.employee);
  var currentTheme;
  if (employee?.selectedTheme === "light") {
    currentTheme = employee?.lightColorScheme;
  } else if (employee?.selectedTheme === "dark") {
    currentTheme = employee?.darkColorScheme;
  } else {
    currentTheme = employee?.lightColorScheme;
  }
  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};


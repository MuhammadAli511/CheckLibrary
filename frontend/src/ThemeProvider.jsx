import React from "react";
import { useSelector } from "react-redux";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const user = useSelector(state => state.auth.authData?.user);
  var currentTheme;
  if (user?.selectedTheme === "light") {
    currentTheme = user?.lightColorScheme;
  } else if (user?.selectedTheme === "dark") {
    currentTheme = user?.darkColorScheme;
  } else {
    currentTheme = user?.lightColorScheme;
  }
  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};


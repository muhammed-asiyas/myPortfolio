import React from "react";

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  isActiveNav: '',
  onClickNav: () => {},
})

export default ThemeContext;

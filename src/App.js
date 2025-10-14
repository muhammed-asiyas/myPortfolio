import { Component } from "react";
import Home from "./components/Home";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

class App extends Component {
  state = {
    isDark: false,
  };

  onChangeTheme = () => {
    this.setState((prevState) => ({
      isDark: !prevState.isDark,
    }));
  };
  render() {
    const { isDark } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          toggleTheme: this.onChangeTheme,
        }}
      >
        <Home />
      </ThemeContext.Provider>
    );
  }
}

export default App;

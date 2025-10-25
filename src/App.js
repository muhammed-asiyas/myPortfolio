import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MoreProjects from "./components/MoreProjects";
import MoreCertificates from "./components/MoreCertificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={MoreProjects} />
          <Route exact path="/certificates" component={MoreCertificates} />
          <Route exact path="/educations" component={Education} />
          <Route exact path="/contacts" component={Contact} />
        </Switch>
      </ThemeContext.Provider>
    );
  }
}

export default App;

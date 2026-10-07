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
    isDark: true, // Default to sleek modern dark theme
    isActiveNav: '',
  };

  componentDidMount() {
    this.updateDocumentTheme(this.state.isDark);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isDark !== this.state.isDark) {
      this.updateDocumentTheme(this.state.isDark);
    }
  }

  updateDocumentTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  onChangeTheme = () => {
    this.setState((prevState) => ({
      isDark: !prevState.isDark,
    }));
  };

  onChangeNavId = (id) => {
    this.setState({
      isActiveNav: id,
    });
  };

  render() {
    const { isDark, isActiveNav } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          toggleTheme: this.onChangeTheme,
          isActiveNav,
          onClickNav: this.onChangeNavId,
        }}
      >
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-[#0a0f1d] text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={MoreProjects} />
            <Route exact path="/certificates" component={MoreCertificates} />
            <Route exact path="/educations" component={Education} />
            <Route exact path="/contacts" component={Contact} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;

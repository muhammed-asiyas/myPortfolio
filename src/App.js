import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MoreProjects from "./components/MoreProjects";
import MoreCertificates from "./components/MoreCertificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import WaterDropsBackground from "./components/WaterDropsBackground";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

class App extends Component {
  state = {
    isDark: true, // Default to Kopiko dark roast theme
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
      document.body.style.backgroundColor = '#0f0806';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fbf7f0';
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
        <div
          className={`min-h-screen w-full relative overflow-x-hidden transition-colors duration-500 font-sans ${
            isDark
              ? 'dark bg-[#0f0806] text-[#fffaf5] selection:bg-amber-600/40 selection:text-amber-100'
              : 'bg-[#fbf7f0] text-[#23120b] selection:bg-amber-500/30 selection:text-amber-950'
          }`}
        >
          {/* Ambient interactive water droplet canvas */}
          <WaterDropsBackground />

          <div className="relative z-20 flex flex-col min-h-screen">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={MoreProjects} />
              <Route exact path="/certificates" component={MoreCertificates} />
              <Route exact path="/educations" component={Education} />
              <Route exact path="/contacts" component={Contact} />
            </Switch>
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;

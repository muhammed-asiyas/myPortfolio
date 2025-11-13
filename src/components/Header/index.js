import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import NavItem from "./NavItem";
import ThemeContext from "../../context/ThemeContext";
import { ToggelButton } from "./StyledComponents/styledComponents";

const navItemList = [
  {
    id: 1,
    item: "Home",
    link: "/",
  },
  {
    id: 2,
    item: "Educations",
    link: "/educations",
  },
  {
    id: 3,
    item: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    item: "Certificates",
    link: "/certificates",
  },
  {
    id: 5,
    item: "Contact",
    link: "/contacts",
  },
];

class Header extends Component {
  state = {
    isClickMenu: false,
  };

  onClickMenuBar = () => {
    this.setState((prevState) => ({
      isClickMenu: !prevState.isClickMenu,
    }));
  };


  renderNavBarInSmallDevice = () => {
    const { isClickMenu} = this.state;
    return isClickMenu ? (
      <ThemeContext.Consumer>
        {(value) => {
          const { isDark, toggleTheme } = value;
          const navBarSmBackground = isDark
            ? "dark-navbar-container-menu-sm"
            : "color-navbar-container-menu-sm";
          const onChangeTheme = () => {
            toggleTheme();
          };
          const themeIcon = isDark
            ? "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760448123/sun_wkuard.png"
            : "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760448249/sleep-mode_djldqi.png";
          const ButtonColor = isDark ? "dark-toggle" : "color-toggle";
          return (
            <nav className={`navbar-container-menu-sm ${navBarSmBackground}`}>
              <div className="nav-bar-button-close">
                <button
                  type="button"
                  className="nav-button-hamburger"
                  onClick={this.onClickMenuBar}
                >
                  <img
                    className="nav-hamburger-image"
                    src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759769783/close_d8qtko.png"
                    alt="nav hamburger"
                  />
                </button>
              </div>
              <button
                type="button"
                className={`toggle-theme-button-sm ${ButtonColor}`}
                onClick={onChangeTheme}
              >
                <img className="theme-icon" src={themeIcon} alt="themeicon" />
              </button>
              {navItemList.map((eachItem) => (
                <NavItem
                  key={eachItem.id}
                  navItem={eachItem}
                />
              ))}
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    ) : (
      <ThemeContext.Consumer>
        {(value) => {
          const { isDark } = value;
          const navBarSmBackground = isDark
            ? "dark-navbar-container-sm"
            : "color-navbar-container-sm";
          const navHeadSmColor = isDark
            ? "light-nav-head-sm"
            : "color-nav-head-sm";
          return (
            <nav className={`navbar-container-sm ${navBarSmBackground}`}>
              <Link to="/">
                <h1 className={`nav-head-lg ${navHeadSmColor}`}>Asiyas</h1>
              </Link>
              <button
                type="button"
                className="nav-button-hamburger"
                onClick={this.onClickMenuBar}
              >
                <img
                  className="nav-hamburger-image"
                  src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759769410/more_dmhynq.png"
                  alt="nav hamburger"
                />
              </button>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { isDark, toggleTheme } = value;
          const onChangeTheme = () => {
            toggleTheme();
          };
          const themeIcon = isDark
            ? "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760448123/sun_wkuard.png"
            : "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760448249/sleep-mode_djldqi.png";
          const headerBackground = isDark
            ? "dark-header-container"
            : "color-header-container";
          const navHeadLgColor = isDark
            ? "light-nav-head-lg"
            : "color-nav-head-lg";
          const navBarContainerBackground = isDark
            ? "nav-dark-container-lg"
            : "nav-color-container-lg";
          return (
            <>
              <div className={`header-container ${headerBackground}`}>
                <Link to="/">
                  <h1 className={`nav-head-lg ${navHeadLgColor}`}>Asiyas</h1>
                </Link>

                <nav
                  className={`navbar-container-lg ${navBarContainerBackground}`}
                >
                  <ToggelButton
                    isDark={isDark}
                    type="button"
                    onClick={onChangeTheme}
                  >
                    <img className="theme-icon" src={themeIcon} alt="theme icon" />
                  </ToggelButton>
                  {navItemList.map((eachItem) => (
                    <NavItem
                      key={eachItem.id}
                      navItem={eachItem}
                    />
                  ))}
                </nav>
              </div>
              {this.renderNavBarInSmallDevice()}
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;

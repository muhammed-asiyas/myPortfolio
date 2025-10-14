import { Component } from "react";
import "./index.css";
import NavItem from "./NavItem";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import ThemeContext from "../../context/ThemeContext";

const navItemList = [
  {
    id: 1,
    item: "Home",
    link: "/#home",
  },
  {
    id: 2,
    item: "Skills",
    link: "/#skills",
  },
  {
    id: 3,
    item: "Projects",
    link: "/#projects",
  },
  {
    id: 4,
    item: "Contact",
    link: "/#contacts",
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
    const { isClickMenu } = this.state;
    return isClickMenu ? (
      <ThemeContext.Consumer>
        {(value) => {
          const { isDark, toggleTheme } = value;
          const navBarSmBackground = isDark ? 'dark-navbar-container-menu-sm' : 'color-navbar-container-menu-sm'
          const onChangeTheme = () => {
            toggleTheme();
          };
          const themeIcon = isDark ? <BsBrightnessHigh className="BsBrightnessHigh" /> : <IoMoon className="IoMoon" />;
          const ButtonColor = isDark ? 'dark-toggle' : 'color-toggle'
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
                  />
                </button>
              </div>
              <button
                    type="button"
                    className={`toggle-theme-button-sm ${ButtonColor}`}
                    onClick={onChangeTheme}
                  >
                    {themeIcon}
                  </button>
              {navItemList.map((eachItem) => (
                <NavItem key={eachItem.id} navItem={eachItem} />
              ))}
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    ) : (
      <ThemeContext.Consumer>
        {(value) => {
          const { isDark } = value;
          const navBarSmBackground = isDark ? 'dark-navbar-container-sm' : 'color-navbar-container-sm'
          const navHeadSmColor = isDark ? 'light-nav-head-sm' : 'color-nav-head-sm'
          return (
            <nav className={`navbar-container-sm ${navBarSmBackground}`}>
              <a href="#home">
                <h1 className={`nav-head-lg ${navHeadSmColor}`}>Asiyas</h1>
              </a>
              <button
                type="button"
                className="nav-button-hamburger"
                onClick={this.onClickMenuBar}
              >
                <img
                  className="nav-hamburger-image"
                  src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759769410/more_dmhynq.png"
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
          const themeIcon = isDark ? <BsBrightnessHigh className="BsBrightnessHigh" /> : <IoMoon className="IoMoon" />;
          const headerBackground = isDark
            ? "dark-header-container"
            : "color-header-container";
          const navHeadLgColor = isDark
            ? "light-nav-head-lg"
            : "color-nav-head-lg";
          const ButtonColor = isDark ? 'dark-toggle' : 'color-toggle'
          return (
            <>
              <div className={`header-container ${headerBackground}`}>
                <a href="#home">
                  <h1 className={`nav-head-lg ${navHeadLgColor}`}>Asiyas</h1>
                </a>

                <nav className="navbar-container-lg">
                  <button
                    type="button"
                    className={`toggle-theme-button-lg ${ButtonColor}`}
                    onClick={onChangeTheme}
                  >
                    {themeIcon}
                  </button>
                  {navItemList.map((eachItem) => (
                    <NavItem key={eachItem.id} navItem={eachItem} />
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

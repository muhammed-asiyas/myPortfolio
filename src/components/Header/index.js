import { Component } from "react";
import { MdClose } from "react-icons/md"
import "./index.css";
import NavItem from "./NavItem";

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
      <nav className="navbar-container-menu-sm">
        <div className="nav-bar-button-close">
          <button
            type="button"
            className="nav-button-hamburger"
            onClick={this.onClickMenuBar}
          >
            <img className="nav-hamburger-image" src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759769783/close_d8qtko.png" />
          </button>
        </div>
        {navItemList.map((eachItem) => (
          <NavItem key={eachItem.id} navItem={eachItem} />
        ))}
      </nav>
    ) : (
      <nav className="navbar-container-sm">
        <button
          type="button"
          className="nav-button-hamburger"
          onClick={this.onClickMenuBar}
        >
          <img className="nav-hamburger-image" src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759769410/more_dmhynq.png" />
        </button>
      </nav>
    );
  };

  render() {
    return (
      <>
        <div className="header-container">
          <nav className="navbar-container-lg">
            {navItemList.map((eachItem) => (
              <NavItem key={eachItem.id} navItem={eachItem} />
            ))}
          </nav>
        </div>
        {this.renderNavBarInSmallDevice()}
      </>
    );
  }
}

export default Header;

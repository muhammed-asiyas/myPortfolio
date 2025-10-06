import { Component } from "react";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { HamburgerIconButton } from "./styledComponents";
import NavItem from "./NavItem";

const navItemList = [
  {
    id: 1, item: 'Home', link: '/#home',
  },
  {
    id: 2, item: 'Skills', link: '/#skills'
  },
  {
    id: 3, item: 'Projects', link: '/#projects',
  },
  {
    id: 4, item: 'Contact', link: '/#contacts'
  }
]

class Header extends Component {
  state = {
    isClickMenu: false,
  };

  onClickMenuBar = () => {
    this.setState((prevState) => ({
      isClickMenu: !prevState.isClickMenu,
    }));
  };

  render() {
    const { isClickMenu} = this.state;
    return (
      <div className="header-container">
        <nav className="navbar-container-lg">
          {navItemList.map(eachItem => (
            <NavItem key={eachItem.id} navItem={eachItem} />
          ))}
        </nav>
        <nav className="navbar-container-sm">
          <HamburgerIconButton type="button" isClickMenu>
            <GiHamburgerMenu
              className="hamburger-menu"
              onClick={this.onClickMenuBar}
            />
          </HamburgerIconButton>
        </nav>
      </div>
    );
  }
}

export default Header;

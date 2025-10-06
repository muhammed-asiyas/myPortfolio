import { Component } from "react";
import "./index.css";
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
      </div>
    );
  }
}

export default Header;

import { Link } from "react-router-dom";
import "./index.css";
import ThemeContext from "../../../context/ThemeContext";

const NavItem = (props) => {
  const { navItem } = props;
  const { item, link } = navItem;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const navItemSmColor = isDark ? 'light-nav-item-sm' : 'color-nav-item-sm'
        const navItemLg = isDark ? 'dark-nav-item-lg' : 'color-nav-item-lg'
        return (
          <>
            <li className="nav-item-lg-item">
              <Link to={link} className={`color-nav-item-lg link-item ${navItemLg}`}>
                {item}
              </Link>
            </li>
            <li className="nav-item-sm-item">
              <Link to={link} className={`link-item ${navItemSmColor}`}>
                {item}
              </Link>
            </li>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default NavItem;

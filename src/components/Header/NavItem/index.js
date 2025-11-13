import { Link } from "react-router-dom";
import "./index.css";
import ThemeContext from "../../../context/ThemeContext";

const NavItem = (props) => {
  const { navItem } = props;
  const { id, item, link } = navItem;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark, isActiveNav, onClickNav } = value;
        const onClickNavItem = () => {
          onClickNav(id);
        };
        const isActive = isActiveNav === id
        const navItemLg = isDark ? "dark-nav-item-lg" : "color-nav-item-lg";
        const IsActiveButtonColor = isActive
          ? "active-lg-nav-button-color"
          : "";
        const IsActiveButtonColorsm = isActive
          ? "active-lg-nav-button-color"
          : "link-item-sm-color";
        const isActiveButtonDark = isActive ? "active-lg-nav-button-dark" : "";
        const isActiveButtonDarkSm = isActive
          ? "active-sm-nav-button-dark"
          : "link-item-sm-dark";
        const ActiveNav = isDark ? isActiveButtonDark : IsActiveButtonColor;
        const ActiveNavSm = isDark
          ? isActiveButtonDarkSm
          : IsActiveButtonColorsm;
        return (
          <>
            <li className="nav-item-lg-item">
              <Link
                to={link}
                className={`color-nav-item-lg link-item ${navItemLg} ${ActiveNav}`}
                onClick={onClickNavItem}
              >
                {item}
              </Link>
            </li>
            <li className="nav-item-sm-item">
              <Link
                to={link}
                className={`${ActiveNavSm}`}
                onClick={onClickNavItem}
              >
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

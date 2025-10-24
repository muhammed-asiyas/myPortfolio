import { Link } from "react-router-dom";
import "./index.css";
import ThemeContext from "../../../context/ThemeContext";

const NavItem = (props) => {
  const { navItem , onClickActiveId, onClickActiveIdsm, isActive, isActivesm } = props;
  const {id, item, link } = navItem;
  const onChangeActiveId = () => {
    onClickActiveId(id)
  }

  const onChangeActiveIdsm = () => {
    onClickActiveIdsm(id)
  }
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const navItemSmColor = isDark ? 'light-nav-item-sm' : 'color-nav-item-sm'
        const navItemLg = isDark ? 'dark-nav-item-lg' : 'color-nav-item-lg'
        const IsActiveButtonColor = isActive ? 'active-lg-nav-button-color' : ""
        const IsActiveButtonColorsm = isActivesm ? 'active-lg-nav-button-color' : "link-item-sm-color"
        const isActiveButtonDark = isActive ? 'active-lg-nav-button-dark' : ""
        const isActiveButtonDarkSm = isActivesm ? 'active-sm-nav-button-dark' : "link-item-sm-dark"
        const ActiveNav = isDark ? isActiveButtonDark : IsActiveButtonColor
        const ActiveNavSm = isDark ? isActiveButtonDarkSm : IsActiveButtonColorsm
        return (
          <>
            <li className="nav-item-lg-item" onClick={onChangeActiveId}>
              <Link to={link} className={`color-nav-item-lg link-item ${navItemLg} ${ActiveNav}`}>
                {item}
              </Link>
            </li>
            <li className="nav-item-sm-item" onClick={onChangeActiveIdsm}>
              <Link to={link} className={`${ActiveNavSm}`}>
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

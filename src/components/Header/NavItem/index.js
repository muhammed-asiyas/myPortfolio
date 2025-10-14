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
        return (
          <>
            <li className="nav-item-lg-item">
              <a className="nav-item-lg link-item" href={link}>
                {item}
              </a>
            </li>
            <li className="nav-item-sm-item">
              <a className={`link-item ${navItemSmColor}`} href={link}>
                {item}
              </a>
            </li>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default NavItem;

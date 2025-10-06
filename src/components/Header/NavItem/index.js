import "./index.css";

const NavItem = (props) => {
  const { navItem } = props;
  const { item, link } = navItem;
  return (
    <>
      <li className="nav-item-lg">
        <a className="nav-item link-item" href={link}>
          {item}
        </a>
      </li>
      <li className="nav-item-sm">
        <a className="nav-item link-item" href={link}>
          {item}
        </a>
      </li>
    </>
  );
};

export default NavItem;

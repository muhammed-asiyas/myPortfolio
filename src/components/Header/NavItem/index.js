import "./index.css";

const NavItem = (props) => {
  const { navItem } = props;
  const { item, link } = navItem;
  return (
    <>
      <li className="nav-item-lg-item">
        <a className="nav-item-lg link-item" href={link}>
          {item}
        </a>
      </li>
      <li className="nav-item-sm-item">
        <a className="nav-item-sm link-item" href={link}>
          {item}
        </a>
      </li>
    </>
  );
};

export default NavItem;

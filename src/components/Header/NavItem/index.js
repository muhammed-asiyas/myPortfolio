import "./index.css";

const NavItem = props => {
  const { navItem} = props
  const {id, item, link } = navItem
  return (
    <li>
      <a className= 'nav-item link-item' href={link} >{item}</a>
    </li>
  )
}

export default NavItem;

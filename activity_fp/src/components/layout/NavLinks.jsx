import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/products">Productos</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
    </ul>
  )
}

export default NavLinks;
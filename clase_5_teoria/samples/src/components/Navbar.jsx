import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/products">Productos</NavLink>
        <NavLink to="/cart">Carrito</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavLinks = () => {
  return (
    <ul className={styles.navLinks}>
      <li className={styles.navItem}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Inicio
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="/products"
          className={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Productos
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Contacto
        </NavLink>
      </li>
    </ul>
  )
}

export default NavLinks;

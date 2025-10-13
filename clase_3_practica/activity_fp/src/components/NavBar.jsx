import CartWidget from "./CartWidget";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <NavLinks />
      <CartWidget />
    </nav>
  )
}

export default NavBar;
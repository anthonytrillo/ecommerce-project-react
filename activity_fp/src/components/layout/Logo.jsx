import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const Logo = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <h1 className={styles.logo}>Mi Tienda</h1>
    </Link>
  )
}

export default Logo;

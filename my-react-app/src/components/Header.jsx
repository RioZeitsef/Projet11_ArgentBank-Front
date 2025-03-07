import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import argentBankLogo from "../assets/argentBankLogo.png";

function Header() {
  return (
    <nav className={styles["main-nav"]}>
      <Link to="/" className={styles["main-nav-logo"]}>
        <img
          className={styles["main-nav-logo-image"]}
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        <Link to="/signin" className={styles["main-nav-item"]}>
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Header;

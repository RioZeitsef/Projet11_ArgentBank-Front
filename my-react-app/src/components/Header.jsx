import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import argentBankLogo from "../assets/argentBankLogo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import UserNavbar from "./UserNavBar";

function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth);

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
        {isAuthenticated ? (
          <UserNavbar />
        ) : (
          <Link to="/signin" className={styles["main-nav-item"]}>
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;

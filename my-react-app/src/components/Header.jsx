import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import argentBankLogo from "../assets/argentBankLogo.png";

function Header() {
  return (
    <nav className={styles.mainnav}>
      <Link to="/" className={styles.mainnavlogo}>
        <img
          className={styles.mainnavlogoimage}
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        <Link to="/Survey" className={styles.mainnavitem}>
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Header;

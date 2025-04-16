import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slice/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles["user-menu"]}>
      <Link to="/user" className={styles["main-nav-item"]}>
        <FontAwesomeIcon icon={faCircleUser} />
        {user?.userName}
      </Link>
      <Link to="/"
        onClick={handleLogout}
        className={`${styles["main-nav-item"]} ${styles["logout-button"]}`}
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
        Sign Out
      </Link>
    </div>
  );
};

export default UserMenu;
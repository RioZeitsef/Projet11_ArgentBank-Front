import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Styles from "../css/Layout.module.css";

const Layout = () => {
    const location = useLocation();

    let mainClassName; 
    if (location.pathname === "/signin" || location.pathname === "/user") {
        mainClassName = "signin-background";
    } else {
        mainClassName = "home-background";    
    }
  return (
    <div>
      <Header />
        <main className={Styles[mainClassName]}>
          <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default Layout;

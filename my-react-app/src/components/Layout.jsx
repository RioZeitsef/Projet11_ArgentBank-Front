import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Styles from "../css/Layout.module.css";

const Layout = () => {
    const location = useLocation();

    const mainClassName = location.pathname === "/signin" ? "signin-background" : "home-background";
  return (
    <body>
      <Header />
        <main className={Styles[mainClassName]}>
          <Outlet />
        </main>
      <Footer />
    </body>
  );
};

export default Layout;

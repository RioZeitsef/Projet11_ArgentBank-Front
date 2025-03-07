import React from "react";
import Styles from "../css/Pages.module.css";

const Signin = () => {
  return (
      <>
        <div className={Styles["bg-dark"]}>
          <section className={Styles["sign-in-content"]}>
            <i class="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
              <div className={Styles["input-wrapper"]}>
                <label for="username">Username</label
                ><input type="text" id="username" />
              </div>
              <div className={Styles["input-wrapper"]}>
                <label for="password">Password</label
                ><input type="password" id="password" />
              </div>
              <div className={Styles["input-remember"]}>
                <input type="checkbox" id="remember-me" /><label for="remember-me"
                  >Remember me</label
                >
              </div>
              {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
              <a href="./user.html" className={Styles["sign-in-button"]}>Sign In</a>
              {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
              {/* <button className={Styles["sign-in-button"]}>Sign In</button> */}
            </form>
          </section>
        </div>
      </>
  );
}

export default Signin;

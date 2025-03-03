import React from "react";
import Styles from "../css/Hero.module.css";

const Hero = () => {
  return (
    <div className={Styles["hero"]}>
      <section className={Styles["hero-content"]}>
        <h2 className={Styles["sr-only"]}>Promoted Content</h2>
        <p className={Styles["subtitle"]}>No fees.</p>
        <p className={Styles["subtitle"]}>No minimum deposit.</p>
        <p className={Styles["subtitle"]}>High interest rates.</p>
        <p className={Styles["hero-content_subtitle"]}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};

export default Hero;

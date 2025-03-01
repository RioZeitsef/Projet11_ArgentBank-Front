import React from "react";
import Styles from "../css/Hero.module.css";

const Hero = () => {
  return (
    <div className={Styles.hero}>
      <section className={Styles.herocontent}>
        <h2 className={Styles.sronly}>Promoted Content</h2>
        <p className={Styles.herocontent.subtitle}>No fees.</p>
        <p className={Styles.herocontent.subtitle}>No minimum deposit.</p>
        <p className={Styles.herocontent.subtitle}>High interest rates.</p>
        <p className={Styles.herocontent.text}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};

export default Hero;

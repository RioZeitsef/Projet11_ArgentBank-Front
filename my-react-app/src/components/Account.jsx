import React from "react";
import Styles from "../css/Account.module.css"; // Assurez-vous d'importer votre fichier CSS

const Account = ({ title, amount, description, buttonText }) => {
  return (
    <section className={Styles["account"]}>
      <div className={Styles["account-content-wrapper"]}>
        <h3 className={Styles["account-title"]}>{title}</h3>
        <p className={Styles["account-amount"]}>{amount}</p>
        <p className={Styles["account-amount-description"]}>{description}</p>
      </div>
      <div className={Styles["account-content-wrapper cta"]}>
        <button className={Styles["transaction-button"]}>{buttonText}</button>
      </div>
    </section>
  );
};

export default Account;
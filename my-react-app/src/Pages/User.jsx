import React from "react";
import Styles from "../css/Pages.module.css";

const User = () => {
  return (
    <>
      <div className={Styles["header"]}>
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className={Styles["edit-button"]}>Edit Name</button>
      </div>
      <h2 className={Styles["sr-only"]}>Accounts</h2>
      <section className={Styles["account"]}>
        <div className={Styles["account-content-wrapper"]}>
          <h3 className={Styles["account-title"]}>Argent Bank Checking (x8349)</h3>
          <p className={Styles["account-amount"]}>$2,082.79</p>
          <p className={Styles["account-amount-description"]}>Available Balance</p>
        </div>
        <div className={Styles["account-content-wrapper cta"]}>
          <button className={Styles["transaction-button"]}>View transactions</button>
        </div>
      </section>
      <section className={Styles["account"]}>
        <div className={Styles["account-content-wrapper"]}>
          <h3 className={Styles["account-title"]}>Argent Bank Savings (x6712)</h3>
          <p className={Styles["account-amount"]}>$10,928.42</p>
          <p className={Styles["account-amount-description"]}>Available Balance</p>
        </div>
        <div className={Styles["account-content-wrapper cta"]}>
          <button className={Styles["transaction-button"]}>View transactions</button>
        </div>
      </section>
      <section className={Styles["account"]}>
        <div className={Styles["account-content-wrapper"]}>
          <h3 className={Styles["account-title"]}>Argent Bank Credit Card (x8349)</h3>
          <p className={Styles["account-amount"]}>$184.30</p>
          <p className={Styles["account-amount-description"]}>Current Balance</p>
        </div>
        <div className={Styles["account-content-wrapper cta"]}>
          <button className={Styles["transaction-button"]}>View transactions</button>
        </div>
      </section>
    </>
  );
}

export default User;
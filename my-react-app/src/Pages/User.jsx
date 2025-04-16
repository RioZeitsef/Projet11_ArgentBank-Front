import React from "react";
import Styles from "../css/Pages.module.css";
import Account from "../components/Account";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.auth.user);
  console.log('User data:', user);

  return (
    <main className={Styles["bg-dark"]}>
      <section>
        <div className={Styles["header"]}>
          <h1>Welcome back<br />
          {user?.firstName} {user?.lastName}!
          </h1>
          <button className={Styles["edit-button"]}>Edit Name</button>
        </div>
        <h2 className={Styles["sr-only"]}>Accounts</h2>
        <div>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          buttonText="View transactions"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
          buttonText="View transactions"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
          buttonText="View transactions"
        />
        </div>
      </section>
    </main>
  );
}

export default User;
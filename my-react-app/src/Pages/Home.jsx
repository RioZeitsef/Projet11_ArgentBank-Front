import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import styles from "../css/Pages.module.css";
import iconChat from '../assets/icon-chat.png'; 
import iconMoney from '../assets/icon-money.png';
import iconSecurity from '../assets/icon-security.png';


const Home = () => {
    const featuresData = [
      {
        iconSrc: iconChat,
        altText: 'Chat Icon',
        title: 'You are our #1 priority',
        description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
      },
      {
        iconSrc: iconMoney,
        altText: 'Money Icon',
        title: 'More savings means higher rates',
        description: 'The more you save with us, the higher your interest rate will be!'
      },
      {
        iconSrc: iconSecurity,
        altText: 'Security Icon',
        title: 'Security you can trust',
        description: 'We use top of the line encryption to make sure your data and money is always safe.'
      }
    ];

  return (
    <>
      <Hero />
        <section className={styles["features"]}>
          <h2 className={styles["sr-only"]}>Features</h2>
          {featuresData.map((feature, index) => (
            <Feature
            key={index}
            iconSrc={feature.iconSrc}
            altText={feature.altText}
            title={feature.title}
            description={feature.description}
            />
          ))}
        </section>
    </>
  );
}

export default Home;

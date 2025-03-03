import React from 'react';
import '../css/Feature.module.css'; 
import Styles from '../css/Feature.module.css';

const Feature = ({ iconSrc, altText, title, description }) => {
  return (
    <div className={Styles["feature-item"]}>
      <img src={iconSrc} alt={altText} className={Styles["feature-icon"]} />
      <h3 className={Styles["feature-item-title"]}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;

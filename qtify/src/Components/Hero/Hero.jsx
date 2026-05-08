import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../Assets/ headphones.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands podcast episodes</h2>
      </div>
      <div className={styles.right}>
        <img src={headphones} alt="headphones" />
      </div>
    </div>
  );
};

export default Hero;

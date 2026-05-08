import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, children, type = "button" }) => {
  return (
    <button className={styles.button} type={type}>
      {text ?? children}
    </button>
  );
};

export default Button;

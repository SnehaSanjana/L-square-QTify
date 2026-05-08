import React from "react";
import styles from "./Search.module.css";

const Search = ({ placeholder = "Search" }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.search}
      />
    </div>
  );
};

export default Search;

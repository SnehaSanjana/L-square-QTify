import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search a song of your choice"
        className={styles.search}
      />
    </div>
  );
};

export default Search;


import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <Search placeholder="Search a album of your choice" searchData={searchData} />
      <Button text="Give Feedback" />
    </nav>
  );
}

export default Navbar;

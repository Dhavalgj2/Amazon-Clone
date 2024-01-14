import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import Search from "../Search/Search";
const Header = () => {
  return (
    <div className={styles.root}>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="" width="90px" height="100px" />
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Header;

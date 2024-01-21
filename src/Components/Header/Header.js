import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import Search from "../Search/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <div className={styles.root}>
      <div className="header-container">
        <div className="logo-container">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </div>
        <Search />
        <div className="header-options-container">
          <div className="header-options">
            <span>Hello, User</span>
          </div>
          <div className="header-options">
            <span>
              Returns
              <b> & Orders</b>
            </span>
          </div>
          <div className="header-options">
            <span className="cart-container">
              <ShoppingCartIcon fontSize="small" />
              <span>0</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

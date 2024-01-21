import React from "react";
import styles from "./SubHeader.module.scss";
const SubHeader = () => {
  return (
    <div className={styles.root}>
      <div className="subheader-container">
        <ul className="submenu-container">
          <li>All</li>
          <li>Customer Service</li>
          <li>Best Sellers</li>
          <li>Prime</li>
          <li>Buy Again</li>
          <li>Books</li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;

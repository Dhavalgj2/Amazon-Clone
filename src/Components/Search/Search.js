import React from "react";
import styled from "styled-components";
import styles from "./Search.module.scss";
const Search = () => {
  return (
    <div className={styles.root}>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Search..." />
        <button class="search-button">Search</button>
      </div>
    </div>
  );
};

export default Search;

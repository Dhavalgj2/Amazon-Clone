import React from "react";
import styles from "./Home.module.scss";
import Slider from "../../Slider/Slider";
const Home = () => {
  return (
    <div className={styles.root}>
      <div className="home">
        <div className="home__container">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;

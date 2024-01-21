import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import logo from "../../assets/logo.png";
import styles from "./Slider.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function Slider(props) {
  const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  ];
  return (
    <div className={styles.root}>
      <Carousel
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Button onClick={onClick} className={className} style={style}>
              {prev && <ArrowBackIosNewIcon />}
              {next && <ArrowForwardIosIcon />}
            </Button>
          );
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            top: "10rem",
          },
        }}
        indicators={false}
        height="500px"
        NextIcon="next" // Change the "inside" of the next button to "next"
        PrevIcon="prev"
      >
        {data.map((item) => (
          <img className="slider-image" src={item} alt="" />
        ))}
      </Carousel>
    </div>
  );
}

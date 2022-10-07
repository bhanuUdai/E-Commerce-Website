import React from "react";
import  "./AvailableMusicAlbums.css";

import MusicAlbums from "./MusicAlbums";
const AvailableMusicAlbums = (prop) => {

  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];


  return (
    <main  className="music-content">
    {productsArr.map((item) => {
      return <MusicAlbums items={item}></MusicAlbums>;
    })}
  </main>
  );

  // return(<div className={classes.album}>
  //     <div>{prop.items.title}</div>
  //     <img src={prop.items.imageUrl} alt="Music Albums"></img>
  //     <div>{prop.items.price}</div>
  // </div>)
};

export default AvailableMusicAlbums;

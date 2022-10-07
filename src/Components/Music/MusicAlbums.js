import React from "react";
import './MusicAlbums.css'
import Button from "../Button";
const MusicAlbums=(prop)=>
{
    return( <div className="music-content">
    <div>
      <h3>{prop.items.title}</h3>
      <div className= "image-container" >
        <img className= "images" src={prop.items.imageUrl} alt="Music Album"></img>
      </div>
      <div className=  "prod-details">
        <span>$
        <span>{prop.items.price}</span>
        </span>
        <Button className="shop-item-button">ADD TO CART</Button>
      </div>
      
    </div>
  </div>)
}

export default MusicAlbums
import React from "react";
import classes from './MusicAlbums.module.css'
import Button from "../Button";
const MusicAlbums=(prop)=>
{
    return( <div className={classes.musicContent}>
    <div>
      <h3>{prop.items.title}</h3>
      <div className= {classes.imageContainer} >
        <img className= {classes.images} src={prop.items.imageUrl} alt="Music Album"></img>
      </div>
      <div className=  {classes.prodDetails}>
        <span>$
        <span>{prop.items.price}</span>
        </span>
        <Button className={classes.addButton}>ADD TO CART</Button>
      </div>
      
    </div>
  </div>)
}

export default MusicAlbums
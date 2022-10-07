import React from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header=(prop)=>
{
    const cartHandler=()=>
    {
        prop.openCart()
    }
    return(<React.Fragment>
        <header className={classes.header} >
            <span>HOME</span>
            <span>STORE</span>
            <span>STORE</span>
            <div> <HeaderCartButton onClick={cartHandler}></HeaderCartButton></div>
           
        </header>
        <div className={classes.heading}>
            <h1>The Generics</h1>
        </div>
        <section className={classes.music}>
            <h2>Music</h2>
        </section>
        
        </React.Fragment>
    )
}

export default Header
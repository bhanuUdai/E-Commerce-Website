import React from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header=()=>
{
    return(<React.Fragment>
        <header className={classes.header} >
            <span>HOME</span>
            <span>STORE</span>
            <span>STORE</span>
            <div> <HeaderCartButton></HeaderCartButton></div>
           
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
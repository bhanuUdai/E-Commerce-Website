import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink activeClassName={classes.active} to='./home'>HOME</NavLink>
            {/* <span>STORE</span> */}
            <NavLink  activeClassName={classes.active} to='/store'>STORE</NavLink>
            <NavLink activeClassName={classes.active} to='/about' >ABOUT</NavLink>
            <div> <HeaderCartButton onClick={cartHandler}></HeaderCartButton></div>
           
        </header>
        <div className={classes.heading}>
            <h1>The Generics</h1>
        </div>
        {/* <section className={classes.music}>
            <h2>Music</h2>
        </section> */}
        
        </React.Fragment>
    )
}

export default Header
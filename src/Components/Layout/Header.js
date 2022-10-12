import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
// import { useState } from "react";
const Header = (prop) => {
  const [onShow, setOnShow] = useState(false);
  const cartHandler = () => {
    prop.openCart();
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname==='/store') {
      setOnShow(true);
      console.log("cart on");
    } else {
      setOnShow(false);
      console.log("cart off");
    }

   
  }, [location]);

  console.log(location);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <NavLink activeClassName={classes.active} to="/" exact>
          HOME
        </NavLink>
        <NavLink activeClassName={classes.active} to="/store">
          STORE
        </NavLink>
        <NavLink activeClassName={classes.active} to="/about">
          ABOUT
        </NavLink>
        <NavLink activeClassName={classes.active} to="/contact">
          Contact
        </NavLink>
        {onShow && <HeaderCartButton onClick={cartHandler}></HeaderCartButton>}
      </header>
      <div className={classes.heading}>
        <h1>The Generics</h1>
      </div>
      {/* <section className={classes.music}>
            <h2>Music</h2>
        </section> */}
    </React.Fragment>
  );
};

export default Header;

import React from "react";
import './Button.css'
const Button =(prop)=>
{
    let classes="button "+prop.className;

    return(<React.Fragment>
        <button className={classes} type={prop.type || "button"} onClick={prop.onClick}>{prop.children}</button>
        </React.Fragment>)
}

export default Button
import React from "react";
import "./HeaderCartButton.css"


const HeaderCartButton = (prop) => {
  return (<React.Fragment>
    <button  onClick={prop.onClick} className="button">
      <span>Cart</span>
      <span>0</span>
    </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;

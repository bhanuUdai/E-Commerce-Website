import React from "react";
import "./HeaderCartButton.css"


const HeaderCartButton = () => {
  return (<React.Fragment>
    <button className="button">
      <span>Cart</span>
      <span>0</span>
    </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;

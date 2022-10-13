import React ,{useState} from "react";
import AvailableMusicAlbums from'./Components/Music/AvailableMusicAlbums'
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import About from "./Components/pages/About";
import {Route, Switch} from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact.js/Contact";
import ProductDetails from "./Components/pages/ProductDetails/ProductDetails";

function App(prop) {
 
  const[initCart,setInitCart]=useState(false)

  const openCartHandler=()=>
  {
    setInitCart(true)
  }

  const closeCartButtonHandler=()=>
  {
    setInitCart(false)
  }

  return (
    <React.Fragment>
      <Switch>
       <Route  path="/" exact><Home/></Route>
     <Route  path='/store'  >
     {initCart&& <Cart closeCart={closeCartButtonHandler}></Cart>}
      <Header openCart={openCartHandler} />
      <AvailableMusicAlbums/><Footer/></Route>
      <Route  path='/about'><About/></Route>
      <Route path='/contact'><Contact></Contact></Route>
      <Route path='/product-details' ><ProductDetails/></Route>
      </Switch>
      </React.Fragment>
  );
}

export default App;
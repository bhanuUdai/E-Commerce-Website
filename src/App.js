import React ,{useContext, useState} from "react";
import AvailableMusicAlbums from'./Components/Music/AvailableMusicAlbums'
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import About from "./Components/pages/About";
import {Route, Switch ,Redirect} from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact.js/Contact";
import ProductDetails from "./Components/pages/ProductDetails/ProductDetails";
import AuthForm from "./Components/pages/Auth/AuthForm";
import CartContext from "./Components/Store/cart-context";
function App(prop) {
 
  const[initCart,setInitCart]=useState(false)
  const cartctx=useContext(CartContext)
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
      <Header openCart={openCartHandler} />
      <Switch>
       <Route  path="/" exact><Home/></Route>
     <Route  path='/store'  >
     {initCart && <Cart closeCart={closeCartButtonHandler}></Cart>}
     {cartctx.userIsLogin && <AvailableMusicAlbums/>}
     {!cartctx.userIsLogin &&<Redirect to='/auth' />}</Route>
      <Route  path='/about'><About/></Route>
     { !cartctx.userIsLogin && <Route path='/auth'><AuthForm/></Route>}
      <Route path='/contact'><Contact></Contact></Route>
      <Route path='/product-details' ><ProductDetails/></Route>
      <Route path="*">
        <Redirect to="/"/>
      </Route>
      </Switch>
      <Footer/>
      </React.Fragment>
  );
}

export default App;
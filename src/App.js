import React ,{useState} from "react";
import AvailableMusicAlbums from'./Components/Music/AvailableMusicAlbums'
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import ContextProvider from "./Components/Store/ContextProvider";
import About from "./Components/pages/About";
import {Route, Redirect} from "react-router-dom"
import Footer from "./Components/Layout/Footer";
function App() {
 
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
    <ContextProvider>
     <Route  path="/home" >
     {initCart&& <Cart closeCart={closeCartButtonHandler}></Cart>}
      <Header openCart={openCartHandler} />
      <AvailableMusicAlbums/><Footer/></Route>
      <Route path='/about'><About/></Route>
      <Route path="/" exact>                                 
          <Redirect to="/home" />
        </Route>
      </ContextProvider>
  );
}

export default App;
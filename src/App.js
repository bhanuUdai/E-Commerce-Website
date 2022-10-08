import React ,{useState} from "react";
import AvailableMusicAlbums from'./Components/Music/AvailableMusicAlbums'
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import ContextProvider from "./Components/Store/ContextProvider";
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
     {initCart&& <Cart closeCart={closeCartButtonHandler}></Cart>}
      <Header openCart={openCartHandler} />
      <AvailableMusicAlbums/>
      </ContextProvider>
  );
}

export default App;
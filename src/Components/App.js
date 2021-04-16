import { useContext, useState } from "react";
import Cart from "./Cart/Cart";
import { CartContext } from "./Cart/CartContext";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Header from "./Header/Header";
import Navbar from "./Navigation/Navbar";
import WineList from "./Products/WineList";

function App() {
  const [filterBy, setFilterBy] = useState("")
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useContext(CartContext)


  const filterRed = () => {
    setFilterBy("red")
  }
  const filterWhite = () => {
    setFilterBy("white")
  }
  const filterSparkling = () => {
    setFilterBy("sparkling")
  }
  const filterVintage = () => {
    setFilterBy("vintage")
  }
  const removeFilter = () => {
    setFilterBy("")
  }


  const toggleCart = () => {
    setOpen(prevState => !prevState)
  }
  return (
    <>
      <Navbar toggleCart={toggleCart} />
      <div style={{ padding: "0.5rem" }} className="app">
        <Header filterRed={filterRed} filterWhite={filterWhite} filterSparkling={filterSparkling} filterVintage={filterVintage} removeFilter={removeFilter} />
        <WineList filterBy={filterBy} />
        <Cart open={open} toggleCart={toggleCart} />
        {/* <CheckoutForm /> */}
      </div>
    </>
  );
}

export default App;

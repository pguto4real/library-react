
import Nav from "./components/nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './pages/Home';
import Cart from './pages/Cart.jsx';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data';
function App() {

  const [cartData, setCart] = useState([])
  const [cartValue, setCartValue] = useState(0)
  const [cartTotalValue, setCartTotal] = useState(0)

  const [tax, setTax] = useState(0)

  const changeQuantity = (book, newQuantity) => {
    setCart(
      cartData.map((item) =>
        (+item.id === +book.id) ?
          {
            ...item, quantity: +newQuantity
          }
          :
          item
      )
    )
  }

  const removeItem = (cart) => {
    setCart(cartData.filter((item) => item !== cart
    ))
  }
  const addToCart = (book) => {
    setCart([...cartData, { ...book, quantity: 1 }])
  }

  const cartTotal = () => {
    let totalValue = 0;
    cartData.map((cart) => {

      return cart.salePrice
        ? totalValue += (cart.salePrice * cart.quantity)
        : totalValue += (cart.originalPrice * cart.quantity)
    })
    setTax((totalValue * 0.0825).toFixed(2))
    setCartValue(totalValue.toFixed(2))
    setCartTotal((totalValue + (totalValue * 0.0825)).toFixed(2))
  }

  // const addToCart = (book) => {

  //   if (cartData.length > 0) {
  //     let cart = cartData.find((cartIndex) => +cartIndex.id === +book.id)

  //     if (cart) {

  //       let cartindex = cartData.indexOf(cart)
  //       cartData[cartindex].quantity += 1
  //       setCart(cartData)
  //     }
  //     else {
  //       setCart([...cartData, { ...book, quantity: 1 }])
  //     }
  //   }
  //   else {

  //     setCart([...cartData, { ...book, quantity: 1 }])
  //   }
  // }

  useEffect(() => {
    setCart(cartData)
    cartTotal()

  }, [cartData])
  return (
    <Router>
      <div className="App">
        <Nav cartQuantity={cartData?.length || 0} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/cart" element={<Cart removeItem={removeItem} changeQuantity={changeQuantity} cartData={cartData} tax={tax} cartValue={cartValue} cartTotalValue={cartTotalValue} />} />
          <Route path="/books/:id" exact element={<BookInfo books={books} addToCart={addToCart} cartData={cartData} />} />
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;

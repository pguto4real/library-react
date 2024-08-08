
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from "./components/nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './pages/Home';
import Cart from './pages/cart';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data';
function App() {
  // console.log(book)
  const [cartData, setCart] = useState([])

  const addToCart = (book) => {
    // console.log('add to cart', book)
    if (cartData.length > 0) {
      let cart = cartData.find((cartIndex) => +cartIndex.id === +book.id)
      console.log('i got here')
      if (cart) {
        console.log('i got here1')
        let cartindex = cartData.indexOf(cart)
          
        cartData[cartindex].quantity += 1
        setCart(cartData)
      }
      else {
        console.log('i got here2')
        setCart([...cartData, { ...book, quantity: 1 }])
      }
    }
    else {
      console.log('i got here3')
      setCart([...cartData, { ...book, quantity: 1 }])
    }
  }
 
    useEffect(()=>{
      console.log(cartData)
    },[cartData])
  return (
    <Router>
      <div className="App">
        <Nav cartQuantity={cartData.length}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/books/:id" exact element={<BookInfo books={books} addToCart={addToCart} />} />
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;

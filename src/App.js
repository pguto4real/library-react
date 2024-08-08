
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from "./components/nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data';
function App() {

  const [cartData, setCart] = useState([{id:2,quantity:10},{id:5,quantity:9}])

  const addToCart=(book)=>{
    console.log('add to cart',book)
   
      cartData.forEach((cart,index) => {
        console.log(cart)
            if(+book.id === +cart.id){
              
                console.log(cart.quantity) 
                cart.quantity+=1
            }
        });
        setCart(cartData)
     
           
    // }
  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/books" element={<Books books={books}/>}/>
        <Route path="/books/:id" exact element={<BookInfo books={books} addToCart={addToCart}/>}/>
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;

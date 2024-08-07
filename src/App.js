
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from "./components/nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" component={Books}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

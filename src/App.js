
import './App.css';
import Products from './components/Products';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Cart from './components/Cart';
import Individual from './components/Individual';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path = "/products" element = {<Products />} ></Route>
      <Route path = "/" element = {<Login />} ></Route>
      <Route path='/products/:id' element = {<Individual />}></Route>
      <Route path = "/cart" element = {<Cart />}></Route>
     </Routes> 
    </div>
  );
}

export default App;

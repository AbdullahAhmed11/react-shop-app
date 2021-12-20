import React, {useState, useEffect} from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css"
import { Provider } from "react-redux";
// import { words } from "./words";
import data from "./data.json"
import store from "./store/store";
import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
function App() {
  const [products, setProducts] = useState(data)
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems'))||[]);


  const handleFilterBySize  = (e) => {
    setSize(e.target.value);
    if (e.target.value == "ALL") {
      setProducts(data);
    } 
    else 
    {
      let productsClone = [...products];
      let newProducts = productsClone.filter(p => p.sizes.indexOf(e.target.value) != -1);
      setProducts(newProducts);
    }
  }
  const handleFilterBySort = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function(a,b){
      if (order == "lowest") {
        return a.price - b.price
      }else if (order == "highest") {
        return b.price - a.price 
      }else {
        return a.id < b.id  ? 1 : -1
      }
    })
    setProducts(newProducts)
  }

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach(p => {
      if(p.id == product.id) {
        p.qty++;
        isProductExist= true;
      }
    })
    if(!isProductExist) {
      cartItemsClone.push({...product, qty: 1})
    }
    setCartItems(cartItemsClone);
  }
  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems))
  // }, [cartItems])
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter(p => p.id !== product.id))
  }
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="layout">
      <Header/>
      <main>  
        <div className="nav">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/orders">Order</NavLink></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home products={products} cartItems={cartItems} sort={sort} size={size} handleFilterBySort={handleFilterBySort} handleFilterBySize={handleFilterBySize} removeFromCart={removeFromCart} addToCart={addToCart} />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
      <Footer/>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
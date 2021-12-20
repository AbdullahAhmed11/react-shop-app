import React from 'react'
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import "../index.css"
import Cart from "../components/Cart/Cart";

function Home(props) {
    const {products, addToCart, size, handleFilterBySize, sort, handleFilterBySort, cartItems, removeFromCart} = props;
    return (
        <>
            <div className="wrapper">
          <Products products={products} addToCart={addToCart} />
          <div className="filterEl">
          <Filter 
          productsNumber={products.length}
          size={size} handleFilterBySize={handleFilterBySize} 
          handleFilterBySort={handleFilterBySort} sort={sort}
          />
          </div>
        </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </>
    )
}
export default Home
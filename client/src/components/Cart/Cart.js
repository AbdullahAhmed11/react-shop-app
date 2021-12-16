import React from 'react';
import "../../css/Cart/Cart.css";
function Cart(props) {
    return (
        <div className="cart-wrapper">
            <div className="cart-title">{props.cartItems.length === 0 ? 'Cart Is Empty' : <p>
                There is {props.cartItems.length} In Your Cart
                </p>}</div>
            <div className="cart-items">
            {props.cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.imageUrl} alt=""/>
                        <div className="cart-info">
                            <div>
                                <p>title: {item.title}</p>
                                <p>qty: {item.qty} </p>
                                <p>price: ${item.price}</p>
                            </div>
                                <button onClick={() => props.removeFromCart(item)}>
                                    Remove
                                </button>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    )
}
export default Cart
import React, {useState} from 'react';
import "../../css/Cart/Cart.css";
import CheckoutFom from '../CheckoutForm/CheckoutFom';
import Bounce from 'react-reveal/Bounce';
import { connect } from 'react-redux';
import {removeFromCart} from '../../store/action/cart'
import OrderModal from './orderModal';
function Cart(props) {
    const [showForm, setShowForm] = useState(false);
    const [order, setOrder] = useState(false);
    const [value, setValue] = useState("");

    const submitOrder  = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        setOrder(order);
    } 
    const handleChange = (e) => {
        console.log(e.target.name)
        setValue( (prevState) => ({...prevState, [e.target.name]: e.target.value}) )
    }

    const closeModal = () => {
        setOrder(false)
    }
    return (

        
        <div className="cart-wrapper">
            <div className="cart-title">{props.cartItems.length === 0 ? 'Cart Is Empty' : <p>
                There is {props.cartItems.length} Items In Your Cart
                </p>}</div>

        <OrderModal closeModal={closeModal} order={order} cartItems={props.cartItems} />
        <Bounce left cascade>
            <div className="cart-items">
            {props.cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.imageUrl} alt=""/>
                        <div className="cart-info">
                            <div>
                                <p>title: {item.title}</p>
                                <p>qty: {item.qty} </p>
                                <p>price: ${item.price * item.qty}</p>
                            </div>
                                <button onClick={() => props.removeFromCart(item)}>
                                    Remove
                                </button>
                        </div>
                    </div>
            ))}
            </div>
            </Bounce>
            {
                    props.cartItems.length !== 0 && 
                (
                    <div className='cart-footer'>
                        <div className='total'>Total: {props.cartItems.reduce((acc,p) => {
                            return acc + p.price * p.qty;
                        }, 0)}</div>
                        <button onClick={() => setShowForm(true)}>Selcet prodcut</button>
                    </div>
                )
            }

            <CheckoutFom showForm={showForm} setShowForm={setShowForm} submitOrder={submitOrder} handleChange={handleChange} />
        </div>
    )
}
export default connect((state) => {
    return {
        cartItems: state.cart.cartItems
    }
},{removeFromCart})(Cart)   
import React, {useState} from 'react';
import "../../css/Cart/Cart.css";
import CheckoutFom from '../CheckoutForm/CheckoutFom';
import Modal from "react-modal"
import Bounce from 'react-reveal/Bounce';
import { connect } from 'react-redux';
import {removeFromCart} from '../../store/action/cart'
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
<<<<<<< HEAD

=======
    const closeModal = () => {
        setOrder(false)
    }
>>>>>>> ea660ea96d74c1df6d0f320d95f50f1452994d7b
    return (

        
        <div className="cart-wrapper">
            <div className="cart-title">{props.cartItems.length === 0 ? 'Cart Is Empty' : <p>
                There is {props.cartItems.length} Items In Your Cart
                </p>}</div>
<<<<<<< HEAD

=======
        <Modal isOpen={order}>
            <div class="order-info">
                <span className='close-model' onClick={closeModal}>&times;</span>
                <p className="order-success">order done success! congratulations {order.name}</p>
                <table>
                    <tr>
                        <td>Name: </td>
                        <td>{order.name}</td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>{order.email}</td>
                    </tr>
                    <tr>
                        <td>Total: </td>
                        <td>{props.cartItems.reduce( (a, p) => {
                            return a + p.price * p.qty
                        },0)}</td>
                    </tr>
                </table>
            </div>
        </Modal>
        <Bounce left cascade>
>>>>>>> ea660ea96d74c1df6d0f320d95f50f1452994d7b
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
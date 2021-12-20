import React from 'react'
import "../../css/Cart/Cart.css";
import Modal from "react-modal"

function orderModal(props) {
    const {order, closeModal, cartItems} = props
    return (
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
                        <td>{cartItems.reduce( (a, p) => {
                            return a + p.price * p.qty
                        },0)}</td>
                    </tr>
                </table>
            </div>
        </Modal>
    )
}
export default orderModal
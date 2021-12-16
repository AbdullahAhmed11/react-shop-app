import React from 'react'
import "../../css/CheckoutForm/CheckoutForm.css"
function CheckoutFom(props) {
    return (
        <>
                    {props.showForm &&             
            <div className="checkout-form">
                <span className='close-icon' onClick={() => props.setShowForm(false)}> &times;</span>
                <form onSubmit={props.submitOrder}>
                    <div>
                        <label>Name</label>
                        <input type="text" required name='name' onChange={props.handleChange} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" required name='email' onChange={props.handleChange} />
                    </div>
                    <div>
                        <button type='submit'>Checkout</button>
                    </div>
                </form>
            </div>}
        </>
    )
}
export default CheckoutFom
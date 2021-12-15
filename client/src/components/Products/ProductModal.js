import React from 'react'
import Modal from "react-modal"

function ProductModal(props) {
    const {product, openModal, closeModal} = props;
    return (
        <Modal isOpen={product}>
            <span className='close-icon' onClick={closeModal} onRequestClose={closeModal} >&times;</span>
            <div className="product-info">
                <img src={product.imageUrl} alt={product.title} />
                <p>{product.description}</p>
                <p>{product.title}</p>
                <p>${product.price}</p>
            </div>
        </Modal>
    )
}
export default ProductModal

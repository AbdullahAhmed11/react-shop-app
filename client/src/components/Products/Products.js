import React from 'react';
import "../../css/Products/Products.css";
function Products(props) {
    console.log(props)
    return (
        <div className="productsEl">
            {props.products.map(product => (
            <div className="product-item" key={product.id}>
                    <img src={product.imageUrl} alt={product.title}/>
                    <div className="product-desc">
                        <p>{product.description}</p>
                        <span>{product.price}</span>
                    </div>
                    <button>Add to cart</button>
            </div>
        ))}
        </div>
        
    )
}
export default Products;

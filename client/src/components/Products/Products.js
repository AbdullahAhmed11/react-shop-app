
    return (
        <div className="productsEl">
            {props.products.map(product => (
            <div className="product-item" key={product.id}>

                    </div>
                    <button>Add to cart</button>
            </div>
        ))}

        </div>
        
    )
}

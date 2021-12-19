import React from 'react';
import "../../css/Filter/Filter.css";
import Flip from 'react-reveal/Flip';
import {connect} from "react-redux"
import {filteredSize, filteredSort} from "../../store/action/products"

function Filter(props) {
    return (
        <Flip left>
            {props.filterProducts &&         
            <div className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">Number of products {props.filterProducts.length}</div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select value={props.size} className='filter-select' onChange={(e) => props.filteredSize(props.products, e.target.value)}>
                    <option value="ALL">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            <div className="filter-by-size"  >
                <span>Order</span>
                <select className='filter-select' onChange={(e) => props.filteredSort(props.filterProducts, e.target.value)} value={props.sort}>
                    <option value="latest">latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">highest</option>

                </select>
            </div>

        </div>} 
        </Flip>
    )
}
export default connect( (state) => {
    return {
        sort: state.products.sort,
        size: state.products.size,
        products: state.products.products,
        filterProducts: state.products.filterProducts
    }
}, {
    filteredSize,
    filteredSort,
})(Filter)
import React from 'react';
import "../../css/Filter/Filter.css";
import Flip from 'react-reveal/Flip';

function Filter(props) {
    return (
        <Flip left>
        <div className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">Number of products {props.productsNumber}</div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select value={props.size} className='filter-select' onChange={props.handleFilterBySize}>
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
                <select className='filter-select' onChange={props.handleFilterBySort} value={props.sort}>
                    <option value="latest">latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">highest</option>

                </select>
            </div>

        </div>
        </Flip>
    )
}
export default Filter
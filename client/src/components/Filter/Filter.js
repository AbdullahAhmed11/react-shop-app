import React from 'react'
import "../../css/Filter/Filter.css"
function Filter(props) {
    return (
        <div className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">Number of products 4</div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select className='filter-select'>
                    <option value="ALL">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            <div className="filter-by-size">
                <span>Order</span>
                <select className='filter-select'>
                    <option value="latest">latest</option>
                    <option value="lower">Lower</option>
                    <option value="highest">highest</option>

                </select>
            </div>

        </div>
    )
}
export default Filter
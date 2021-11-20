import React from 'react'
import "./Product.css"

function product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>random title</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                </div>
            </div> 
            <img  src="https://m.media-amazon.com/images/I/316ArzLeJ2L._AC_SY200_.jpg" alt="product1" />
            <button>Add to Basket</button>
        </div>
    );
}

export default product

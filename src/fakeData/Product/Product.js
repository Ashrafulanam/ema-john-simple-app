import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const {name,img,price,seller, stock,star}=props.product;
   const element= <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
        <div>
        <img src={img} alt="" />
        </div>
            <div>
            <h4 className="product-name"> {name}</h4>
            <p><small>by:{seller}</small></p><br />
            <Rating
            initialRating ={star}
            emptySymbol='far fa-star icon-color'
            fullSymbol='fas fa-star icon-color'
             readonly></Rating>
            <p>price: {price}</p>
            <p><small>only {stock} left in stock -order soon</small></p>
            <button onClick={() =>props.handleAddCart(props.product)} className="purchase-btn">{element}add to cart</button>
            </div>
        </div>
    );
};

export default Product;
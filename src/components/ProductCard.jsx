import React from 'react';
import './ProductCard.css';

const ProductCard = ({ id, image, title, price, category }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <p className="product-category">{category}</p>
                <h3 className="serif">{title}</h3>
                <p className="product-price">₹{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;

import React from "react";

const Product = ({ product, addToCartClick }) => {
  return (
    <div className="product-grid">
      <button className="add" onClick={addToCartClick}>+</button>
      <div className="g-center">
        <h3 className="title g-left">{product.title}</h3>
        <p className="desc"> {product.desc} </p>
      </div>
      <h4 className="price g-right">{product.price} sek</h4>
    </div>
  );
};

export default Product;

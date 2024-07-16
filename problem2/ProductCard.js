import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="details">
        <h3>{product.name}</h3>
        <p>{product.company}</p>
        <p>Price: ${product.price}</p>
        {/* Display other details like rating, discount, availability */}
      </div>
    </div>
  );
};

export default ProductCard;
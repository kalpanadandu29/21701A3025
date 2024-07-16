
import React from 'react';
import ProductsList from './ProductsList';

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Product 1', company: 'Afford Medical Technologies Private Limited' },
    { id: 2, name: 'Product 2', company: 'Other Company' },
    // Add more products as needed
  ];

  return (
    <div>
      <h2>All Products</h2>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductPage;

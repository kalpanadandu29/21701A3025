import React, { useState, useEffect } from 'react';
import ProductsList from './ProductsList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Replace with actual API call to fetch data
      const response = await fetch('https://your-api.com/products');
      const data = await response.json();
      const processedData = data.map(product => ({
        id: `${product.company}-${product.category}-${product.name}`, 
        name: product.name,
        company: product.company,
        category: product.category,
        price: product.price,
        rating: product.rating,
        discount: product.discount,
        availability: product.availability,
        imageUrl: 'https://picsum.photos/200/300', // Placeholder image
      }));
      setProducts(processedData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Top N Products</h1>
      <ProductsList products={products} />
    </div>
  );
}

export default App;

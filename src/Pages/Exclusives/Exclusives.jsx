import React from 'react';
import { Link } from 'react-router-dom';
import './Exclusives.css';
import exclusives1 from './exclusivesimg/exclusives1.png';
//import women2 from './womenimg/women2-gown-wb.png';
//import women3 from './womenimg/women3-anar-wb.png';
//import women4 from './womenimg/women4-gown-wb.png';
//import women5 from './womenimg/women5-saree-wb.png';
//import women6 from './womenimg/women6-dress-wb.png';
//import women7 from './womenimg/women7-salwar-wb.png';
//import women8 from './womenimg/women8-leh-wb.png';

// Sample product data
const products = [
  { id: 1, name: 'Maroon Lehenga', image: exclusives1, price: 1200, category: 'Lehenga', color: 'Marron', size: '34', occasion: 'Wedding' },
 // { id: 2, name: 'Wine Sparkling Gown', image: women2, price: 1200, category: 'Gown', color: 'wine', size: '32', occasion: 'Wedding' },
 // { id: 3, name: 'Gold Anarkali', image: women3, price: 600, category: 'Anarkali', color: 'gold', size: '34', occasion: 'Wedding' },
 // { id: 4, name: 'Royal Blue Gown', image: women4, price: 1100, category: 'Gown', color: 'blue', size: '30', occasion: 'Party' },
 // { id: 5, name: 'Pink Georgette Saree', image: women5, price: 1200, category: 'Saree', color: 'pink', size: '32', occasion: 'Wedding' },
 // { id: 6, name: 'Cotton Midi Dress', image: women6, price: 500, category: 'Dress', color: 'black', size: '30', occasion: 'Casual' },
 // { id: 7, name: 'Orange Salwar Suit', image: women7, price: 900, category: 'Salwar', color: 'orange', size: '34', occasion: 'Festive' },
 // { id: 8, name: 'Sky Blue Lehenga', image: women8, price: 1200, category: 'Lehenga', color: 'blue', size: '36', occasion: 'Wedding' },
];

// Function to filter products based on selected criteria
const filterProductsByCriteria = (product, filters) => {
  const { category, price, color, size, occasion } = filters;

  // Define price ranges
  const priceRanges = {
    '500-1000': [500, 1000],
    '1000-2000': [1000, 2000],
    '2000-5000': [2000, 5000],
    '5000-10000': [5000, 10000],
    '10000-15000': [10000, 15000]
  };

  // Check if the product's price is within any selected price range
  const priceMatch = price.length === 0 || price.some(range => {
    const [min, max] = priceRanges[range] || [0, Infinity];
    return product.price >= min && product.price <= max;
  });

  // Check other filter criteria
  const categoryMatch = category.length === 0 || category.includes(product.category);
  const colorMatch = color.length === 0 || color.includes(product.color);
  const sizeMatch = size.length === 0 || size.includes(product.size.toString());
  const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

  return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
};

const Exclusives= ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
  // Filter products based on search term
  const searchProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply additional filters
  const filteredProducts = searchProducts.filter(product =>
    filterProductsByCriteria(product, filters)
  );

  // Determine which products to display
  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;

  return (
    <div className="products-container">
      {productsToDisplay.length > 0 ? (
        productsToDisplay.map(product => (
          <div className="card" key={product.id}>
            <div className="imgBx">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="contentBx">
              <h2>{product.name}</h2>
              <p>{`₹${product.price} / day`}</p>
              <Link to={`/exclusivesproduct/${product.id}`}>Rent</Link>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Exclusives;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Men.css';
import axios from 'axios';

// Function to filter products based on selected criteria
const filterProductsByCriteria = (product, filters) => {
  const { category, price, color, size, occasion } = filters;

  // Define price ranges
  const priceRanges = {
    '500-1000': [500, 1000],
    '1000-2000': [1000, 2000],
    '2000-5000': [2000, 5000],
    '5000-10000': [5000, 10000],
    '10000-15000': [10000, 15000],
  };

  // Check if the product's price is within any selected price range
  const priceMatch = price.length === 0 || price.some(range => {
    const [min, max] = priceRanges[range] || [0, Infinity];
    return product.price >= min && product.price <= max;
  });

  // Check other filter criteria
  const categoryMatch = category.length === 0 || category.includes(product.category);
  const colorMatch = color.length === 0 || color.includes(product.color);
  const sizeMatch = size.length === 0 || size.includes(product.size);
  const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

  return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
};

const Men = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products/men');
        const productsData = response.data;

        // Fetch images in parallel with products data
        const productsWithImages = await Promise.all(productsData.map(async (product) => {
          try {
            const imageResponse = await axios.get(`http://localhost:8080/api/products/men/image/${product.id}`);
            return {
              ...product,
              base64Image: imageResponse.data,
            };
          } catch (error) {
            console.error(`Error fetching image for product ${product.id}:`, error);
            return product; // Return product without image if there's an error
          }
        }));

        setProducts(productsWithImages);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="men-products-container">
      {productsToDisplay.length > 0 ? (
        productsToDisplay.map(product => (
          <div className="men-card" key={product.id}>
            <div className="men-imgBx">
              <img src={`data:image/jpeg;base64,${product.base64Image}`} alt={product.name} />
            </div>
            <div className="men-contentBx">
              <h2>{product.name}</h2>
              <p>{`₹${product.price} / day`}</p>
              <Link to={`/menproduct/${product.id}`}>Rent</Link>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Men;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Men.css';
// import men1 from './menimg/men1-sher-wb.png';
// import men2 from './menimg/men2-suit-wb.png';
// import men3 from './menimg/men3-blazer-wb.png';
// import men4 from './menimg/men4-shirt-wb.png';
// import men5 from './menimg/men5-kurta-wb.png';
// import men6 from './menimg/men6-indo-wb.png'
// import men7 from './menimg/men7-suit-wb.png';
// import men8 from './menimg/men8-jack-wb.png'


// // Sample product data
// const products = [
//   { id: 1, name: 'Pink Sherwani', image: men1, price: 1500, category: 'Sherwani', color: 'pink', size: '40', occasion: 'Wedding' },
//   { id: 2, name: 'Blue Suit', image: men2, price: 2000, category: 'Suit', color: 'blue', size: '42', occasion: 'Formal' },
//   { id: 3, name: 'Velvet Blazer', image: men3, price: 1000, category: 'Blazer', color: 'black', size: '44', occasion: 'Casual' },
//   { id: 4, name: 'Wine Party Wear Shirt', image: men4, price: 600, category: 'Shirt', color: 'wine', size: '38', occasion: 'Party' },
//   { id: 5, name: 'Floral Printed Kurta', image: men5, price: 1000, category: 'Kurta', color: 'white', size: '40', occasion: 'Festive' },
//   { id: 6, name: 'Lilac Indo Western', image: men6, price: 1800, category: 'Indo Western', color: 'lilac', size: '40', occasion: 'Wedding' },
//   { id: 7, name: 'Deep Grey Suit', image: men7, price: 1500, category: 'Suit', color: 'grey', size: '42', occasion: 'Formal' },
//   { id: 8, name: 'Shadow Green Jacket', image: men8, price: 900, category: 'Jacket', color: 'green', size: '38', occasion: 'Festive' },
// ];

// // Function to filter products based on selected criteria
// const filterProductsByCriteria = (product, filters) => {
//   const { category, price, color, size, occasion } = filters;

//   // Define price ranges
//   const priceRanges = {
//     '500-1000': [500,1000],
//     '1000-2000': [1000, 2000],
//     '2000-5000': [2000, 5000],
//     '5000-10000': [5000, 10000],
//     '10000-15000': [10000, 15000]
//   };

//   // Check if the product's price is within any selected price range
//   const priceMatch = price.length === 0 || price.some(range => {
//     const [min, max] = priceRanges[range] || [0, Infinity];
//     return product.price >= min && product.price <= max;
//   });

//   // Check other filter criteria
//   const categoryMatch = category.length === 0 || category.includes(product.category);
//   const colorMatch = color.length === 0 || color.includes(product.color);
//   const sizeMatch = size.length === 0 || size.includes(product.size.toString());
//   const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

//   return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
// };

// const Men = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
//   // Filter products based on search term
//   const searchProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply additional filters
//   const filteredProducts = searchProducts.filter(product =>
//     filterProductsByCriteria(product, filters)
//   );

//   // Determine which products to display
//   const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;

//   return (
//     <div className="men-products-container">
//       {productsToDisplay.length > 0 ? (
//         productsToDisplay.map(product => (
//           <div className="men-card" key={product.id}>
//             <div className="men-imgBx">
//               <img src={product.image} alt={product.name} />
//             </div>
//             <div className="men-contentBx">
//               <h2>{product.name}</h2>
//               <p>{`₹${product.price} / day`}</p>
//               <Link to={`/menproduct/${product.id}`}>Rent</Link>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default Men;

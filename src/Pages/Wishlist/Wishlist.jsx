import React from 'react';
import { Link } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = ({ wishlistItems, onRemoveItem, onAddToCart }) => {

  const handleAddToCart = (item, index) => {
    onAddToCart(item); // Add the item to the cart
    onRemoveItem(index); // Remove the item from the wishlist
  };

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      
      <div className="wishlist-items-container">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item, index) => (
            <div className="wishlist-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.size}</p>
                </div>
                <div>
                  <p>Price: ₹{item.price}</p>
                </div>
              </div>
              <div className="button-group">
                <button 
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(item, index)}
                >
                  Add to Cart
                </button>
                <button 
                  className="remove-button" 
                  onClick={() => onRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty</p>
        )}
      </div>

      <Link to="/"><button className="continue-shopping-button">Continue Shopping</button></Link>
    </div>
  );
};

export default Wishlist;

import React, { useState, useEffect } from 'react';
import './shop.css';
import NavigationBar from '../Navigation-bar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  // State variables
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Fetching data from server
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('equipments.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data.equipments);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update message based on search results
  useEffect(() => {
    if (filteredItems.length === 0) {
      setMessage(`No items found for '${searchTerm}'`);
    } else {
      setMessage('');
    }
  }, [filteredItems, searchTerm]);

  // Add item to cart
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save cart to localStorage
    setCartVisible(true);

    // Update added items state
    setAddedItems((prev) => ({
      ...prev,
      [item.id]: true,
    }));

    // Revert button text back after a delay
    setTimeout(() => {
      setAddedItems((prev) => ({
        ...prev,
        [item.id]: false,
      }));
    }, 2000);
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  // Handle checkout process
  const handleCheckout = () => {
    alert('Proceeding to checkout');
    setCart([]); // Clear the cart
    localStorage.removeItem('cart'); // Remove cart from localStorage
  };

  // Toggle cart visibility
  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div>
      <NavigationBar cartCount={cart.length} />
      <h1 className="shop-title">
        Shop
        <input
          type="text"
          className='search-bar'
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </h1>

      {message && <p className="message">{message}</p>}

      {cartVisible && (
        <div className="cartbar">
          <h2 style={{ display: 'flex', gap: '10px', color: 'white' }}>
            <div className="close-btn" onClick={toggleCartVisibility}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            Cart
          </h2>
          {cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                  <button type="button" className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}

      <div className="shop-container">
        {filteredItems.map((item) => (
          <div key={item.id} className="shop-item">
           
              <img src={item.image} alt={item.name} />
            
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button
              className="CartBtn"
              onClick={() => addToCart(item)}
              disabled={addedItems[item.id]}
            >
              <span className="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart">
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </span>
              <p className="text">
                {addedItems[item.id] ? 'Added to Cart' : 'Add to Cart'}
              </p>
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

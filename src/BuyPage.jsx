import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

const products = {
  'iphone-16': {
    name: 'iPhone 16',
    image: '/images/ip161.jpg',
    description: 'The all-new iPhone 16 with A18 chip, advanced camera system, and all-day battery life.',
    options: [
      { id: 1, name: '128GB', price: 79900, color: 'Space Black' },
      { id: 2, name: '256GB', price: 89900, color: 'Silver' },
      { id: 3, name: '512GB', price: 109900, color: 'Gold' }
    ]
  },
  'iphone-16-pro': {
    name: 'iPhone 16 Pro',
    image: '/images/ip16pro2.jpg',
    description: 'Pro camera system, ProMotion display, and the ultimate iPhone experience.',
    options: [
      { id: 4, name: '256GB', price: 119900, color: 'Graphite' },
      { id: 5, name: '512GB', price: 139900, color: 'Pacific Blue' },
      { id: 6, name: '1TB', price: 159900, color: 'Rose Gold' }
    ]
  },
  'watch': {
    name: 'Apple Watch Series 9',
    image: '/images/apw.jpg',
    description: 'The most advanced Apple Watch yet with blood oxygen monitoring and always-on display.',
    options: [
      { id: 7, name: '41mm', price: 41900, color: 'Midnight' },
      { id: 8, name: '45mm', price: 44900, color: 'Starlight' }
    ]
  },
  'macbook-air': {
    name: 'MacBook Air',
    image: '/images/mba.jpg',
    description: 'Incredibly thin and light with the power of M2 chip.',
    options: [
      { id: 9, name: 'M2/8GB/256GB', price: 99900, color: 'Space Gray' },
      { id: 10, name: 'M2/8GB/512GB', price: 119900, color: 'Silver' },
      { id: 11, name: 'M2/16GB/512GB', price: 139900, color: 'Midnight' }
    ]
  },
  'macbook-pro': {
    name: 'MacBook Pro',
    image: '/images/mbp.jpg',
    description: 'Supercharged for pros with M2 Pro or M2 Max chip.',
    options: [
      { id: 12, name: 'M2 Pro/16GB/512GB', price: 199900, color: 'Space Gray' },
      { id: 13, name: 'M2 Pro/32GB/1TB', price: 249900, color: 'Silver' },
      { id: 14, name: 'M2 Max/64GB/2TB', price: 349900, color: 'Space Gray' }
    ]
  },
  'ipad-mini': {
    name: 'iPad mini',
    image: '/images/ipm.jpg',
    description: 'Compact powerhouse with A15 Bionic chip.',
    options: [
      { id: 15, name: 'WiFi 64GB', price: 49900, color: 'Space Gray' },
      { id: 16, name: 'WiFi 256GB', price: 64900, color: 'Purple' },
      { id: 17, name: '5G 256GB', price: 79900, color: 'Starlight' }
    ]
  },
  'ipad-pro': {
    name: 'iPad Pro',
    image: '/images/ipp.jpg',
    description: 'The ultimate iPad experience with M2 chip.',
    options: [
      { id: 18, name: '11-inch 128GB', price: 79900, color: 'Space Gray' },
      { id: 19, name: '11-inch 1TB', price: 149900, color: 'Silver' },
      { id: 20, name: '12.9-inch 2TB', price: 229900, color: 'Space Gray' }
    ]
  }
};


const BuyPage = () => {
  const { productId } = useParams();
  const product = products[productId];
  const { addToCart, updateQuantity, removeFromCart, cartItems } = useCart();

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }


  const getQuantity = (optionId) => {
    // Find item by ID or create a composite ID strategy. 
    // Since StorePage uses generated IDs, we should align or use a consistent ID strategy.
    // Looking at CartContext, it adds items with whatever ID is passed.
    // Let's use existing option.id as the unique identifier if it's unique globally, 
    // BUT StorePage uses string IDs like 'iphone-16'. 
    // To distinguish options here, we should probably construct a unique ID for the cart item.
    // However, for simplicity and to match the existing 'id' based logic:
    // Let's assume option.id is unique enough or we map it. 
    // Actually, looking at the data, option IDs are 1, 2, 3... which might collide if other products use 1, 2, 3.
    // Safe bet: use a composite ID for the cart item.
    const cartItemId = `${productId}-${optionId}`;
    const item = cartItems.find(item => item.id === cartItemId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (option) => {
    addToCart({
      id: `${productId}-${option.id}`,
      name: `${product.name} - ${option.name} (${option.color})`,
      price: `₹${option.price.toLocaleString()}`,
      numericPrice: option.price,
      image: product.image,
      quantity: 1
    });
  };

  const handleIncrease = (option) => {
    const cartItemId = `${productId}-${option.id}`;
    const currentQty = getQuantity(option.id);
    updateQuantity(cartItemId, currentQty + 1);
  };

  const handleDecrease = (option) => {
    const cartItemId = `${productId}-${option.id}`;
    const currentQty = getQuantity(option.id);
    if (currentQty <= 1) {
      removeFromCart(cartItemId);
    } else {
      updateQuantity(cartItemId, currentQty - 1);
    }
  };

  return (
    <div className="buy-page">
      <div className="buy-header">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
      </div>

      <div className="product-display">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </div>

      <div className="product-options">
        {product.options.map((option) => {
          const qty = getQuantity(option.id);
          return (
            <div key={option.id} className="option-card">
              <div className="option-header">
                <h3>{option.name}</h3>
                <p className="option-color">{option.color}</p>
              </div>
              <p className="price">₹{option.price.toLocaleString()}</p>

              {qty > 0 ? (
                <div className="quantity-selector">
                  <button
                    className="quantity-btn minus"
                    onClick={() => handleDecrease(option)}
                    aria-label="Decrease quantity"
                  >
                    <FaMinus />
                  </button>
                  <span className="quantity">{qty}</span>
                  <button
                    className="quantity-btn plus"
                    onClick={() => handleIncrease(option)}
                    aria-label="Increase quantity"
                  >
                    <FaPlus />
                  </button>
                </div>
              ) : (
                <button
                  className="buy-button"
                  onClick={() => handleAddToCart(option)}
                >
                  <FaShoppingCart className="cart-icon" /> Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyPage;
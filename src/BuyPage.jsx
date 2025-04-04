import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';

const products = {
  'iphone-16': {
    name: 'iPhone 16',
    image: '/images/ip161.jpg',
    description: 'The all-new iPhone 16 with A18 chip, advanced camera system, and all-day battery life.',
    options: [
      { id: 1, name: '128GB', price: 799, color: 'Space Black' },
      { id: 2, name: '256GB', price: 899, color: 'Silver' },
      { id: 3, name: '512GB', price: 1099, color: 'Gold' }
    ]
  },
  'iphone-16-pro': {
    name: 'iPhone 16 Pro',
    image: '/images/ip16pro2.jpg',
    description: 'Pro camera system, ProMotion display, and the ultimate iPhone experience.',
    options: [
      { id: 4, name: '256GB', price: 999, color: 'Graphite' },
      { id: 5, name: '512GB', price: 1199, color: 'Pacific Blue' },
      { id: 6, name: '1TB', price: 1399, color: 'Rose Gold' }
    ]
  },
  'watch': {
    name: 'Apple Watch Series 9',
    image: '/images/apw.jpg',
    description: 'The most advanced Apple Watch yet with blood oxygen monitoring and always-on display.',
    options: [
      { id: 7, name: '41mm', price: 399, color: 'Midnight' },
      { id: 8, name: '45mm', price: 429, color: 'Starlight' }
    ]
  },
  'macbook-air': {
    name: 'MacBook Air',
    image: '/images/mba.jpg',
    description: 'Incredibly thin and light with the power of M2 chip.',
    options: [
      { id: 9, name: 'M2/8GB/256GB', price: 999, color: 'Space Gray' },
      { id: 10, name: 'M2/8GB/512GB', price: 1199, color: 'Silver' },
      { id: 11, name: 'M2/16GB/512GB', price: 1399, color: 'Midnight' }
    ]
  },
  'macbook-pro': {
    name: 'MacBook Pro',
    image: '/images/mbp.jpg',
    description: 'Supercharged for pros with M2 Pro or M2 Max chip.',
    options: [
      { id: 12, name: 'M2 Pro/16GB/512GB', price: 1999, color: 'Space Gray' },
      { id: 13, name: 'M2 Pro/32GB/1TB', price: 2499, color: 'Silver' },
      { id: 14, name: 'M2 Max/64GB/2TB', price: 3499, color: 'Space Gray' }
    ]
  },
  'ipad-mini': {
    name: 'iPad mini',
    image: '/images/ipm.jpg',
    description: 'Compact powerhouse with A15 Bionic chip.',
    options: [
      { id: 15, name: 'WiFi 64GB', price: 499, color: 'Space Gray' },
      { id: 16, name: 'WiFi 256GB', price: 649, color: 'Purple' },
      { id: 17, name: '5G 256GB', price: 799, color: 'Starlight' }
    ]
  },
  'ipad-pro': {
    name: 'iPad Pro',
    image: '/images/ipp.jpg',
    description: 'The ultimate iPad experience with M2 chip.',
    options: [
      { id: 18, name: '11-inch 128GB', price: 799, color: 'Space Gray' },
      { id: 19, name: '11-inch 1TB', price: 1499, color: 'Silver' },
      { id: 20, name: '12.9-inch 2TB', price: 2299, color: 'Space Gray' }
    ]
  }
};

const BuyPage = () => {
  const { productId } = useParams();
  const product = products[productId];
  const [quantities, setQuantities] = useState({});

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  const handleAddToCart = (optionId) => {
    setQuantities(prev => ({
      ...prev,
      [optionId]: (prev[optionId] || 0) + 1
    }));
  };

  const handleIncrease = (optionId) => {
    setQuantities(prev => ({
      ...prev,
      [optionId]: (prev[optionId] || 0) + 1
    }));
  };

  const handleDecrease = (optionId) => {
    setQuantities(prev => {
      const newQuantity = (prev[optionId] || 0) - 1;
      if (newQuantity <= 0) {
        const newQuantities = { ...prev };
        delete newQuantities[optionId];
        return newQuantities;
      }
      return {
        ...prev,
        [optionId]: newQuantity
      };
    });
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
        {product.options.map((option) => (
          <div key={option.id} className="option-card">
            <div className="option-header">
              <h3>{option.name}</h3>
              <p className="option-color">{option.color}</p>
            </div>
            <p className="price">${option.price.toLocaleString()}</p>
            
            {quantities[option.id] ? (
              <div className="quantity-selector">
                <button 
                  className="quantity-btn minus" 
                  onClick={() => handleDecrease(option.id)}
                  aria-label="Decrease quantity"
                >
                  <FaMinus />
                </button>
                <span className="quantity">{quantities[option.id]}</span>
                <button 
                  className="quantity-btn plus" 
                  onClick={() => handleIncrease(option.id)}
                  aria-label="Increase quantity"
                >
                  <FaPlus />
                </button>
              </div>
            ) : (
              <button 
                className="buy-button"
                onClick={() => handleAddToCart(option.id)}
              >
                <FaShoppingCart className="cart-icon" /> Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyPage;
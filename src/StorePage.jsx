import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import './App.css';

const products = [
  { id: 'iphone-16', name: 'iPhone 16', image: '/images/ip161.jpg', price: 'From ₹79,900', numericPrice: 79900 },
  { id: 'iphone-16-pro', name: 'iPhone 16 Pro', image: '/images/ip16pro1.jpg', price: 'From ₹119,900', numericPrice: 119900 },
  { id: 'watch', name: 'Apple Watch Series 9', image: '/images/apw.jpg', price: 'From ₹41,900', numericPrice: 41900 },
  { id: 'macbook-air', name: 'MacBook Air', image: '/images/mba.jpg', price: 'From ₹99,900', numericPrice: 99900 },
  { id: 'macbook-pro', name: 'MacBook Pro', image: '/images/mbp.jpg', price: 'From ₹169,900', numericPrice: 169900 },
  { id: 'ipad-mini', name: 'iPad mini', image: '/images/ipm.jpg', price: 'From ₹49,900', numericPrice: 49900 },
  { id: 'ipad-pro', name: 'iPad Pro', image: '/images/ipp.jpg', price: 'From ₹81,900', numericPrice: 81900 },
  { id: 'airpods-pro', name: 'AirPods Pro', image: '/images/airpods-pro.jpg', price: 'From ₹24,900', numericPrice: 24900 },
  { id: 'airpods-max', name: 'AirPods Max', image: '/images/airpods-max.jpg', price: 'From ₹59,900', numericPrice: 59900 },
  { id: 'apple-tv', name: 'Apple TV', image: '/images/apple-tv.jpg', price: 'From ₹14,900', numericPrice: 14900 },
  { id: 'apple-tv-plus', name: 'Apple TV+', image: '/images/apple-tv-plus.jpg', price: 'From ₹99/month', numericPrice: 99 }
];

const StorePage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      numericPrice: product.numericPrice,
      image: product.image
    });
  };

  return (
    <div className="store-page">
      <div className="store-header">
        <h1>Apple Store</h1>
        <p>Shop the latest products and accessories</p>
        <Link to="/compare" className="compare-button">Compare Products</Link>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <Link to={`/learn/${product.id}`} className="view-product-button">
                  Learn More
                </Link>
                <button
                  className="view-product-button"
                  onClick={() => handleAddToCart(product)}
                  style={{ backgroundColor: '#30d158' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;

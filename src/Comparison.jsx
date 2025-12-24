import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Comparison = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const products = [
    { id: 'iphone-16', name: 'iPhone 16', price: 'From ₹79,900', display: '6.7-inch Super Retina XDR', chip: 'A18 Bionic', camera: 'Dual 48MP', battery: 'Up to 29 hours' },
    { id: 'iphone-16-pro', name: 'iPhone 16 Pro', price: 'From ₹119,900', display: '6.9-inch ProMotion XDR', chip: 'A18 Pro', camera: 'Triple 48MP', battery: 'Up to 32 hours' },
    { id: 'watch', name: 'Apple Watch Series 9', price: 'From ₹41,900', display: 'Always-On Retina', chip: 'S9 SiP', camera: 'N/A', battery: 'Up to 36 hours' },
    { id: 'macbook-air', name: 'MacBook Air', price: 'From ₹99,900', display: '13.6-inch Liquid Retina', chip: 'M2', camera: '1080p', battery: 'Up to 18 hours' },
    { id: 'macbook-pro', name: 'MacBook Pro', price: 'From ₹169,900', display: '14.2-inch Liquid Retina XDR', chip: 'M2 Pro/Max', camera: '1080p', battery: 'Up to 22 hours' },
    { id: 'ipad-mini', name: 'iPad mini', price: 'From ₹49,900', display: '8.3-inch Liquid Retina', chip: 'A15 Bionic', camera: '12MP', battery: 'Up to 10 hours' },
    { id: 'ipad-pro', name: 'iPad Pro', price: 'From ₹81,900', display: '11-inch/12.9-inch Liquid Retina XDR', chip: 'M2', camera: '12MP + 10MP', battery: 'Up to 10 hours' },
    { id: 'airpods-pro', name: 'AirPods Pro', price: 'From ₹24,900', display: 'N/A', chip: 'H2', camera: 'N/A', battery: 'Up to 6 hours' },
    { id: 'airpods-max', name: 'AirPods Max', price: 'From ₹59,900', display: 'N/A', chip: 'H1', camera: 'N/A', battery: 'Up to 20 hours' }
  ];

  const toggleProduct = (product) => {
    if (selectedProducts.some(p => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div className="comparison-page">
      <h1>Compare Products</h1>
      <p>Select up to 3 products to compare</p>

      <div className="product-selection">
        {products.map(product => (
          <div
            key={product.id}
            className={`product-card ${selectedProducts.some(p => p.id === product.id) ? 'selected' : ''}`}
            onClick={() => toggleProduct(product)}
          >
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProducts.length > 0 && (
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Features</th>
                {selectedProducts.map(product => (
                  <th key={product.id}>{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                {selectedProducts.map(product => (
                  <td key={product.id}>{product.price}</td>
                ))}
              </tr>
              <tr>
                <td>Display</td>
                {selectedProducts.map(product => (
                  <td key={product.id}>{product.display}</td>
                ))}
              </tr>
              <tr>
                <td>Chip</td>
                {selectedProducts.map(product => (
                  <td key={product.id}>{product.chip}</td>
                ))}
              </tr>
              <tr>
                <td>Camera</td>
                {selectedProducts.map(product => (
                  <td key={product.id}>{product.camera}</td>
                ))}
              </tr>
              <tr>
                <td>Battery Life</td>
                {selectedProducts.map(product => (
                  <td key={product.id}>{product.battery}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="comparison-actions">
        <Link to="/store" className="back-button">Back to Store</Link>
      </div>
    </div>
  );
};

export default Comparison; 
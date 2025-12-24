import React from 'react';
import { Link } from 'react-router-dom';

const ImageContainer = ({ imageSrc, overlayText, overlayText1, productId }) => {
  return (
    <div className="image-container">
      <img src={imageSrc} alt={overlayText} />
      <div className="overlay-text">{overlayText}</div>
      <div className="overlay-text1">{overlayText1}</div>
      <div className="button-container">
        <Link to={`/buy/${productId}`} className="button">Buy</Link>
        <Link to={`/learn/${productId}`} className="button" style={{ backgroundColor: 'white', color: 'blue' }}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ImageContainer;
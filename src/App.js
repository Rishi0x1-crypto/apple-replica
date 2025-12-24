import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import ImageContainer from './ImageContainer.jsx';
import BuyPage from './BuyPage.jsx';
import LearnPage from './LearnPage.jsx';
import SignIn from './SignIn.jsx';
import StorePage from './StorePage.jsx';
import CreateAccount from './CreateAccount.jsx';
import Comparison from './Comparison.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import './App.css';

const HomePage = () => (
  <div className="content">
    <ImageContainer
      imageSrc="images/hq720.jpg"
      overlayText="iPhone 16"
      overlayText1="Hello, Apple Intelligence."
      productId="iphone-16"
    />
    <ImageContainer
      imageSrc="images/iphone-16-pro_overview__ejy873nl8yi6_og.png"
      overlayText="iPhone 16 Pro"
      overlayText1="Hello, Apple Intelligence."
      productId="iphone-16-pro"
    />
    <ImageContainer
      imageSrc="images/welcome_hero_endframe__d71hj6st53gy_xlarge.jpg"
      overlayText="WATCH"
      overlayText1="New finish. Never Quit"
      productId="watch"
    />
  </div>
);

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Show loading for 1 second

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <LoadingSpinner className={isLoading ? 'visible' : ''} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy/:productId" element={<BuyPage />} />
        <Route path="/learn/:productId" element={<LearnPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/compare" element={<Comparison />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <AppContent />
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
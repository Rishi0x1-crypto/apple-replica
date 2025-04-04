import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';

const productDetails = {
  'iphone-16': {
    name: 'iPhone 16',
    image: '/images/ip161.jpg',
    description: 'Experience the next generation of iPhone with advanced AI capabilities, stunning camera system, and all-day battery life.',
    colors: ['Space Black', 'Silver', 'Gold', 'Rose Gold'],
    specs: {
      display: '6.7-inch Super Retina XDR display',
      chip: 'A18 Bionic chip with Neural Engine',
      camera: 'Advanced dual-camera system (48MP Wide, 12MP Ultra Wide)',
      battery: 'Up to 29 hours video playback',
      waterResistance: 'IP68 water and dust resistance'
    },
    features: [
      'Advanced AI processing for enhanced photography',
      'Cinematic mode now in 4K HDR',
      'Emergency SOS via satellite',
      'Face ID with advanced recognition',
      'iOS 18 with powerful new features'
    ]
  },
  'iphone-16-pro': {
    name: 'iPhone 16 Pro',
    image: '/images/ip16pro1.jpg',
    description: 'The most powerful iPhone ever with pro-grade cameras, titanium design, and groundbreaking performance.',
    colors: ['Titanium Gray', 'Titanium Blue', 'Titanium White', 'Titanium Black'],
    specs: {
      display: '6.9-inch ProMotion XDR display with Always-On',
      chip: 'A18 Pro chip with 6-core GPU',
      camera: 'Pro camera system (48MP Main, 12MP Ultra Wide, 12MP Telephoto)',
      battery: 'Up to 32 hours video playback',
      waterResistance: 'IP68 water and dust resistance'
    },
    features: [
      'Pro camera system with 5x optical zoom',
      'ProRes video capture up to 4K60',
      'Titanium aerospace-grade design',
      'Dynamic Island for alerts and activities',
      'iOS 18 Pro with exclusive features'
    ]
  },
  'watch': {
    name: 'Apple Watch Series 9',
    image: '/images/apw.jpg',
    description: 'Your ultimate health and fitness companion with advanced sensors and cellular connectivity.',
    colors: ['Midnight', 'Starlight', 'Silver', 'Product(RED)'],
    specs: {
      display: 'Always-On Retina LTPO OLED',
      chip: 'S9 SiP with 64-bit dual-core processor',
      sensors: 'Blood oxygen, ECG, temperature sensing',
      battery: 'Up to 36 hours battery life',
      waterResistance: 'Water resistant 50 meters'
    },
    features: [
      'Advanced health monitoring including ECG',
      'Temperature sensing for cycle tracking',
      'Crash Detection and Fall Detection',
      'WatchOS 10 with redesigned apps',
      'Customizable watch faces and bands'
    ]
  },
  'macbook-air': {
    name: 'MacBook Air',
    image: '/images/mba.jpg',
    description: 'Incredibly thin and light with the power of M2 chip for outstanding performance.',
    colors: ['Space Gray', 'Silver', 'Gold', 'Midnight'],
    specs: {
      display: '13.6-inch Liquid Retina display',
      chip: 'Apple M2 chip with 8-core CPU',
      memory: '8GB unified memory',
      storage: '256GB SSD (configurable up to 2TB)',
      battery: 'Up to 18 hours battery life'
    },
    features: [
      'Fanless design for silent operation',
      'MagSafe charging port',
      '1080p FaceTime HD camera',
      'Four-speaker sound system',
      'Touch ID for secure authentication'
    ]
  },
  'macbook-pro': {
    name: 'MacBook Pro',
    image: '/images/mbp.jpg',
    description: 'Supercharged for pros with M2 Pro or M2 Max chip for extreme performance.',
    colors: ['Space Gray', 'Silver'],
    specs: {
      display: '14.2-inch Liquid Retina XDR display',
      chip: 'Apple M2 Pro or M2 Max chip',
      memory: '16GB unified memory (up to 96GB)',
      storage: '512GB SSD (configurable up to 8TB)',
      battery: 'Up to 22 hours battery life'
    },
    features: [
      'ProMotion technology with adaptive refresh rates',
      'Six-speaker sound system with force-cancelling woofers',
      '1080p FaceTime HD camera',
      'HDMI port and SDXC card slot',
      'Touch Bar and Touch ID'
    ]
  },
  'ipad-mini': {
    name: 'iPad mini',
    image: '/images/ipm.jpg',
    description: 'Compact powerhouse with A15 Bionic chip and all-screen design.',
    colors: ['Space Gray', 'Pink', 'Purple', 'Starlight'],
    specs: {
      display: '8.3-inch Liquid Retina display',
      chip: 'A15 Bionic chip with Neural Engine',
      storage: '64GB or 256GB',
      camera: '12MP Wide camera, 12MP Ultra Wide front camera',
      battery: 'Up to 10 hours battery life'
    },
    features: [
      'Touch ID in top button',
      'USB-C connector',
      'Supports Apple Pencil (2nd generation)',
      '5G capable',
      'Landscape stereo speakers'
    ]
  },
  'ipad-pro': {
    name: 'iPad Pro',
    image: '/images/ipp.jpg',
    description: 'The ultimate iPad experience with M2 chip and ProMotion display.',
    colors: ['Space Gray', 'Silver'],
    specs: {
      display: '11-inch or 12.9-inch Liquid Retina XDR display',
      chip: 'M2 chip with 8-core CPU',
      storage: '128GB to 2TB options',
      camera: '12MP Wide + 10MP Ultra Wide + LiDAR Scanner',
      battery: 'Up to 10 hours battery life'
    },
    features: [
      'Face ID for secure authentication',
      'Thunderbolt / USB 4 port',
      'Pro cameras and LiDAR Scanner',
      '120Hz ProMotion technology',
      'Supports Magic Keyboard and Apple Pencil'
    ]
  },
  'airpods-pro': {
    name: 'AirPods Pro',
    image: '/images/airpods-pro.jpg',
    description: 'Active Noise Cancellation, Transparency mode, and Spatial Audio for an immersive listening experience.',
    colors: ['White'],
    specs: {
      battery: 'Up to 6 hours of listening time',
      charging: 'MagSafe Charging Case',
      connectivity: 'Bluetooth 5.3',
      features: 'Active Noise Cancellation, Transparency mode',
      waterResistance: 'IPX4 sweat and water resistant'
    },
    features: [
      'Active Noise Cancellation',
      'Transparency mode',
      'Spatial Audio with dynamic head tracking',
      'Adaptive EQ',
      'Sweat and water resistant'
    ]
  },
  'airpods-max': {
    name: 'AirPods Max',
    image: '/images/airpods-max.jpg',
    description: 'High-fidelity audio with Active Noise Cancellation and Spatial Audio for an unparalleled listening experience.',
    colors: ['Space Gray', 'Silver', 'Sky Blue', 'Green', 'Pink'],
    specs: {
      battery: 'Up to 20 hours of listening time',
      connectivity: 'Bluetooth 5.0',
      features: 'Active Noise Cancellation, Transparency mode',
      materials: 'Stainless steel frame, breathable knit mesh canopy',
      audio: 'High-fidelity audio with computational audio'
    },
    features: [
      'Active Noise Cancellation',
      'Transparency mode',
      'Spatial Audio with dynamic head tracking',
      'Digital Crown for volume control',
      'Comfortable over-ear design'
    ]
  },
  'apple-tv': {
    name: 'Apple TV',
    image: '/images/apple-tv.jpg',
    description: 'Stream your favorite shows, movies, and games in stunning 4K HDR with the power of tvOS.',
    colors: ['Black'],
    specs: {
      storage: '64GB or 128GB',
      resolution: '4K HDR',
      processor: 'A15 Bionic chip',
      connectivity: 'Wi-Fi 6, Ethernet, Bluetooth 5.0',
      ports: 'HDMI 2.1, Gigabit Ethernet, USB-C'
    },
    features: [
      '4K HDR with Dolby Vision',
      'Dolby Atmos sound',
      'Apple Arcade gaming',
      'tvOS with App Store',
      'Siri Remote with touch surface'
    ]
  },
  'apple-tv-plus': {
    name: 'Apple TV+',
    image: '/images/apple-tv-plus.jpg',
    description: 'Stream award-winning Apple Originals, including movies, series, and documentaries.',
    colors: ['N/A'],
    specs: {
      content: 'Apple Originals',
      quality: '4K HDR, Dolby Vision, Dolby Atmos',
      devices: 'Works on all Apple devices and select smart TVs',
      sharing: 'Family Sharing support',
      offline: 'Download to watch offline'
    },
    features: [
      'Award-winning Apple Originals',
      'Ad-free viewing experience',
      'Family Sharing for up to 6 people',
      'Download to watch offline',
      'Available on multiple devices'
    ]
  }
};

const LearnPage = () => {
  const { productId } = useParams();
  const product = productDetails[productId];

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-header">
        <h1>{product.name}</h1>
        <p className="product-tagline">Discover what makes it special</p>
      </div>
      
      <div className="product-hero">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      
      <div className="product-content">
        <div className="product-description">
          <h2>Overview</h2>
          <p>{product.description}</p>
        </div>
        
        <div className="product-specs">
          <h2>Technical Specifications</h2>
          <div className="specs-grid">
            {Object.entries(product.specs).map(([key, value]) => (
              <div className="spec-item" key={key}>
                <h4>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-features">
          <h2>Key Features</h2>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>
                <span className="feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="product-colors">
          <h2>Available Colors</h2>
          <div className="color-options">
            {product.colors.map((color, index) => (
              <div className="color-option" key={index}>
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: getColorHex(color) }}
                  title={color}
                />
                <span>{color}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-cta">
          <Link to={`/buy/${productId}`} className="buy-now-button">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

// Helper function for color swatches
function getColorHex(colorName) {
  const colors = {
    'Space Black': '#424245',
    'Silver': '#ebebe3',
    'Gold': '#f8e5cd',
    'Rose Gold': '#e6c7c2',
    'Titanium Gray': '#8a8a8e',
    'Titanium Blue': '#5e9cd3',
    'Titanium White': '#e9e9e2',
    'Titanium Black': '#1a1a1a',
    'Midnight': '#171e26',
    'Starlight': '#faf6f2',
    'Product(RED)': '#e23636',
    'Pink': '#ffb6c1',
    'Purple': '#e0b0ff',
    'Starlight': '#faf6f2'
  };
  return colors[colorName] || '#cccccc';
}

export default LearnPage;
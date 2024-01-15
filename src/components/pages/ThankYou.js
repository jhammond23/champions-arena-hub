import React from 'react';
import kittenBackground from '../media/kitten.png';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const backgroundStyle = {
    width: '100vw',
    height: 'calc(100vh - 80px)',
    background: `url(${kittenBackground}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'flex-end', // Align content to the bottom
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative', // Needed for absolute positioning of the children
  };

  const contentStyle = {
    position: 'absolute', // Absolutely position the content at the bottom
    bottom: '20px', // At the bottom of the parent container
    display: 'flex', // Use flexbox for the container
    flexDirection: 'column', // Items flow vertically
    justifyContent: 'center', // Distribute space between items
    alignItems: 'center', // Center items vertically
    width: '100%', // Full width
    padding: '20px', // Padding inside the container
  };

  const textBoxStyle = {
    textAlign: 'center',
    backgroundColor: 'rgba(230,180,126,.8)',
    padding: '20px',
    borderRadius: '25px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    color: '#333',
    fontSize: '1.5em',
    border: '3px solid #fff',
    lineHeight: '1.4',
    maxWidth: '600px', // Ensuring the text box is not too wide
  };

  const homeButtonStyle = {
    padding: '10px 20px',
    fontSize: '1.5em',
    backgroundColor: '#111',
    color: '#ecbc62',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    textDecoration: 'none',
    width: '200px', // Width of the button
    height: '100px', // Height of the button
    borderRadius: '25px', // Rounded corners for the button
    border: '3px solid #fff', // White border for the button
    margin: '20px',
  };

  const goHome = () => navigate('/');

  return (
    <div style={backgroundStyle}>
      <div style={contentStyle}>
        <div style={textBoxStyle}>
          <h1 style={{ fontFamily: 'Pacifico, cursive' }}>Thanks for using our link!</h1>
          <p style={{ fontFamily: 'cursive' }}>Your support is a-purr-eciated!</p>
        </div>
        <button className='homeKittenButton' onClick={goHome} style={homeButtonStyle}>
          Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;

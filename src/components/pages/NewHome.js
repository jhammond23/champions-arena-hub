import React, { useState, useEffect } from 'react';
import GuildCard from '../GuildCard';

const Scene = () => {
  const [isPostClicked, setIsPostClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [isExploreVisible, setIsExploreVisible] = useState(true); // State for Explore visibility
  const [exploreOpacity, setExploreOpacity] = useState(1); // State for Explore opacity
  const [isAnimating, setIsAnimating] = useState(false);
  const [isBlackCircle, setIsBlackCircle] = useState(false);
  
  const handleSphereClick = () => {
    setIsExploreVisible(false);
    setIsPostClicked(true);
    setIsAnimating(true);
  };
  
  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(false);
        setIsBlackCircle(true);
      }, 1000); // Duration of the white circle shrinking animation
    }
  }, [isAnimating]);
  
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  

  return (
    <div className='newhome'>
      <div className={`${isPostClicked ? 'postClickedScreen' : ''} ${isHovered ? 'hovered' : ''}`}>
        <div
          className={`explore ${isHovered ? 'hovered' : ''}`}
          style={{ opacity: exploreOpacity, transition: 'opacity 1s' }}
        >
        </div>

        {/* Small white circular div replacing the Canvas */}
        <div 
  className={`whiteCircle ${isAnimating ? 'animating' : ''}`} 
  onClick={handleSphereClick} 
  onMouseOver={handleHover} 
  onMouseOut={handleUnhover} 
  style={{
    width: '100px',
    height: '100px',
    backgroundColor: 'white',
    borderRadius: '50%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    opacity: 0.5,
    boxShadow: '0 0 15px 10px white',
    animation: isAnimating ? 'shrinkDisappear 1s forwards' : 'none'
  }}
></div>

{isBlackCircle && (
  <div 
    className="blackCircle"
    style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'black',
      borderRadius: '50%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      animation: 'growCover 1s forwards'
    }}
  ></div>
)}




        {isPostClicked && <div className="fade-in-text">Welcome to Mirandus Hub</div>}
      </div>
      <div className='spell'></div>
    </div>
  );
};

export default Scene;

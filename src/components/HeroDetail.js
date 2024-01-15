import React, { useState } from 'react';

const getRarityColor = (rarity) => {
  switch (rarity) {
    case 'legendary':
      return 'yellow';
    case 'epic':
      return 'purple';
    case 'rare':
      return 'blue';
    case 'uncommon':
      return 'green';
    case 'common':
      return 'white';
    default:
      return '#111'; // Default color
  }
};

const HeroDetail = ({ hero }) => {
  const [activeAbility, setActiveAbility] = useState('primaryAbility');
  const rarityColor = getRarityColor(hero.rarity);

  const abilityChildren = React.Children.toArray(hero.abilities.props.children);
  const isSmallScreen = window.innerWidth <= 568; // or any other breakpoint you prefer

  const activeAbilityInfo = abilityChildren.find(
    (ability) => ability.props.className === activeAbility
  );

  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${hero.image})`,
  };

  const nameStyle = {
    textAlign: 'center',
    fontSize: '2rem',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '25px',
  };

  const abilitiesContainer = {
    display: 'flex',
    justifyContent: 'center',
  };

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#111',
    color: 'white',
    boxShadow: '0 0 10px #5cb1e8', 
    border: '3px solid #e1b73f',
  };


  
  return (
    <div className="floating-card" style={cardStyle}>
      <h2 className="name-style">{hero.name}</h2>
      {/* Conditionally render the image based on screen size */}
      {!isSmallScreen && <img src={hero.image} alt={hero.name} className="image-style" />}
      <div className="abilities-container">
        <button
        className={`ability-button ${activeAbility === 'primaryAbility' ? 'active' : ''}`}
        onClick={() => setActiveAbility('primaryAbility')}
        >
        ⭐
        </button>
        <button
        className={`ability-button two-star ${activeAbility === 'secondaryAbility' ? 'active' : ''}`}
        onClick={() => setActiveAbility('secondaryAbility')}
        >
        {/* Empty content */}
        </button>
        <button
        className={`ability-button three-star ${activeAbility === 'tertiaryAbility' ? 'active' : ''}`}
        onClick={() => setActiveAbility('tertiaryAbility')}
        >
        ⭐ {/* This star will be in the middle */}
        </button>
        <button
        className={`ability-button ${activeAbility === 'passiveAbility' ? 'active' : ''}`}
        onClick={() => setActiveAbility('passiveAbility')}
        >
          <span className='passiveBubble'>
            P
          </span>
        </button>


      </div>
      <div className="ability-info">{activeAbilityInfo}</div>
      <div className="stats-section">
        {/* Stats code here */}
        <p><strong><span className='header'>Sun:</span></strong> {hero.stats.sun}</p>
        <p><strong><span className='header'>Star:</span></strong> {hero.stats.star}</p>
        <p><strong><span className='header'>Moon:</span></strong> {hero.stats.moon}</p>
        <p><strong><span className='header'>HP:</span></strong> {hero.stats.hp}</p>
        <p><strong><span className='header'>ATK:</span></strong> {hero.stats.atk}</p>
        <p><strong><span className='header'>DEF:</span></strong> {hero.stats.def}</p>
        <p><strong><span className='header'>Perception:</span></strong> {hero.stats.perception}</p>
        <p><strong><span className='header'>Craft:</span></strong> {hero.stats.craft}</p>
        <p><strong><span className='header'>Region:</span></strong> {hero.stats.region}</p>
      </div>
    </div>
  );
};

export default HeroDetail;







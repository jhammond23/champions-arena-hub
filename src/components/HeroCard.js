import React from 'react';
import Tilt from 'react-parallax-tilt';
import arrow from './media/arrow.png';

const getRarityColor = (rarity) => {
  switch (rarity) {
    case 'legendary':
      return '#e1b73f';
    case 'epic':
      return '#a359c4';
    case 'rare':
      return '#50a0d1';
    case 'uncommon':
      return '#119a00';
    case 'common':
      return 'white';
    default:
      return '#111';
  }
};

const HeroCard = ({ hero, onSelect, isActive, isNewHero }) => {
  const rarityColor = getRarityColor(hero.rarity);
  let displayedName = hero.name;
  const isBelow1400px = window.innerWidth < 1400;

  const cardStyle = {
    width: '150px',
    height: '200px',
    border: `3px solid ${rarityColor}`,
    padding: '10px',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundImage: `url(${hero.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxShadow: `0 0 10px ${rarityColor}`,
    backgroundSize: 'cover',
    margin: '0 auto',
    transform: isBelow1400px ? 'scale(0.85)' : 'none',
  };

  const cardClassName = `card ${isActive ? 'active-card card-spin' : ''} ${isNewHero ? 'new-hero' : ''}`;

  const titleStyle = {
    color: `${rarityColor}`,
    textAlign: 'center',
    fontSize: isBelow1400px ? '1rem' : '1.3rem',
    marginTop: isBelow1400px ? '0' : '10px',
    marginBottom: '20px',
    textShadow: '0 0 10px #5cb1e8'
  };

  if (React.isValidElement(hero.name)) {
    displayedName = hero.name.props.children
      .filter((child) => typeof child === "string")
      .join("");
  }

  const CardContainer = isBelow1400px ? 'div' : 'Tilt';

  return (
    <CardContainer>
      <div
        style={cardStyle}
        className={cardClassName}
        onClick={() => {
          console.log('Hero clicked:', hero);
          onSelect(hero);
        }}
      >
        {isActive && (
          <div className="arrow">
            <img src={arrow} alt="arrow" />
          </div>
        )}
      </div>
      <h3 className='heroCardName' style={titleStyle}>
        {displayedName.split(' - ')[0]}
      </h3>
    </CardContainer>
  );
};

export default HeroCard;
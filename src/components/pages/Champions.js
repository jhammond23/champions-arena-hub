import React, { useState, useEffect } from 'react';
import HeroCard from '../HeroCard';
import HeroDetail from '../HeroDetail';
import { heroes, newHeroes } from '../Heroes'; // Import newHeroes
import scroll from '../media/Background-Scroll6.jpg.crdownload';
import './champions.css';

const getRarityColor = (rarity) => {
  switch (rarity) {
    case 'legendary':
      return '#ecbc62';
    case 'epic':
      return '#410e58';
    case 'rare':
      return '#1c5d84';
    case 'uncommon':
      return '#119a00';
    case 'common':
      return 'white';
    default:
      return '#111'; // Default color
  }
};


const HeroPage = ({ heroes = [] }) => {
  const [selectedHero, setSelectedHero] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const isBelow1400px = window.innerWidth < 1400;
  const [animationState, setAnimationState] = useState(""); // "entering", "exiting", or ""
  const [isNewHeroMenuHidden, setIsNewHeroMenuHidden] = useState(false);


  useEffect(() => {
    const detailContainer = document.querySelector(".heroDetailContainer");

    if (isMenuHidden) {
      detailContainer.classList.add("show");
      detailContainer.classList.remove("hide");
    } else {
      detailContainer.classList.add("hide");
      detailContainer.classList.remove("show");
    }
  }, [isMenuHidden]);


  const handleShowMenu = () => {
    setAnimationState("exiting");
    setTimeout(() => {
      setSelectedHero(null);
      setIsMenuHidden(false);
    }, 500);
  };

  useEffect(() => {
    const newHeroesContainer = document.querySelector(".newHeroesContainer");
  
    if (isNewHeroMenuHidden) {
      newHeroesContainer.classList.add("hide");
      newHeroesContainer.classList.remove("show");
    } else {
      newHeroesContainer.classList.add("show");
      newHeroesContainer.classList.remove("hide");
    }
  }, [isNewHeroMenuHidden]);


  console.log(`Selected Hero: ${selectedHero ? selectedHero.id : 'none'}`);

  const heroPageStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#111',
    backgroundImage: 'linear-gradient(#3774b117 .1em, transparent .1em), linear-gradient(90deg, #3774b117 .1em, transparent .1em)',
    backgroundPosition: '0% 0%',
    backgroundSize: '12vmin 12vmin',
    minHeight: '40vh',
    maxHeight: 'max-content',
    left: '0px',
    position: 'absolute',
    width: '100vw',
    zIndex: '-1',
  };

  const heroCardsStyle = {
    ...isBelow1400px ? {
      display: 'flex',
      gap: '20px',
      padding: '20px',
      overflowX: 'scroll',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      backgroundColor: 'black',
      borderTop: '3px solid #e1b73f',
      borderBottom: '3px solid #e1b73f',
      boxShadow: 'inset 0 0 20px #e1b73f, 0 0 10px #5cb1e8',
      marginBottom: '8vh',

    } : {
      width: '60%',
      gap: '20px',
      padding: '20px',
      marginRight: '40%',
      paddingRight: '5%',
      paddingTop: '20px',
      height: 'auto',
      paddingLeft: '2%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    }
  };



  const rarityColor = selectedHero ? getRarityColor(selectedHero.rarity) : '#111';

  const heroDetailContainerStyle = {
    position: 'fixed',
    overflowY: 'auto',
    right: 0,
    top: '80px',
    height: '120vh',
    padding: '20px',
    backgroundImage: `url(${scroll})`,
    boxShadow: `inset 0 0 20px ${rarityColor}`,
    border: `3px solid ${rarityColor}`,
    width: isBelow1400px && isMenuHidden ? '100%' : '40%',
    display: 'flex',
    alignItems: 'flex-start',  // This starts the content from the top
    justifyContent: 'center',
    overflowX: 'hidden',
    overflowY: 'scroll',  // This ensures that the container is scrollable on the Y-axis


  };


  const searchBarContainerStyle = {
    width: isBelow1400px ? '80%' : '60%',
    padding: '20px',
    paddingTop: '80px', // To avoid overlapping with the navbar
    paddingBottom: '40px',
    margin: isBelow1400px ? '0 auto' : '0%',

  };

  const searchBarStyle = {
    width: isBelow1400px ? '100%' : '60%',
    padding: '12px',
    margin: '0 auto',
    display: 'block',
    borderRadius: '25px',
    border: '3px solid #e1b73f', // Set the border style
    backgroundColor: '#333',
    color: 'white',
    boxShadow: '0 0 10px #5cb1e8', // Add a shadow to the card
  };

  const [isNewHero, setIsNewHero] = useState(false);


  return (
    <div style={heroPageStyle} className='r-background'>
      <div style={searchBarContainerStyle}>
        <input
          type="text"
          placeholder="Search heroes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchBarStyle}
          className="searchBar"
        />
      </div>

      {isBelow1400px ? (
        ['legendary', 'epic', 'rare', 'uncommon', 'common'].map(rarity => (
          <div key={rarity} className={`rarity-row rarity-${rarity}`}>
            <h3 style={{ color: '#e1b73f', textShadow: '0 0 10px #5cb1e8' }} className='heroRarity'>
              {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
            </h3>
            <div className="scrollable-row" style={heroCardsStyle}>
              {heroes
                .filter(hero => {
                  if (hero.rarity !== rarity) return false;
                  if (!hero.name) return false;
                  if (typeof hero.name === 'string') {
                    return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
                  }
                  if (React.isValidElement(hero.name)) {
                    return hero.name.props.children.join("").toLowerCase().includes(searchTerm.toLowerCase());
                  }
                  return false;
                })
                .map(hero => {
                  const isActive = selectedHero && hero.id === selectedHero.id;
                  return (
                    <HeroCard
                      key={hero.id}
                      hero={hero}
                      onSelect={(selected) => {
                        setSelectedHero(selected);
                        setAnimationState('entering');
                        setTimeout(() => {
                          setIsMenuHidden(true);
                        }, 500);
                      }}
                      isActive={isActive}
                    />
                  );
                })}
            </div>
          </div>
        ))
      ) : (
        <div className={`cardParent ${isMenuHidden && !isBelow1400px ? 'hide' : ''}`} style={heroCardsStyle}>
          {heroes.length > 0 ? (
            heroes
              .filter(hero => {
                if (!hero.name) return false;
                if (typeof hero.name === 'string') {
                  return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
                }
                if (React.isValidElement(hero.name)) {
                  return hero.name.props.children.join("").toLowerCase().includes(searchTerm.toLowerCase());
                }
                return false;
              })
              .map(hero => {
                const isActive = selectedHero && hero.id === selectedHero.id;
                return (
                  <HeroCard
                    key={hero.id}
                    hero={hero}
                    onSelect={(selected) => {
                      setSelectedHero(selected);
                      setAnimationState('entering');
                      setTimeout(() => {
                        setIsMenuHidden(true);
                      }, 500);
                    }}
                    isActive={isActive}
                  />
                );
              })
          ) : (
            <p>No heroes available</p>
          )}
        </div>
      )}



      <div style={heroDetailContainerStyle} className={`heroDetailContainer ${isMenuHidden ? 'show' : 'hide'}`}>
        {selectedHero && <HeroDetail hero={selectedHero} />}
      </div>

{/* New Champions section */}
<h2 className='unreleasedChampsHeader'>Unreleased Champions</h2>
<div className={`newHeroesContainer ${isMenuHidden && isBelow1400px ? 'hide' : ''}`} style={heroCardsStyle}>
  {newHeroes.length > 0 ? (
    newHeroes
      .filter(hero => {
        if (!hero.name) return false;
        if (typeof hero.name === 'string') {
          return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
        if (React.isValidElement(hero.name)) {
          return hero.name.props.children.join("").toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      })
      .map(hero => {
        const isActive = selectedHero && hero.id === selectedHero.id;
        return (
          <HeroCard
            key={hero.id}
            hero={hero}
            onSelect={(selected) => {
              setSelectedHero(selected);
              setAnimationState('entering');
              setTimeout(() => {
                setIsMenuHidden(true); // This now refers to hiding the newHeroes menu
              }, 500);
            }}
            isActive={isActive}
            className="new-hero"
          />
        );
      })
  ) : (
    <p>No new heroes available</p>
  )}

      </div>

    </div>
  );


};

export default HeroPage;

import React from 'react';
import towerOfTrialsMap from '../media/TowerofTrials-map.png'; // Ensure this path matches your actual file structure

const TowerOfTrials = () => {
  return (
    <div className='center' style={{ position: 'relative' }}>
      <img src={towerOfTrialsMap} alt="Tower of Trials Map" style={{ width: '100%', height: 'auto', display: 'block', filter: 'blur(8px)' }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
              }}>
        <div className='r-deedInfoCont'>
          {/* Tower of Trials Header */}
          <div className='r-deedNameBanner'>
            <h1 className='r-deedName'>Tower of Trials</h1>
            <h2 className='r-subHeader'>Loot</h2>
            <p style={{ color: 'white', textAlign: 'left' }}>
            In the Tower of Trials, your efforts are rewarded with Mileage, a currency that unlocks exclusive items in the Tower of Trials/Mayhem shop. As you ascend the Tower's floors, you'll accumulate Mileage, granting access to increasingly prestigious rewards. Whether it's rare equipment, powerful artifacts, or unique consumables, the shop offers a variety of treasures that can significantly boost your capabilities. Keep climbing to ensure you don't miss out on these valuable items that can't be found anywhere else in the game.
            </p>

          {/* Daily Challenges */}
            <h2 className='r-subHeader'>Daily Challenges</h2>
            <p style={{ color: 'white', textAlign: 'left' }}>
            Every day, the Tower of Trials presents up to 10 unique challenges, each with its own set of conditions and prerequisites. Completing these challenges is the key to unlocking new Trials on each floor.
            </p>

          {/* Floors and Reset */}
            <h2 className='r-subHeader'>Tower Structure</h2>
            <p style={{ color: 'white', textAlign: 'left' }}>
              With a total of 50 floors, the Tower offers ample opportunity for glory. Resets are happen monthly offering fresh challenges regularly. Each floor has its own unique set of challenges, so you'll need to adapt your strategy as you climb. The higher you go, the more Mileage you'll earn, and the better the rewards you'll find in the shop.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TowerOfTrials;

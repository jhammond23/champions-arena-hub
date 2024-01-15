import React from 'react';

import VPCalc from '../../mirandushub/pics/CA/VPEarnings.png';

const ArenaInfo = () => {
  return (
    <div className='center'>
      <div className='r-background'>
        <div className='r-deedInfoCont'>
          <div className='r-deedNameBanner'>
            <h1 className='r-deedName'>Arena</h1>
            <p style={{ color: 'white', textAlign: 'center' }}>
              The Arena is where Players compete for Lapis, Victory Points, and Seasonal Rewards! Victory Points are earned by winning battles in the Arena. The amount of Victory Points earned is based on the League you are in and the NFTs you use in your team. The Arena is open 24/7, but the Season resets every 2 weeks. At the end of each Season, the Top 1000 players receive special rewards. You must participate in at least 10 battles during the season to receive ranking rewards.
            </p>
          </div>

          {/* Seasonal Rewards */}
          <div className='r-deedNameBanner'>
            <h3 className='r-subHeader'>Seasonal Rewards</h3>
            <p style={{ color: 'white' }}>
              Top 1000 receive special rewards. You must participate in at least 10 battles during the season to receive ranking rewards.
            </p>
            <table style={{ color: 'white', width: '100%', border: '1px solid white' }}>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Rewards</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Rank 1</td><td>11K gems, 3 Legend-Myth chests, 3 Scrolls of Minting</td></tr>
                <tr><td>Rank 2</td><td>8K gems, 2 Legend-Myth chests, 2 Scrolls of Minting</td></tr>
                <tr><td>Rank 3</td><td>5.5K gems, 2 Legend-Myth chests, 2 Scrolls of Minting</td></tr>
                <tr><td>Rank 4-15</td><td>4K gems, 2 Epic-Myth chests, 2 Scrolls of Minting</td></tr>
                <tr><td>Rank 16-50</td><td>2.5K gems, 1 Epic-Myth chest, 2 Scrolls of Minting</td></tr>
                <tr><td>Rank 51-100</td><td>2.5K gems, 1 Magic-Myth chest, 1 Scroll of Minting</td></tr>
                <tr><td>Rank 101-200</td><td>1.5K gems, 1 Magic-Myth chest, 1 Scroll of Minting</td></tr>
                <tr><td>Rank 201-350</td><td>800 gems, 2 Normal-Legendary chests</td></tr>
                <tr><td>Rank 351-600</td><td>400 gems, 1 Normal-Legendary chest</td></tr>
                <tr><td>Rank 601-1000</td><td>200 gems, 1 Normal-Epic chest</td></tr>
              </tbody>
            </table>

          </div>

          {/* Earning Lapis */}
          <div className='r-deedNameBanner'>
            <h3 className='r-subHeader'>Earning Lapis</h3>
            <p style={{ color: 'white' }}>
              Lapis can be earned by completing battles in the Arena. The amount of Lapis earned is based on the League you are in.
            </p>
            <table style={{ color: 'white', width: '100%', border: '1px solid white' }}>
              <thead>
                <tr>
                  <th>League</th>
                  <th>Lapis Reward</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Bronze - Below 1400</td><td>10</td></tr>
                <tr><td>Silver - 1400</td><td>10</td></tr>
                <tr><td>Gold - 1600</td><td>10</td></tr>
                <tr><td>Platinum - 1800</td><td>10</td></tr>
                <tr><td>Diamond - 2000</td><td>30</td></tr>
                <tr><td>Master - 2200</td><td>50</td></tr>
                <tr><td>Champion - 2400</td><td>60</td></tr>
              </tbody>
            </table>
          </div>

          {/* Earning Victory Points */}
          <div className='r-deedNameBanner'>
            <h3 className='r-subHeader'>Earning Victory Points</h3>
            <p style={{ color: 'white' }}>
              Victory points can only be earned when at least 1 NFT or NFT-ready Champion is used on the player's team in an arena match.
            </p>
            <p style={{ color: 'white' }}>
              Victory Points = Base VP x (Competitive Score Multiplier + NFT Multipliers) x (1 + (New Champions Multiplier))
            </p>
            <p style={{ color: 'white' }}>
              Base VP: 10 VP
            </p>
            <p style={{ color: 'white' }}>
              New Champion Multiplier: 0.15x Per Champion
            </p>
            <table style={{ color: 'white', width: '100%', border: '1px solid white' }}>
              <thead>
                <tr>
                  <th>League</th>
                  <th>Player Percentile</th>
                  <th>Competitive Score Multiplier</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Bronze - Below 1400</td><td>0% - 40%</td><td>0.05x</td></tr>
                <tr><td>Silver - 1400</td><td>40% - 65%</td><td>0.8x</td></tr>
                <tr><td>Gold - 1600</td><td>65% - 80%</td><td>2.5x</td></tr>
                <tr><td>Platinum - 1800</td><td>80% - 90%</td><td>4x</td></tr>
                <tr><td>Diamond - 2000</td><td>90% - 95%</td><td>15x</td></tr>
                <tr><td>Master - 2200</td><td>95% - 98.5%</td><td>24x</td></tr>
                <tr><td>Champion - 2400</td><td>98.5% - 100%</td><td>30x</td></tr>
              </tbody>
            </table>

            <h3 className='r-subHeader'>NFT Rarity</h3>
            <table style={{ color: 'white', width: '100%', border: '1px solid white' }}>
              <thead>
                <tr>
                  <th>Rarity</th>
                  <th>NFT Multiplier Addition</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Common</td><td>0.05</td></tr>
                <tr><td>Uncommon</td><td>0.1</td></tr>
                <tr><td>Rare</td><td>0.2</td></tr>
                <tr><td>Epic</td><td>0.35</td></tr>
                <tr><td>Legendary</td><td>0.7</td></tr>
              </tbody>
            </table>

            {/* VP Calculation Examples */}

            <h3 className='r-subHeader'>VP Calculation Examples</h3>
            <div style={{ color: 'white', padding: '10px', border: '1px solid white', borderRadius: '5px' }}>
              {/* Single Example */}
              <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h4 style={{ textDecoration: 'underline', color: '#ecbc62' }}>Silver player wins a match with one Common NFT and two Rare NFTs:</h4>
                <p>VP Multiplier = (0.8 Silver Bracket Multiplier + 0.05 Common Multiplier + 0.2 Rare Multiplier + 0.2 Rare Multiplier) = 1.25</p>
                <p>VPs Earned = 1.25*10 Base VPs = 12.5 VPs earned</p>
              </div>

              {/* ...repeat for each example */}
              <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h4 style={{ textDecoration: 'underline', color: '#ecbc62' }}>Diamond player wins a match with three Uncommon NFTs and one Legendary NFT:</h4>
                <p>VP Multiplier = (15 Diamond Bracket Multiplier + 0.1 Uncommon multiplier + 0.1 Uncommon multiplier + 0.1 Uncommon multiplier + 0.7 God multiplier) = 16</p>
                <p>VPs Earned = 16*10 Base VPs = 160 VPs earned</p>
              </div>

              <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h4 style={{ textDecoration: 'underline', color: '#ecbc62' }}>Diamond player wins a match with three Uncommon star NFTs and one “New” Legendary NFT:</h4>
                <p>VP Multiplier = (15 Diamond Bracket Multiplier + 0.1 Uncommon multiplier + 0.1 Uncommon multiplier + 0.1 Uncommon multiplier + 0.7 Legendary multiplier) * 1.15x New Champion Multiplier = 18.4</p>
                <p>VPs Earned = 18.4*10 Base VPs = 184 VPs earned</p>
              </div>

              <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h4 style={{ textDecoration: 'underline', color: '#ecbc62' }}>Bronze player wins with 4 Legendary NFTs:</h4>
                <p>VP Multiplier = (0.05 Bronze Bracket Multiplier + 0.7 God NFT Multiplier + 0.7 Legendary Multiplier + 0.7 Legendary Multiplier + 0.7 Legendary Multiplier) = 2.85</p>
                <p>VPs earned = 2.85*10 Base VPs = 28.5 VPs Earned</p>
              </div>

              <img src={VPCalc} alt='VP Calculation' style={{ width: '100%' }} />
            </div>
          </div>


          {/* Add additional sections here... */}
        </div>
      </div>
    </div>
  );
};

export default ArenaInfo;

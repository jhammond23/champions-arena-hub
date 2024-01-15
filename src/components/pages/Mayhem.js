import React from 'react';
import mayhemPic from '../media/mayhem-map.png';

const Mayhem = () => {
    return (
        <div className='center' style={{ position: 'relative', width: '100%', height: '130vh', backgroundImage: `url(${mayhemPic})`, backgroundSize: 'cover' }}>
            {/* Add an overlay for text readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
                <div className='r-deedInfoCont'>

                    {/* Mayhem Header */}
                    <div className='r-deedNameBanner'>
                        <h1 className='r-deedName'>Mayhem Guide</h1>

                        {/* Mines and Raids */}
                        <h2 className='r-subHeader'>Mines and Raids</h2>
                        <p style={{ color: 'white', textAlign: 'left' }}>
                            In Mayhem, you'll have the opportunity to earn Mileage for special rewards in the Tower of Trials/Mayhem shop. While Mines provide Lapis, Raids can yield special rewards like the "Raid Champion's Soulstone," which may contain soulstones of a Champion encountered during the raid.
                        </p>

                        {/* Essence and Exploration */}
                        <h2 className='r-subHeader'>Essence and Exploration</h2>
                        <p style={{ color: 'white', textAlign: 'left' }}>
                            Essence is a crucial resource for explorations in Mayhem. Accumulate it by dismantling Champions or through quest rewards. Use it wisely to discover Raids, which can be a source of Lapis, significant amounts of Gold, Champion Experience, and occasionally, a Champion.
                        </p>

                        {/* Exploration Level Requirements */}
                        <h2 className='r-subHeader'>Exploration Level Requirements</h2>
                        <table style={{ color: 'white', width: '100%', border: '1px solid white', textAlign: 'left' }}>
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>Perception (Stat)</th>
                                    <th>Champions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>LV1</td><td>10</td><td>4</td></tr>
                                <tr><td>LV2</td><td>300</td><td>4</td></tr>
                                <tr><td>LV3</td><td>450</td><td>4</td></tr>
                                <tr><td>LV4</td><td>550</td><td>4</td></tr>
                            </tbody>
                        </table>
                        <p style={{ color: 'white', textAlign: 'left' }}>
                            Possible rewards from explorations include Champion Experience, Gold, and Mileage.
                        </p>

                        {/* Recommended Strategy */}
                        <h2 className='r-subHeader'>Recommended Strategy</h2>
                        <ul style={{ color: 'white', textAlign: 'left' }}>
                            <li>If your goal is Lapis: Engage in the highest-level Mines you can manage.</li>
                            <li>If Raids are challenging on your own and you're after AFK chest rewards: Use 'Scan World' to find and assist in Raids initiated by others.</li>
                            <li>If you're strong enough for level 3 or higher Raids and desire AFK chest rewards: Consider starting Raids yourself for better rewards.</li>
                            <li>Remember to claim your rewards promptly: They expire seven days after the event's start.</li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mayhem;

import React from 'react';
import campaignMap from '../media/campaign-map.png';

const Campaign = () => {
    return (
        <div className='center' style={{ position: 'relative' }}>
            <img src={campaignMap} alt="Campaign Map" style={{ width: '100%', height: 'auto', display: 'block', filter: 'blur(8px)' }} />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,

            }}>
                <div className='r-deedInfoCont'>
                    {/* Campaign Header */}
                    <div className='r-deedNameBanner'>
                        <h1 className='r-deedName'>Campaign</h1>
                        <h2 className='r-subHeader'>Recommended Strategy</h2>
                        <p style={{ color: 'white', textAlign: 'left' }}>
                            To get the upper hand in battle, it’s crucial to have a mix of heroes from all three unions on your team. This way, you’ll be ready for anything the enemy throws at you. If your team is too one-sided, you might find yourself at a disadvantage if you come across an opponent that's strong against your lineup. So spread out your choices to cover all bases and keep your opponents guessing.
                        </p>

                        {/* Recommended Strategy */}
                        <p style={{ color: 'white', textAlign: 'left' }}>
                            A proactive approach is important! Set your battles to auto and keep engaging until you get a victory. Persistence is your ally in the campaign. The more you play, the more you win.
                        </p>

                        {/* Campaign Advancement */}
                        <h2 className='r-subHeader'>Campaign Progression</h2>
                        <p style={{ color: 'white', textAlign: 'left' }}>
                            The further you get in the campaign, the better your AFK chest rewards become. The better your AFK chest rewards become, the more you can upgrade your heroes. The more you upgrade your heroes, the further you can get in the campaign. It’s a cycle of progression that will help you get stronger and stronger.

                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Campaign;

import React from 'react';

const Castle = () => {
    return (
        <div className='r-deedOuterCont'>
            <div className='r-deedInfoCont'>
                <section className='section' id='Castle'>
                    <div className='r-deedNameBanner'>
                        <h2 className='r-deedName'>Castle</h2>

                        {/* Overview of Castle */}
                        <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Castle Overview</h2>
                            <p style={{color:'white'}}>
                                The Castle is the heart of the estate, showcasing essential estate information, including the logo, notice, and fee rates. It's the primary interface for estate members.
                            </p>
                        </div>

                        {/* Estate Information */}
                        <div className='r-infoSection'>
                            <h2 className='r-subHeader'>Estate Information</h2>
                            <p style={{ color: 'white' }}>View the estate's logo, notices, and current fee rates. Essential information for all members is centrally located here. The amount of each estate's currency reserves are also listed here.</p>
                        </div>

                        {/* Member and Donation Management */}
                        <div className='r-infoSection'>
                            <h2 className='r-subHeader'>Members and Donations</h2>
                            <p style={{ color: 'white' }}>Members can view the estate's roster and make contributions in gold, lapis, or gems, supporting the estate's growth and activities.</p>
                        </div>

                        {/* Construction and Upgrades */}
                        <div className='r-infoSection'>
                            <h2 className='r-subHeader'>Construction and Upgrades</h2>
                            <p style={{ color: 'white' }}>The construct tab allows members to collaboratively work on upgrading estate buildings, including the Castle, Altar of Champions, Trade Market, Notice Board, and Estate Shop. Each building can reach up to level 10, enhancing the estate's capabilities.</p>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Castle;

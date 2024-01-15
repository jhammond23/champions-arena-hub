import React from 'react';

const TradeMarket = () => {
    return (
        <div className='r-deedOuterCont'>
            <div className='r-deedInfoCont'>
                <div className='r-deedNameBanner'>
                    <h1 className='r-deedName'>Trade Market</h1>

                    {/* Overview of Trade Market */}
                    <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Overview</h2>
                        <p style={{color: 'white'}}>The Trade Market is a vital hub in the game where players can buy and sell items like equipment, soulstones, and various upgrades. Transactions here are key for both free-to-play and paying players.</p>
                    </div>

                    {/* Buying and Selling */}
                    <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Buying and Selling Mechanics</h2>
                        <p style={{color: 'white'}}>Items must be purchased with paid gems, but sellers receive standard gems. This dynamic creates an active market, benefiting both buyers and sellers.</p>
                    </div>

                    
                    {/* Listing Fees */}
                    <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Listing Fees</h2>
                        <p style={{color: 'white'}}>Sellers can expect to pay a 10-20% fee when successfully selling an item. There is also a 10% listing fee that will be returned when sold or unsold. This is prevent users from listing items for outrageous prices. </p>
                    </div>

                    {/* Importance of Trade Market */}
                    <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Significance</h2>
                        <p style={{color: 'white'}}>The Trade Market is crucial for progression. Selling rare items can significantly boost a player's account, making it a key element of the game's economy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeMarket;

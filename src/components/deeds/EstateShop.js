import React from 'react';

const EstateShop = () => {
    return (
        <div className='r-deedOuterCont'>
            <div className='r-deedInfoCont'>
                <div className='r-deedNameBanner'>
                    <h1 className='r-deedName'>Estate Shop</h1>

                    {/* Introduction to Estate Shop */}
                    <div className='r-infoSection'>
                    <h2 className='r-subHeader'>Overview</h2>
                        <p style={{color: 'white'}}>The Estate Shop is a marketplace within each estate where the estate can auction items earned from Notice Board tasks.</p>
                    </div>

                    {/* Auctioning Items */}
                    <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Auctioning Items</h2>
                        <p style={{color: 'white'}}>Items obtained from tasks can be listed in the Estate Shop for sale. This provides a steady flow of resources and valuable items to the estate's community.</p>
                    </div>

                    {/* Currency and Transactions */}
                    <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Transactions with Gems</h2>
                        <p style={{color: 'white'}}>Items in the Estate Shop are sold for gems. The revenue generated from these sales adds to the estate's gem stock, which can be used for various estate enhancements and activities.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EstateShop;

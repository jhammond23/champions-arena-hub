import React from 'react';

const CashShop = () => {
    // Define the base style for all lists
    const listBaseStyle = {
        color: 'white',
        paddingLeft: '0', // Remove default padding
    };

    // Define the style for the list containers
    const listContainerStyle = {
        borderLeft: '3px solid', // We'll use a border to denote priority
        paddingLeft: '40px', // Add padding to the left of the border
        marginBottom: '20px', // Add some space between sections
        display: 'flex',
        flexDirection: 'column',
    };

    // Define individual styles for priority levels, changing only the border color
    const highPriorityStyle = { ...listContainerStyle, borderLeftColor: '#4CAF50' }; // Green border for high priority
    const mediumPriorityStyle = { ...listContainerStyle, borderLeftColor: '#FFEB3B' }; // Yellow border for medium priority
    const lowPriorityStyle = { ...listContainerStyle, borderLeftColor: '#F44336' }; // Red border for low priority

    return (
        <div className='center'>
            <div className='r-background'>
                <div className='r-deedInfoCont'>

                    {/* Header */}
                    <div className='r-deedNameBanner'>
                        <h1 className='r-deedName'>Cash Shop</h1>
                        <p style={{ color: 'white', textAlign: 'left' }}>
                            Tier List Of Best Value Items. The offers available on the PC version are different from those on the mobile version. Please play the mobile version to see more offers.
                        </p>
                    </div>

                    {/* Priority Items */}
                    <div className='r-deedNameBanner' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'left', textAlign: 'left' }}>
                        <h2 className='r-subHeader'>Cash Shop Deals</h2>

                        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                            <p style={{ color: 'white' }}>
                                Explore our selection of top-tier items, curated to enhance your gaming experience. From essential subscriptions to exclusive packages, prioritize your purchases effectively with our High, Medium, and Low Priority recommendations.
                            </p>
                        </div>
                        <div style={highPriorityStyle}>
                            <h3 className='r-subHeader'>High Priority</h3>
                            <ul style={listBaseStyle}>
                                <li>Battle Pass ($26.99 USD)</li>
                                <li>Monthly Subscription Gem Package 1 ($1.99 USD)</li>
                                <li>Monthly Subscription Gem Package 2 ($8.99 USD)</li>
                            </ul>
                        </div>

                        <div style={mediumPriorityStyle}>
                            <h3 className='r-subHeader'>Medium Priority</h3>
                            <ul style={listBaseStyle}>
                                <li>Normal Summon Ticket Package ($1.99 USD)</li>
                                <li>Starter Package ($5.99 USD)</li>
                                <li>Advanced Starter Package ($42.99 USD)</li>
                                <li>Premium Summon Ticket ($0.99 USD)</li>
                                <li>Monthly Growth Package ($16.99 USD)</li>
                            </ul>
                        </div>

                        <div style={lowPriorityStyle}>
                            <h3 className='r-subHeader'>Low Priority</h3>
                            <ul style={listBaseStyle}>
                                <li>Weekly Soulstone Selection Package ($31.99 USD)</li>
                                <li>Equipment Package (Tanker/Caster/Supporter/Striker) ($26.99 USD)</li>
                                <li>Gem Packages ($0.99 USD - $189.99 USD)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Minting Scrolls */}
                    <div className='r-deedNameBanner'>
                        <h3 className='r-subHeader'>Minting Scrolls</h3>
                        <p style={{ color: 'white' }}>
                            Users who purchase database champions through summoning and put in time and resources to level them up might find themselves in the position of having very strong champions with no means of retaining ownership and the ability to transfer or sell these assets.
                        </p>
                        <p style={{ color: 'white' }}>
                            For this reason, these users will be able to purchase Minting Scrolls at $50 or potentially earn them in the Arena so they can turn their database champions into NFT-Ready Champions to enjoy the in-game benefits of NFT ownership.
                        </p>
                        <div style={{ color: 'white', textAlign: 'left', width: '100%' }}>
                            <table style={{ color: 'white', width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: '10px' }}>Rarity</th>
                                        <th style={{ borderBottom: '1px solid white', padding: '10px' }}>Minting Scrolls Required</th>
                                        <th style={{ borderBottom: '1px solid white', padding: '10px' }}>Cost to Mint</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '10px' }}>Common</td>
                                        <td style={{ padding: '10px' }}>2 Minting Scrolls</td>
                                        <td style={{ padding: '10px' }}>$100</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '10px' }}>Uncommon</td>
                                        <td style={{ padding: '10px' }}>4 Minting Scrolls</td>
                                        <td style={{ padding: '10px' }}>$200</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '10px' }}>Rare</td>
                                        <td style={{ padding: '10px' }}>6 Minting Scrolls</td>
                                        <td style={{ padding: '10px' }}>$300</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '10px' }}>Epic</td>
                                        <td style={{ padding: '10px' }}>11 Minting Scrolls</td>
                                        <td style={{ padding: '10px' }}>$550</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '10px' }}>Legendary</td>
                                        <td style={{ padding: '10px' }}>26 Minting Scrolls</td>
                                        <td style={{ padding: '10px' }}>$1300</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p style={{ padding: '10px' }}>
                                20,000 Paid Gems = 5 Minting Scrolls
                            </p>
                        </div>

                    </div>
                    {/* Minting Scrolls */}
                    <div className='r-deedNameBanner'>
                        <h2 className='r-subHeader'>In-Game Store</h2>
                        <p style={{ color: 'white' }}>The in-game store is a different store than the cash shop. The in-game store is where players can spend their currencies earned in-game to purchase items and redeem soul stones for champions.</p>


                        {/* Mayhem Tab */}
                        <div className='r-infoSection'>
                            <h2 className='r-subHeader'>Mayhem</h2>
                            <p style={{ color: 'white' }}>
                                Exchange soul stones for champions in the Mayhem tab. The available champion changes monthly, giving the oppotunity to earn a new champion each month. Soulstones can be earned or bought to redeem champions.
                            </p>
                            <table className="r-table" style={{width: '100%'}}>
                                <thead>
                                    <tr>
                                        <th>Champion Rarity</th>
                                        <th>Soul Stones Required</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Legendary</td>
                                        <td>120</td>
                                    </tr>
                                    <tr>
                                        <td>Epic</td>
                                        <td>160</td>
                                    </tr>
                                    <tr>
                                        <td>Rare</td>
                                        <td>240</td>
                                    </tr>
                                    <tr>
                                        <td>Uncommon</td>
                                        <td>400</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Tower of Trial Tab */}
                            <div className='r-infoSection'>
                                <h2 className='r-subHeader'>Tower of Trial</h2>
                                <p style={{ color: 'white', width: '100%' }}>
                                    Buy items for Tower of Trial currency or exchange upgrade stones in the Tower of Trial tab. Upgrading the upgrade stones is a great way to earn more of the rarer upgrade stones.
                                </p>
                                <table className="r-table" style={{width: '100%'}}>
                                    <thead>
                                        <tr>
                                            <th>Upgrade From</th>
                                            <th>Upgrade To</th>
                                            <th>Quantity Needed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Common</td>
                                            <td>Uncommon</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Green</td>
                                            <td>Blue</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Blue</td>
                                            <td>Purple</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>Purple</td>
                                            <td>Red</td>
                                            <td>6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashShop;
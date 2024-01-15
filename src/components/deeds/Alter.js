import React from 'react';

const EstatesInfo = () => {
    return (
        <div className='r-deedOuterCont'>
            <div className='r-deedInfoCont'>

            <section className='section' id='Altar of Champions'>
                <div className='r-deedNameBanner'>
                    <h2 className='r-deedName'>Altar of Champions</h2>
                    <p className='r-deedDescription'>This is your hub for managing and summoning Champions. Here, you can summon new Champions, promote existing ones, mint, exchange levels, dismantle, and reset them to their original state.</p>
                    <p style={{color: 'white', textAlign: 'center'}}> When level 10 is reached, the estate leader can boost summon rates for specific champions.</p>
                    <ul>
                        <li style={{color: 'white', textAlign: 'center'}}>5,500 Gems For 10X Summon (Premium)</li>
                        <li style={{color: 'white', textAlign: 'center'}}>1,100 Gems For 10X Summon (Normal)</li>
                    </ul>

                    {/* Summon Rates */}
                    <h3 className='r-subHeader'>Summon Rates</h3>
                    <table style={{color: 'white', width: '100%', textAlign: 'left'}}>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>5 Star</th>
                                <th>4 Star</th>
                                <th>3 Star</th>
                                <th>2 Star</th>
                                <th>1 Star</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=''>Premium</td>
                                <td>.25%</td>
                                <td>1.2%</td>
                                <td>12.5%</td>
                                <td>31%</td>
                                <td>55%</td>
                            </tr>
                            <tr>
                                <td className=''>Normal</td>
                                <td>.02%</td>
                                <td>.12%</td>
                                <td>1.25%</td>
                                <td>3.1%</td>
                                <td>5.51%</td>
                            </tr>
                        </tbody>
                    </table>


                    {/* Promotion Information */}
                    <h3 className='r-subHeader'>Promotion</h3>
                    <p style={{color: 'white'}}>You can star up Champions with Soulstones & Lapis</p>
                    <table style={{color: 'white', width: '100%', textAlign: 'left'}}>
                        <thead>
                            <tr>
                                <th>Champion Type</th>
                                <th>Current Star</th>
                                <th>Soulstones</th>
                                <th>Lapis</th>
                                <th>New Star</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rare</td>
                                <td>3 Star</td>
                                <td>20</td>
                                <td>-</td>
                                <td>4 Star</td>
                            </tr>
                            <tr>
                                <td>Rare</td>
                                <td>4 Star</td>
                                <td>30</td>
                                <td>400</td>
                                <td>5 Star</td>
                            </tr>
                            <tr>
                                <td>Uncommon</td>
                                <td>2 Star</td>
                                <td>30</td>
                                <td>-</td>
                                <td>3 Star</td>
                            </tr>
                            <tr>
                                <td>Uncommon</td>
                                <td>2 Star</td>
                                <td>40</td>
                                <td>300</td>
                                <td>4 Star</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Minting Information */}
                    <h3 className='r-subHeader'>Minting Information</h3>
                    <table style={{color: 'white', width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
                        <thead>
                            <tr style={{border: '1px solid white'}}>
                                <th style={{border: '1px solid white'}}>Rarity</th>
                                <th style={{border: '1px solid white'}}>Minting Scrolls Required</th>
                                <th style={{border: '1px solid white'}}>Cost to Mint</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{border: '1px solid white'}}>
                                <td style={{border: '1px solid white'}}>Common</td>
                                <td style={{border: '1px solid white'}}>2</td>
                                <td style={{border: '1px solid white'}}>$100</td>
                            </tr>
                            <tr style={{border: '1px solid white'}}>
                                <td style={{border: '1px solid white'}}>Uncommon</td>
                                <td style={{border: '1px solid white'}}>4</td>
                                <td style={{border: '1px solid white'}}>$200</td>
                            </tr>
                            <tr style={{border: '1px solid white'}}>
                                <td style={{border: '1px solid white'}}>Rare</td>
                                <td style={{border: '1px solid white'}}>6</td>
                                <td style={{border: '1px solid white'}}>$300</td>
                            </tr>
                            <tr style={{border: '1px solid white'}}>
                                <td style={{border: '1px solid white'}}>Epic</td>
                                <td style={{border: '1px solid white'}}>11</td>
                                <td style={{border: '1px solid white'}}>$550</td>
                            </tr>
                            <tr style={{border: '1px solid white'}}>
                                <td style={{border: '1px solid white'}}>Legendary</td>
                                <td style={{border: '1px solid white'}}>26</td>
                                <td style={{border: '1px solid white'}}>$1300</td>
                            </tr>
                        </tbody>
                    </table>

                    <p style={{color: 'white'}}>NFT Ready = Trading is not possible in the store. It has the same status as other NFT Champions									
                        "You must mint NFT-Ready champions into NFT champions if you want to trade in secondary markets
                        (As far as we know, this is done on the Gala Chain with 0 fees)"								
                    </p>
                    <br/>
                    <p style={{color: 'white'}}>
                        "Exchange - The level of 2 selected champions will be swapped. Levels that exceed the max level of the Champion cannot be transferred and the equipments will be unequipped."									
                    </p>
                    <br/>
                    <p style={{color: 'white'}}>                              
                        Dismantle - Once a Champion is dismantled, it will be removed from your list. Equipped items will be automatically unequipped.
					</p>
                    <br/>
                    <p style={{color: 'white'}}>Reset - The Soul Stones used for rank-up will be returned upon Champion reset. However, the currencies that were used will NOT be returned.
                    </p>

                    {/* Dismantling Information */}
                    <h3 className='r-subHeader'>Dismantling Information</h3>
                    <table style={{color: 'white', width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
                        <thead>
                            <tr style={{border: '1px solid white'}}>
                                <th style={{border: '1px solid white'}}>Star Level Dismantled</th>
                                <th style={{border: '1px solid white'}}>Soulstones</th>
                                <th style={{border: '1px solid white'}}>XP</th>
                                <th style={{border: '1px solid white'}}>Essence</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{border: '1px solid white'}}>
                                <td style={{border: '1px solid white'}}>1 Star</td>
                                <td style={{border: '1px solid white'}}>40 (Specific to Champion)</td>
                                <td style={{border: '1px solid white'}}>—</td>
                                <td style={{border: '1px solid white'}}>20</td>
                            </tr>
                            <tr style={{border: '1px solid white'}}>
                                <td style={{border: '1px solid white'}}>2 Star</td>
                                <td style={{border: '1px solid white'}}>40 (Specific to Champion)</td>
                                <td style={{border: '1px solid white'}}>2,000</td>
                                <td style={{border: '1px solid white'}}>30</td>
                            </tr>
                            <tr style={{border: '1px solid white'}}>
                                <td style={{border: '1px solid white'}}>3 Star</td>
                                <td style={{border: '1px solid white'}}>40 (Specific to Champion)</td>
                                <td style={{border: '1px solid white'}}>10,000</td>
                                <td style={{border: '1px solid white'}}>60</td>
                            </tr>
                            <tr style={{border: '1px solid white'}}>
                                <td style={{border: '1px solid white'}}>4 Star</td>
                                <td style={{border: '1px solid white'}}>40 (Specific to Champion)</td>
                                <td style={{border: '1px solid white'}}>25,000</td>
                                <td style={{border: '1px solid white'}}>120</td>
                            </tr>
                        </tbody>
                    </table>
                {/* Altar Upgrading Information */}
                <h3 className='r-subHeader'>Altar Upgrading Information</h3>
                <table style={{color: 'white', width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
                    <thead>
                        <tr style={{border: '1px solid white'}}>
                            <th style={{border: '1px solid white'}}>Level</th>
                            <th style={{border: '1px solid white'}}>Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{border: '1px solid white'}}>
                            <td style={{border: '1px solid white'}}>5</td>
                            <td style={{border: '1px solid white'}}>Increased champion drop rate from the Champion's Altar (only for regular summoning)</td>
                        </tr>
                        <tr style={{border: '1px solid white'}}>
                            <td style={{border: '1px solid white'}}>6</td>
                            <td style={{border: '1px solid white'}}>The estate gains 10 gems from Champion resets</td>
                        </tr>
                        <tr style={{border: '1px solid white'}}>
                            <td style={{border: '1px solid white'}}>7</td>
                            <td style={{border: '1px solid white'}}>The estate gains 10,000 Gold from Dismantling</td>
                        </tr>
                        <tr style={{border: '1px solid white'}}>
                            <td style={{border: '1px solid white'}}>8</td>
                            <td style={{border: '1px solid white'}}>Increased Champion drop rate from the Champion's Altar (only for regular summoning)</td>
                        </tr>
                        <tr style={{border: '1px solid white'}}>
                            <td style={{border: '1px solid white'}}>9</td>
                            <td style={{border: '1px solid white'}}>Can select Champions for Chance Up (only for regular summoning)</td>
                        </tr>
                        <tr style={{border: '1px solid white'}}>
                            <td style={{border: '1px solid white'}}>10</td>
                            <td style={{border: '1px solid white'}}>Increased Champion drop rate from the Champion's Altar (only for regular summoning)</td>
                        </tr>
                    </tbody>
                </table>


                </div>
            </section>
            </div>
        </div>
    );
};

export default EstatesInfo;

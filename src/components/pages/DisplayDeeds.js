import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { useRef } from 'react';
import Alter from '../deeds/Alter';
import  Castle from '../deeds/Castle';
import EstateShop from '../deeds/EstateShop';
import NoticeBoard from '../deeds/NoticeBoard';
import TradeMarket from '../deeds/TradeMarket';

const Estates = () => {

    const [myDeed, setmyDeed] = useState('');
    const deeds = ['Alter of Champions', 'Castle', 'Trade Market', 'Notice Board', 'Estate Shop']
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    return (
        <div className='r-background'>
            <div className='r-deedsBG'>
            <br />

                <header className='r-deedSelectorTitle'>state</header>


                <br />

                <div className='r-deedSelectorContainer'>
                    <div className='r-deedSelector' ref={ref}>
                        <button className='r-scrollBtnTL' onClick={() => scroll(-150)}></button>

                        {deeds.map((deed) => (
                            <Tilt>
                                <button className={`r-${deed}`}
                                    onClick={() => setmyDeed(deed)}
                                    key={deed}
                                >
                                    <div className='r-deedNames'>{deed}</div>
                                </button>
                            </Tilt>

                        ))}
                        <button className='r-scrollBtnTR' onClick={() => scroll(150)}></button>

                    </div>
                </div>
                <div className='r-background'>
                    {myDeed === 'Alter of Champions' && <Alter />}
                    {myDeed === 'Castle' && <Castle />}
                    {myDeed === 'Trade Market' && <TradeMarket />}
                    {myDeed === 'Estate Shop' && <EstateShop />}
                    {myDeed === 'Notice Board' && <NoticeBoard />}

                </div>
            </div>
        </div>
    )
}

export default Estates
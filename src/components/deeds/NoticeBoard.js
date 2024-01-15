import React from 'react';

const NoticeBoard = () => {
    return (
        <div className='r-deedOuterCont'>
            <div className='r-deedInfoCont'>
                <div className='r-deedNameBanner'>
                    <h1 className='r-deedName'>Notice Board</h1>

                    {/* Introduction to Notice Board */}
                    <div className='r-infoSection'>
                    <h2 className='r-subHeader'>Overview</h2>

                        <p style={{color: 'white'}}>The Notice Board serves as a hub for daily tasks that benefit both the estate and the players. The estate loot can be auctioned at the Estate Shop to players within that estate.</p>
                    </div>

                    {/* Task Difficulty and Requirements */}
                    <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Task Difficulty Levels</h2>
                        <p style={{color: 'white'}}>Tasks vary from levels 1 to 5, with increasing difficulty and requirements. Higher-level tasks offer more valuable rewards but also demand more skilled heroes and longer completion times.</p>
                    </div>

                    {/* Booking Heroes for Tasks */}
                    <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Booking Heroes</h2>
                        <p style={{color: 'white'}}>Completing a task requires booking your heroes for a specific duration. The time varies depending on the task's complexity and level.</p>
                    </div>

                    {/* Earning and Auctioning Loot */}
                    <div className='r-infoSection'>
                        <h2 className='r-subHeader'>Earning and Auctioning Loot</h2>
                        <p style={{color: 'white'}}>The loot earned from these tasks is a primary source of income for estates. Players can auction this loot at their Estate Shop, creating a dynamic economy within the game.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NoticeBoard;

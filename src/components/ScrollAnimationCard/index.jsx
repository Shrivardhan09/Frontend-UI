import React from 'react';
import ScrollBar from './ScrollBar';
import LeftCard from './LeftCard';

const MainBox = () => {
    return (
        <div className='flex justify-center items-center my-12'>
            <div className='md:w-4/5 md:flex md:justify-center items-center bg-primary-100 rounded-xl gap-10 p-12 overflow-hidden md:h-[600px] '>
                <LeftCard />
                <ScrollBar />
            </div>
        </div>

    );
};

export default MainBox;

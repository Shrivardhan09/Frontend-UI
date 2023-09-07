import React from 'react';
import Card from './Card';
import '../../app/globals.css';

const ScrollBar = ({ number = 9 }) => {
    return (
        <div className='w-full my-12 h-[400px]'>
            <h3 className='text-4xl font-montserrat font-bold text-purple-500 mb-3'>ahead</h3>

            <div
                style={{ maxHeight: '100%', overflowY: 'scroll' }}
                className='w-full overflow-y-scroll custom-scroll-bar'
            >
                {Array.from({ length: number }, (_, index) => (
                    <Card key={index} number={index + 1} />
                ))}
            </div>
        </div>
    );
};

export default ScrollBar;

import React from 'react';
import CardTimeline from './CardTimeline';

export default function TimelineBox({ numCards = 9 }) {
    return (
        <div className='overflow-y-scroll w-full scroll-container' style={{ maxHeight: '100%' }}>
            {Array.from({ length: numCards }, (_, index) => (
                <CardTimeline key={index} number={index + 1} />
            ))}
        </div>
    );
}

import React from 'react';

const Card = ({ role }) => {
    return (
        <div className='flex items-center justify-center gap-7 mt-7 group'>
            <div className=' relative w-full h-56'>
                <div className='bg-yellow-100 px-5 py-7 rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform '>
                    <div className='font-semibold'>{role}</div>
                    <ul className='list-disc ml-5 hover:mb-6 duration-300'>
                        <li>Full-time position</li>
                        <li>Berlin</li>
                        <li>$78k-90k, Equity share options</li>
                    </ul>
                    <div className='absolute left-10 right-0 bottom-0 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <button className='bg-black text-white py-2 px-5 rounded-xl'>
                            See Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

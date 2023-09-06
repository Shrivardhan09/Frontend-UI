import { useScroll } from 'framer-motion';
import React, { useState } from 'react';
import Card from './Card';

const Vacancy = () => {
    return (
        <div className='grid place-items-center place-content-center gap-5 '>
            <div className='font-bold font-montserrat text-4xl w-4/5 '>
                <h2 className='w-1/2'>Open Vacancies</h2>
            </div>
            <div className='  flex items-center justify-center '>
                <div className=' flex items-center justify-center gap-7 w-full  '>
                    < Card role='Full Stack Developer' />
                    < Card role='UI Developer' />
                    < Card role='Senior Developer' />
                </div>
            </div>
        </div>
    );
};

export default Vacancy;

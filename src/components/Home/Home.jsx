import React from 'react'
import '/src/app/globals.css'
import Banner from './Banner'

const Home = () => {
    return (
        <>
            <div className='m-5 md:flex items-center justify-center relative hidden'>
                <Banner />
            </div>
            <div className='flex justify-center items-center py-32'>
                <div className='md:flex gap-6 justify-center flex-wrap w-4/5 '>
                    <div className='flex-1 py-3'>
                        <h2 className='text-3xl font-bold'>EQ beats IQ</h2>
                    </div>
                    <div className='md:flex-1 text-justify py-3'>
                        People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
                    </div>
                    <div className='md:flex-1 text-justify py-3'>
                        They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

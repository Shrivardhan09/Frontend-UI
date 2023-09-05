import React from 'react'
import '/src/app/globals.css'

const Home = () => {
    return (
        <>
            <div className='m-5 flex items-center justify-center'>
                <div className='rounded-lg bg-primary-100 px-2  w-5/6 flex items-center justify-center'>
                    <img src="./Home-img.png" alt="frontend-ui" />
                </div>
            </div>
            <div className='flex justify-center items-center my-16'>
                <div className='flex gap-6 justify-center flex-wrap w-4/5'>
                    <div className='flex-1'>
                        <h1 className='text-3xl font-bold'>EQ beats IQ</h1>
                    </div>
                    <div className='flex-1 text-justify'>
                        People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
                    </div>
                    <div className='flex-1 text-justify'>
                        They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

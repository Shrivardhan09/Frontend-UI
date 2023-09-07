import React from 'react'
import '/src/app/globals.css'

const Home = () => {
    return (
        <>
            <div className='m-5 flex items-center justify-center relative'>
                <div className='rounded-lg bg-primary-100 px-12  w-5/6 flex items-center justify-center h-screen gap-5'>
                    {/* <img src="./Home-img.png" alt="frontend-ui" /> */}
                    <div className='flex flex-col items-start justify-center gap-10 flex-1'>
                        <div>
                            <p>Ahead app</p>
                        </div>
                        <div className='text-4xl font-montserrat font-bold'>
                            <h1>Master you life by mastering emotions</h1>
                        </div>
                        <div className='flex gap-5'>
                            <div className="flex gap-2 bg-black rounded-md justify-center items-center px-3 py-1 mb-5">
                                <img src="./apple.png" alt="apple-img" className="w-[30px] h-[32px]" />
                                <div className="text-white">
                                    <p className="text-sm font-thin m-0">Download on the</p>
                                    <h5 className="text-xl font-bold">Apple Store</h5>
                                </div>
                            </div>
                            <div >
                                <img src="./stars.png" alt="stars" className='w-[100px]' />
                                <p>100+ Appstore reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 '>
                        <img src="./Home-img.png" alt="home-image" className='w-[500px]' />
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center my-16'>
                <div className='flex gap-6 justify-center flex-wrap w-4/5'>
                    <div className='flex-1'>
                        <h2 className='text-3xl font-bold'>EQ beats IQ</h2>
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

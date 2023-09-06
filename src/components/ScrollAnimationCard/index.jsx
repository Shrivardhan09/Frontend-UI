import React from 'react'
import ScrollBar from './ScrollBar'

const MainBox = () => {
    return (
        <div className='flex justify-center items-center my-12 '>
            <div className='w-4/5 flex justify-center items-center bg-primary-100 rounded-xl gap-10 p-12 h-[600px]'>
                <div className='flex flex-col flex-1  px-10 py-3 gap-10'>
                    <h2 className='text-4xl font-montserrat font-bold'>Work with us</h2>
                    <div className='relative bg-white rounded-xl'>
                        <div className='bg-white rounded-xl px-5 py-3'>
                            <h4 className='font-bold text-lg'>About</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa nobis inventore itaque sequi temporibus vero earum neque. Facere, impedit ducimus! Ex reiciendis repudiandae nulla perspiciatis sit saepe nesciunt qui.
                            </p>
                        </div>
                        <div className='bg-[#f8dfd0] rounded-xl px-5 py-3 '>
                            <h4 className='font-bold text-lg'>Products</h4>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dolore beatae excepturi molestias, reiciendis repudiandae animi, quidem asperiores error, cumque rem maiores ipsum neque ipsa a. Eos quisquam illo tenetur.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className='flex flex-col flex-1 gap-3 justify-center items-center overflow-hidden'
                >
                    <h2 className='text-4xl font-montserrat font-bold text-purple-500 mt-5'>ahead</h2>
                    < ScrollBar />
                </div >
            </div>
        </div >
    )
}

export default MainBox

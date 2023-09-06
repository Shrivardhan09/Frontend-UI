import { motion } from 'framer-motion'
import React from 'react'


const BoxAnimation = () => {
    return (
        <div className='flex justify-center  mt-10 mb-10'>
            <div className='w-4/5 bg-[#FEF6F1] rounded-xl relative flex flex-col  gap-5 '>
                <div className='lg:w-1/2 px-12 py-16'>
                    <p>Build Out of Frustration</p>
                    <h3 className='mt-5 text-3xl font-bold font-montserrat'>Meeting the Ahead App</h3>
                </div>

                <div className='flex gap-7 mt-12 relative'>

                    <div className='bg-[#f8dfd0] rounded-tr-large relative  '>
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView='visible'
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            variants={{
                                visible: { opacity: 1, scale: 1.0 }
                            }}
                        >
                            <div className='border-8 border-white rounded-full w-32 h-32 absolute top-[-12px] right-[-12px]'>
                                <img
                                    src="./animation-img.jpg"
                                    alt="animation-img"
                                    className='rounded-full object-cover w-full h-full'
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className='flex-1 px-20'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam necessitatibus quibusdam eaque voluptatem deleniti, maiores non! Laborum, incidunt molestiae nam non doloremque similique labore voluptate?
                        </p>
                        <p className="mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, libero!
                        </p>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default BoxAnimation

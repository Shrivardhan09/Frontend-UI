import { motion } from 'framer-motion'
import React from 'react'


const BoxAnimation = () => {
    return (
        <div className='flex justify-center mt-10 mb-10'>
            <div className='w-4/5 bg-[#FEF6F1] rounded-lg relative md:flex flex-col gap-5'>
                <div className=' md:px-12 md:py-16 p-7'>
                    <p>Build Out of Frustration</p>
                    <h3 className='mt-5 text-3xl font-bold font-montserrat'>Meeting the Ahead App</h3>
                </div>

                <div className='md:flex gap-7 md:mt-12 relative'>

                    <div className='bg-[#f8dfd0] rounded-tr-large relative md:block hidden '>
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
                            <div className='border-8 border-white rounded-full w-32 h-32 absolute top-[-12px] right-[-12px]  '>
                                <img
                                    src="./animation-img.jpg"
                                    alt="animation-img"
                                    className='rounded-full object-cover w-full h-full'
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className='md:flex-1 md:px-20 p-7'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam necessitatibus quibusdam eaque voluptatem deleniti, maiores non! Laborum, incidunt molestiae nam non doloremque similique labore voluptate?
                        </p>
                        <p className="mt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, libero!
                        </p>
                    </div>
                </div>
                <div className='absolute right-10 -top-4'>
                    <motion.img
                        src="./flower.png"
                        alt="flower"
                        className='w-8'
                        initial='hidden'
                        whileInView={{ opacity: 1 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2 }}
                    />
                </div>
            </div>
        </div >

    )
}

export default BoxAnimation

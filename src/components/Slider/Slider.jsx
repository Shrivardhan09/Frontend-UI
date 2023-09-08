import { motion } from 'framer-motion'
import '/src/app/globals.css'
import MoodCards from './MoodCards'

const Slider = () => {


    return (
        <div className='w-full'>
            <motion.div
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 1.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100, y: -25 },
                    visible: { opacity: 1, x: 0, y: 0 }
                }}
            >
                <div className='flex justify-center items-center'>
                    <div className=' flex gap-3 items-center w-4/5'>
                        <h2 className='text-4xl font-bold'>Does it sound familiar</h2>
                        <img src="./span.png" alt="angry-jellyfish" className='w-8' />
                    </div>
                </div>
            </motion.div>

            <div className='slider-container mx-auto'>
                <MoodCards />
            </div>
        </div>
    )
}

export default Slider

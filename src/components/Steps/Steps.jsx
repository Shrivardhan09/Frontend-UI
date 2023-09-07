import { motion } from "framer-motion"


const Steps = () => {
    return (
        <div className='flex justify-center items-center w-4/5 gap-10'>
            <div className='flex-1 flex flex-col items-center justify-start gap-3 h-28 '>
                <motion.p
                    className=' px-3 py-1 bg-yellow-300 rounded-full'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    1
                </motion.p>
                <motion.p
                    className='font-thin text-center'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    Answer questions on social skills
                </motion.p>
            </div>
            <div className='flex-1 flex flex-col items-center justify-start gap-3 h-28'>
                <motion.p
                    className=' px-3 py-1 bg-yellow-300 rounded-full'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    2
                </motion.p>
                <motion.p
                    className='font-thin text-center'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >Let others anonymously answer the same questions about you
                </motion.p>
            </div>
            <div className='flex-1 flex flex-col items-center justify-start gap-3 h-28'>
                <motion.p
                    className=' px-3 py-1 bg-yellow-300 rounded-full'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    3
                </motion.p>
                <motion.p
                    className='font-thin text-center'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    Find out where you and other see things the same way and where not!
                </motion.p>
            </div>
        </div>
    )
}

export default Steps

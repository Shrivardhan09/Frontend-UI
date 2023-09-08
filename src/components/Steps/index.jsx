import { motion } from "framer-motion"
import Steps from "./Steps"
import CardAnimation from "./CardAnimation"

const StepsToFollow = () => {
    return (
        <div className='flex justify-center items-center my-12 py-12'>
            <div className='md:w-4/5 bg-sky-50 rounded-xl px-3'>
                <motion.div
                    className='md:flex justify-center items-center flex-col py-20'
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <p>Let your family, friends and co-workers (anonymously) rate your social skills</p>
                    <h2 className='font-bold text-4xl font-montserrat'>Ever wonder what other think of you ?</h2>
                </motion.div>
                <div className='flex justify-center items-center my-12 '>
                    < Steps />
                </div>
                <div className="md:flex justify-center items-center my-12 hidden ">
                    < CardAnimation />
                </div>
            </div>
        </div>
    )
}
export default StepsToFollow

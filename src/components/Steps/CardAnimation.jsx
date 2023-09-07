import { motion } from "framer-motion"


const CardAnimation = () => {
    return (
        <motion.div
            className="rounded-xl bg-white relative h-44 flex justify-center items-center w-3/5"
        >
            <div className="flex justify-evenly items-center gap-10 relative w-full h-32">
                <div className="p-2 rounded-full bg-blue-700"></div>
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="absolute top-5 left-5 rounded-lg bg-blue-700 px-3 py-1 text-white">You</motion.p>
                <div className="p-2 rounded-full bg-blue-500"></div>
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="absolute bottom-2 left-56 rounded-lg bg-blue-500 px-3 py-1 text-white" >Anonymous 1</motion.p>
                <div className="p-2 rounded-full bg-yellow-500"></div>
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="absolute right-28 top-3 rounded-lg bg-yellow-500 px-3 py-1 text-white">
                    Anonymous 2
                </motion.p>
                <div className="p-2 rounded-full bg-green-500"></div>
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="absolute -right-7 bottom-2 rounded-lg bg-green-500 px-3 py-1 text-white">
                    Anonymous 3
                </motion.p>
            </div>
        </motion.div>
    )
}

export default CardAnimation

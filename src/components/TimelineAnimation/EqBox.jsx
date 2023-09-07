import { motion } from "framer-motion"


const EqBox = () => {
    return (
        <div className="flex justify-center items-center">
            <motion.div
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 1.5 }}
                variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                }}
                className="flex justify-evenly  gap-10 w-4/5">
                <div className="flex-1">
                    <h2 className="text-3xl font-montserrat font-bold">Be the best with the EQ</h2>
                </div>
                <div className="flex-1 text-justify tracking-tight">
                    <p>Again, please note that these interpretations are based on the assumption that these values are related to a property called "ease" and are measured on a scale.</p>
                </div>
                <div className="flex-1 text-justify tracking-tight ">
                    <p > The actual interpretation may vary depending on the context and the specific meaning assigned to these values in the given dataset or scenario.</p>
                </div>
            </motion.div>
        </div>
    )
}

export default EqBox

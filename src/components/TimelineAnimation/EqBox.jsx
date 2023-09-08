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
                className="md:flex justify-evenly  gap-10 md:w-4/5 px-3 ">
                <div className="md:flex-1 py-2 ">
                    <h2 className="text-3xl font-montserrat font-bold">Be the best with the EQ</h2>
                </div>
                <div className="md:flex-1 text-justify tracking-tight py-2 px-3">
                    <p>Again&#44; please note that these interpretations are based on the assumption that these values are related to a property called ease and are measured on a scale</p>
                </div>
                <div className="md:flex-1 text-justify tracking-tight py-2  px-3">
                    <p > The actual interpretation may vary depending on the context and the specific meaning assigned to these values in the given dataset or scenario</p>
                </div>
            </motion.div>
        </div>
    )
}

export default EqBox

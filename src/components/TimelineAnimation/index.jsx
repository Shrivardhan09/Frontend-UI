import { motion } from "framer-motion";
import TimelineBox from "./TimelineBox";
import EqBox from "./EqBox";
import '../../app/globals.css'

const TimeLineAnimation = () => {

    return (
        <>
            <div className="flex justify-center items-center mt-16 md:p-16">
                <div className="md:w-4/5 md:flex flex-col items-start justify-center p-3">
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0, }
                        }}
                        transition={{ duration: 1.5 }}
                    >
                        <p>Wrong with self-improvement & how we are fixing it.</p>
                        <div className="flex gap-3 items-center justify-center">
                            <h2 className="text-4xl font-montserrat font-bold">Self-Improvement Ugh !</h2>
                            <img src="./sad-emoji.jpeg" alt="sad" className="w-[100px]" />
                        </div>
                    </motion.div>
                    <div className="flex justify-start items-center">
                        <div className="md:w-4/5 w-full h-[500px] overflow-y-visible" >
                            <TimelineBox />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-32 py-32">
                <EqBox />
            </div>
        </>
    )
}

export default TimeLineAnimation;

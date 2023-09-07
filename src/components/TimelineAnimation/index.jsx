import { motion, useScroll } from "framer-motion";
import TimelineBox from "./TimelineBox";
import EqBox from "./EqBox";


const TimeLineAnimation = () => {
    const { scroll } = useScroll()

    return (
        <>
            <div className="flex justify-center items-center mt-16 p-16">
                <div className="w-4/5 flex flex-col items-start justify-center">
                    <div>
                        <p >Wrong with self-imrovement & how we are fixing it.</p>
                        <div className="flex gap-3 items-center justify-center">
                            <h2 className="text-4xl font-montserrat font-bold">Self-Improvement Ugh !</h2>
                            <img src="./sad-emoji.jpeg" alt="sad" className="w-[100px]" />
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <motion.div className="w-4/5 max-h-[500px] overflow-y-visible"
                            {...scroll}
                        >
                            <TimelineBox />
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="my-32 py-32">
                < EqBox />
            </div>
        </>
    )
}

export default TimeLineAnimation;
